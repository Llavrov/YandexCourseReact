import { combineReducers } from 'redux';
import {burgersReducer} from "./burgers";
import {orderReducer} from "./order";
import {constructorReducer} from "./constructor";
import {ingredientsReducer} from "./ingredient";
import {userReducer} from "./user";

export const rootReducer = combineReducers({
    ingredient : ingredientsReducer,
    constructorBurger: constructorReducer,
    burger : burgersReducer,
    order : orderReducer,
    user: userReducer,
});
