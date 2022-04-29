import {
    ADD_CONSTRUCTOR_ITEM,
    DELETE_CONSTRUCTOR_ITEM,
    SET_CONSTRUCTOR_BUN
}  from "../actions/constructor";

const initialState = {
    constructorData: [],
    constructorBun: {
        price: 0,
        name: 'Testy bun'
    },
    constructorLength: 0,
    constructorFinalCoast: 0
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONSTRUCTOR_ITEM:
            return {
                ...state,
                constructorData: [
                    ...state.constructorData,
                    action.item,
                ],
                constructorLength: state.constructorLength + 1,
                constructorFinalCoast: state.constructorFinalCoast + action.item.price
            }
        case DELETE_CONSTRUCTOR_ITEM:
            return {
                ...state,
                constructorData: [
                    ...state.constructorData.slice(0, state.constructorData.findIndex(i => i.index_id === action.item.index_id)),
                    ...state.constructorData.slice(state.constructorData.findIndex(i => i.index_id === action.item.index_id) + 1, state.constructorLength)
                ],
                constructorLength: state.constructorLength - 1,
                constructorFinalCoast: state.constructorFinalCoast - action.item.price
            }
        case SET_CONSTRUCTOR_BUN:
            return {
                ...state,
                constructorFinalCoast: state.constructorFinalCoast - state.constructorBun.price + action.item.price,
                constructorBun: action.item,
            }
        default:
            return state;
    }
}