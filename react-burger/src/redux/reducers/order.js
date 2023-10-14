import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    SET_ORDER_CLOSE,
} from "../actions/order";

const initialState = {
    orderData: {
        name: 'Custom burger',
        order: {
            number: 32145,
        },
        success: false
    },
    orderOpen: false,
    orderRequest: false,
    orderFailed: false,
}


export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: true,
                orderOpen: true
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
        case SET_ORDER_CLOSE:
            return {
                ...state,
                orderData: initialState.orderData,
                orderOpen: false,
            }
        default:
            return state;
    }
}