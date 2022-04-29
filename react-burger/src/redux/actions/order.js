import {URL} from "../../utils/data";
import {checkResponse} from "../../utils/checkResponse";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const SET_ORDER_CLOSE = 'SET_ORDER_CLOSE';

export const fetchOrderInfo = (link = 'orders', ingredients) => (dispatch) => {
    dispatch({ type: GET_ORDER_REQUEST })
    fetch(`${URL}${link}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            "ingredients": ingredients
        })
    })
        .then(checkResponse)
        .then((result) =>  dispatch({
            type: GET_ORDER_SUCCESS,
            burgersData: result.data
        }))
        .catch(e =>  dispatch({ type: GET_ORDER_FAILED }));
}