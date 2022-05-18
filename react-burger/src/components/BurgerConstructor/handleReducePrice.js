import React from "react";
import {useSelector} from "react-redux";

export function CounterPriceReducer(state, action) {
    switch (action.type) {
        case "COUNT":
            let count =  state.data.reduce((sum, cur) => sum + cur.price, 0)
            return {
                ...state,
                data: state.data,
                count: count
            }
        default:
            throw new Error();
    }
}