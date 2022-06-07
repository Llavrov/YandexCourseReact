import {
    ADD_INGREDIENT_ITEM,
    DELETE_INGREDIENT_ITEM
} from "../actions/ingredient";

const initialState = {
    ingredientData: {
        isLoading: false
    },
    modalOpen: true,
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_ITEM:
            return {
                ...state,
                ingredientData: action.item,
                modalOpen: false
            }
        case DELETE_INGREDIENT_ITEM:
            return {
                ...state,
                ingredientData: {},
                modalOpen: true
            }
        default:
            return state;
    }
}