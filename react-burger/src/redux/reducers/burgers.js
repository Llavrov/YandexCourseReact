import {
    GET_BURGER_REQUEST,
    GET_BURGER_SUCCESS,
    GET_BURGER_FAILED,
    UPDATE_BURGER_DATA
} from "../actions/burgers";

const initialState = {
    burgersData: [],
    burgersRequest: false,
    burgersFailed: false,
}


export const burgersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BURGER_REQUEST:
            return {
                ...state,
                burgersRequest: true
            }
        case GET_BURGER_SUCCESS:
            return {
                ...state,
                burgersRequest: true,
                burgersData: action.burgersData
            }
        case GET_BURGER_FAILED:
            return {
                ...state,
                burgersRequest: true,
                burgersFailed: false,
            }
        case UPDATE_BURGER_DATA:
            return {
                ...state,
                burgersData: action.burgersData
            }
        default:
            return state;
    }
}