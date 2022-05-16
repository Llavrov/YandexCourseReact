import {checkResponse} from "../../utils/checkResponse";
import {URL} from "../../utils/data";
import {getCookie, setCookies} from "../../utils/Cookies";

export const REQUEST_REGISTRATION = 'REQUEST_REGISTRATION';
export const REQUEST_REGISTRATION_FAILED = 'REQUEST_REGISTRATION_FAILED';
export const REQUEST_REGISTRATION_SUCCESS = 'REQUEST_REGISTRATION_SUCCESS';

export const REQUEST_AUTHORIZATION = 'REQUEST_AUTHORIZATION';
export const REQUEST_AUTHORIZATION_FAILED = 'REQUEST_AUTHORIZATION_FAILED';
export const REQUEST_AUTHORIZATION_SUCCESS = 'REQUEST_AUTHORIZATION_SUCCESS';

export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED';
export const SEND_EMAIL_MESSAGE = 'SEND_EMAIL_MESSAGE';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const GET_USER_DATA = 'GET_USER_DATA';

export const AUTH_CHECKED = 'AUTH_CHECKED';
export const LOGOUT = 'LOGOUT';

export const getUserData = (link = 'auth/user') => (dispatch) => {
    return fetch(`${URL}${link}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset-utf-8",
                authorization: getCookie('accessToken'),
            }
        })
        .then(checkResponse)
}

export const checkUserAuth = () => (dispatch) => {
    if (!!getCookie('accessToken')) {
        dispatch(getUserData())
            .then((res) => {
                dispatch({
                    type: AUTH_CHECKED,
                    payload: res
                });
            })
    } else {
        if (localStorage.getItem('refreshToken')) {
            dispatch(updateToken())
                .then(() => {
                    dispatch(checkUserAuth());
                })
        } else {
            dispatch({
                type: AUTH_CHECKED,
                payload: {
                    user: null
                }
            })
        }
    }
}

export const fetchAuthorization = (link = 'auth/login', data) => (dispatch) => {
    dispatch({type: REQUEST_AUTHORIZATION})
    fetch(`${URL}${link}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(checkResponse)
        .then(res => {
            setCookies('accessToken', res.accessToken, {expires: 1200});
            localStorage.setItem('refreshToken', res.refreshToken);
            dispatch({
                type: REQUEST_AUTHORIZATION_SUCCESS,
                payload: res
            });
        })
        .catch(() => dispatch({type: REQUEST_AUTHORIZATION_FAILED, payload: "Неправильный логин или пароль"}))
}

export const fetchForgotPassword = (link = 'password-reset', data) => (dispatch) => {
    fetch(`${URL}${link}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(checkResponse)
        .then(res => {
            dispatch({
                type: SEND_EMAIL_MESSAGE,
                payload: res,
            })
        })
}

export const logout = (link = 'auth/logout') => (dispatch) => {
    return fetch(`${URL}${link}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({token: localStorage.getItem('refreshToken')})
        })
        .then(checkResponse)
        .then(res => {
            localStorage.clear();
            setCookies('accessToken', res.accessToken, {expires: 0});
            dispatch({
                type: LOGOUT,
                payload: res,
            })
        })
}

export const fetchResetPassword = (link = 'password-reset/reset', data) => (dispatch) => {
    fetch(`${URL}${link}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(checkResponse)
        .then(res => {
            dispatch({
                type: RESET_PASSWORD,
                payload: res,
            })
        })
}

export const updateToken = (link = 'auth/token') => (dispatch) => {
    return fetch(`${URL}${link}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token: localStorage.getItem('refreshToken')})
        })
        .then(checkResponse)
        .then(res => {
            setCookies('accessToken', res.accessToken, {expires: 1200});
            localStorage.setItem('refreshToken', res.refreshToken);
            dispatch({
                type: UPDATE_TOKEN,
                payload: res,
            })
        })
        .catch(e => dispatch({type: UPDATE_TOKEN_FAILED, payload: "Ошибка со стороны сервера :("}))
}


export const updateUserData = (link = 'auth/user', data) => (dispatch) => {
    fetch(`${URL}${link}`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'authorization': JSON.stringify(data)
            }
        })
        .then(checkResponse)
        .then(res => {
            dispatch({
                type: UPDATE_TOKEN,
                payload: res,
            })
        })
}

export const fetchRegistration = (link = 'auth/register', data) => (dispatch) => {
    dispatch({type: REQUEST_REGISTRATION});
    fetch(`${URL}${link}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( data ),
    })
        .then(checkResponse)
        .then((res) => {
            setCookies('accessToken', res.accessToken, {expires: 20});
            localStorage.setItem('refreshToken', res.refreshToken);
            dispatch({
                type: REQUEST_REGISTRATION_SUCCESS,
                payload: res,
            });
        })
        .catch(e => dispatch({type: REQUEST_REGISTRATION_FAILED, payload: 'Пользователь уже зарегистрирован'}))
}
