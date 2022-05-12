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

export const AUTH_CHECKED = 'AUTH_CHECKED';

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
    if (getCookie('accessToken')) {
        dispatch(getUserData())
            .then((res) => {
                dispatch({
                    type: AUTH_CHECKED,
                    payload: res
                });
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
        .catch(e => dispatch({type: REQUEST_AUTHORIZATION_FAILED, payload: "Неправильный логин или пароль"}))
}

export const updateToken = (link = 'auth/token') => (dispatch) => {
    const refreshToken = localStorage.getItem('refreshToken');
    fetch(`${URL}${link}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token: {refreshToken}})
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
