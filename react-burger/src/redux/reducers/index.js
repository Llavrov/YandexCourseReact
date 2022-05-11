import { combineReducers } from 'redux';
import {burgersReducer} from "./burgers";
import {orderReducer} from "./order";
import {constructorReducer} from "./constructor";
import {ingredientsReducer} from "./ingredient";
import {authorizationReducer} from "./authorization";
import {registrationReducer} from "./registration";

export const rootReducer = combineReducers({
    ingredient : ingredientsReducer,
    constructorBurger: constructorReducer,
    burger : burgersReducer,
    order : orderReducer,
    authorization: authorizationReducer,
    registration: registrationReducer,
});
