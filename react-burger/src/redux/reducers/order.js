import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    UPDATE_ORDER_DATA
} from "../actions/order";

const initialState = {
    orderData: [],
    orderRequest: false,
    orderFailed: false,
}


export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: true
            }
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                orderRequest: false,
                orderData: action.orderData
            }
        case GET_ORDER_FAILED:
            return {
                ...state,
                orderRequest: false,
                orderFailed: true,
            }
        case UPDATE_ORDER_DATA:
            return {
                ...state,
                orderData: action.orderData
            }
        default:
            return state;
    }
}