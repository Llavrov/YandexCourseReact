import {
    GET_USER_DATA,
    REQUEST_AUTHORIZATION,
    REQUEST_AUTHORIZATION_FAILED
} from "../actions/authorization";


const initialState= {
    getUser: () => null,
    authorizationMessage: "",
    authorizationRequest: false,
    authorizationFailed: false,
    user: {
        "email": "",
        "name": ""
    },
    accessToken: null,
    refreshToken: null
}

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_AUTHORIZATION:
            return {
                ...state,
                authorizationRequest: true
            }
        case GET_USER_DATA:
            return {

            }
        case REQUEST_AUTHORIZATION_FAILED:
            return {
                ...state,
                authorizationMessage: action.payload
            }
        default:
            return state;
    }
}