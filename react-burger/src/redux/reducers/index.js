import { combineReducers } from 'redux';
import {burgersReducer} from "./burgers";
import {orderReducer} from "./order";
import {constructorReducer} from "./constructor";
import {ingredientsReducer} from "./ingredient";
import {draggableComponentReducer} from "./dragndrop";

export const rootReducer = combineReducers({
    ingredient : ingredientsReducer,
    constructorBurger: constructorReducer,
    burger : burgersReducer,
    order : orderReducer,
    dnd : draggableComponentReducer
});
