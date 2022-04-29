export const UPDATE_TYPE = 'UPDATE_TYPE';

const initialState = {
    cards: []
};

export const draggableComponentReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE: {
            return {
                ...state,
                cards: state.cards.map(component =>
                    component.id === component.id ? {...component, board: component.board} : component
                )
            };
        }
        default:
            return state;
    }
}
