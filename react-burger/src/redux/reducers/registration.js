import {REQUEST_REGISTRATION, SET_USER_DATA} from "../actions/registration";


const initialState = {
    getUser: () => null,
    authorizationRequest: false,
    authorizationFailed: false,
    user: {
        email: "",
        name: ""
    },
    accessToken: null,
    refreshToken: null
}


export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_REGISTRATION:
            return {
                ...state,
                authorizationRequest: true
            }
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload.user,
                getUser: () => true
            }
        default:
            return state;
    }
}