import React from "react";
import {BurgerContext} from "../context/burgerContext";
export function CounterPriceReducer(state, action) {
    const {data} = React.useContext(BurgerContext);
    switch (action.type) {
        case "COUNT":
            let count =  data.reduce((sum, cur) => sum + cur.price, 0)
            return {
                ...state,
                data: data,
                count: count
            }
        default:
            throw new Error();
    }
}