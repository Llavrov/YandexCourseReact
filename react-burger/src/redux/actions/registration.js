import {checkResponse} from "../../utils/checkResponse";
import {URL} from "../../utils/data";

export const REQUEST_REGISTRATION = 'REQUEST_REGISTRATION';
export const SET_USER_DATA = 'SET_USER_DATA';
export const REQUEST_REGISTRATION_FAILED = 'REQUEST_REGISTRATION_FAILED';
export const REQUEST_REGISTRATION_SUCCESS = 'REQUEST_REGISTRATION_SUCCESS';

export const fetchRegistration = (link = 'auth/register', data) => (dispatch) => {
    dispatch({type: REQUEST_REGISTRATION});
    console.log(JSON.stringify({...data}))
    fetch(`${URL}${link}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data})
        })
        .then(checkResponse)
        .then((res) => {
            dispatch({type: REQUEST_REGISTRATION_SUCCESS});
            dispatch({
                type: SET_USER_DATA,
                payload: res,
            })
        })
        .catch(e => dispatch({type: REQUEST_REGISTRATION_FAILED, payload: e}))
}