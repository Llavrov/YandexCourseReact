import {
    AUTH_CHECKED,
    REQUEST_AUTHORIZATION,
    REQUEST_AUTHORIZATION_SUCCESS,
    REQUEST_AUTHORIZATION_FAILED,
    UPDATE_TOKEN,
    REQUEST_REGISTRATION,
    REQUEST_REGISTRATION_FAILED,
    REQUEST_REGISTRATION_SUCCESS,
    UPDATE_TOKEN_FAILED,
    SEND_EMAIL_MESSAGE,
    RESET_PASSWORD,
    GET_USER_DATA,
} from "../actions/user";


const initialState = {
    isAuthChecked: false,
    getUser: () => null,
    authorizationRequest: false,
    authorizationFailed: false,
    registrationRequest: false,
    registrationFailed: false,
    resetPass: false,
    setNewPass: false,
    user: {
        email: "",
        name: ""
    },
    accessToken: null,
    refreshToken: null,
    messageError: '',
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CHECKED:
            return {
                ...state,
                isAuthChecked: true,
                getUser: () => action.payload.user,
                user: action.payload.user,
            }
        case REQUEST_AUTHORIZATION:
            return {
                ...state,
                isAuthChecked: true,
                authorizationRequest: true,
            }
        case REQUEST_AUTHORIZATION_SUCCESS:
            return {
                ...state,
                authorizationRequest: false,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                getUser: () => action.payload.user
            }
        case REQUEST_AUTHORIZATION_FAILED:
            return {
                ...state,
                authorizationRequest: false,
                user: initialState.user,
                authorizationFailed: true,
                messageError: action.payload,
                getUser: () => null
            }
        case UPDATE_TOKEN:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            }
        case UPDATE_TOKEN_FAILED:
            return {
                ...state,
                messageError: action.payload
            }
        case REQUEST_REGISTRATION:
            return {
                ...state,
                registrationRequest: true,
            }
        case REQUEST_REGISTRATION_SUCCESS:
            return {
                ...state,
                registrationRequest: false,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                getUser: () => action.payload.user
            }
        case REQUEST_REGISTRATION_FAILED:
            return {
                ...state,
                registrationRequest: false,
                registrationFailed: true,
                messageError: action.payload,
            }
        case SEND_EMAIL_MESSAGE:
            return {
                ...state,
                resetPass: action.payload.success,
                messageError: action.payload.message,
            }
        case RESET_PASSWORD:
            return {
                ...state,
                setNewPass: action.payload.success,
                messageError: action.payload.message,
            }
        case GET_USER_DATA:
            return {
                ...state,
                user: action.payload.user,
            }
        default:
            return state
    }
}