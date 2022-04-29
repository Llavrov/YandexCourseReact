import {URL} from "../../utils/data";
import {SET_CONSTRUCTOR_BUN} from "./constructor";
import {checkResponse} from "../../utils/checkResponse";

export const GET_BURGER_REQUEST = 'GET_BURGER_REQUEST';
export const GET_BURGER_SUCCESS = 'GET_BURGER_SUCCESS';
export const GET_BURGER_FAILED = 'GET_BURGER_FAILED';

export const UPDATE_BURGER_DATA = 'UPDATE_BURGER_DATA';

export const fetchBurgerData = (link) => (dispatch) => {
    dispatch({ type: GET_BURGER_REQUEST })
    fetch(`${URL}${link}`)
        .then(checkResponse)
        .then(result =>  dispatch({
            type: GET_BURGER_SUCCESS,
            burgersData: result.data
        }))
        .catch(e => dispatch({ type: GET_BURGER_FAILED }));
}