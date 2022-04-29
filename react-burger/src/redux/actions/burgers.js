import {URL} from "../../utils/data";
import {SET_CONSTRUCTOR_BUN} from "./constructor";

export const GET_BURGER_REQUEST = 'GET_BURGER_REQUEST';
export const GET_BURGER_SUCCESS = 'GET_BURGER_SUCCESS';
export const GET_BURGER_FAILED = 'GET_BURGER_FAILED';

export const UPDATE_BURGER_DATA = 'UPDATE_BURGER_DATA';

export const fetchBurgerData = (link) => (dispatch) => {
    dispatch({ type: GET_BURGER_REQUEST })
    fetch(`${URL}${link}`)
        .then(result => {
            if (result.ok) return result.json();
            dispatch({ type: GET_BURGER_FAILED });
            return Promise.reject(`Ошибка ${result.status}`);
        })
        .then(result =>  {
            dispatch({
                type: GET_BURGER_SUCCESS,
                burgersData: result.data
            });
            dispatch({
                type: SET_CONSTRUCTOR_BUN,
                item: result.data.filter(item => item.type === 'bun')[0],
            })
        })
        .catch(e => console.log(e));
}