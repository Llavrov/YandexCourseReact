import {checkResponse} from "../../utils/checkResponse";
import {URL} from "../../utils/data";

export const REQUEST_AUTHORIZATION = 'REQUEST_AUTHORIZATION';
export const GET_USER_DATA = 'GET_USER_DATA';
export const REQUEST_AUTHORIZATION_FAILED = 'REQUEST_AUTHORIZATION_FAILED';
export const REQUEST_AUTHORIZATION_SUCCESS = 'REQUEST_AUTHORIZATION_SUCCESS';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED';

export const fetchAuthorization = (link = 'auth/login', data) => (dispatch) => {
    dispatch({type: REQUEST_AUTHORIZATION})
    console.log(`${URL}${link}`)
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
            dispatch({type: REQUEST_AUTHORIZATION_SUCCESS});
            dispatch({
                type: GET_USER_DATA,
                payload: res,
            })
        })
        .catch(e => dispatch({type: REQUEST_AUTHORIZATION_FAILED, payload: e}))
}

export const updateToken = (link = 'auth/login', refreshToken) => (dispatch) => {
    fetch(`${URL}${link}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token: refreshToken})
        })
        .then(checkResponse)
        .then(res => {
            dispatch({
                type: UPDATE_TOKEN,
                payload: res,
            })
        })
        .catch(e => dispatch({type: UPDATE_TOKEN_FAILED, payload: e}))

}