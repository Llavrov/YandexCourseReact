import { combineReducers } from 'redux';
import {burgersReducer} from "./burgers";
import {orderReducer} from "./order";
import {constructorReducer} from "./constructor";
import {ingredientsReducer} from "./ingredient";

export const rootReducer = combineReducers({
    ingredient : ingredientsReducer,
    constructorBurger: constructorReducer,
    burger : burgersReducer,
    order : orderReducer,
});
