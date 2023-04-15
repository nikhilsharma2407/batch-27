const initialState = {
    count: 0
}

// enum
const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}


// ActionCreator - return action object

export const incrementActionCreator = (payload=1) => {
    const action = { type: ACTIONS.INCREMENT,payload }
    return action;
}

export const decrementActionCreator = (payload=1) => {
    const action = { type: ACTIONS.DECREMENT,payload }
    return action;
}

export const countReducer = (state = initialState, action) => {
    const {payload} = action;
    switch (action.type) {
        case ACTIONS.INCREMENT:
            // state.count++; // mutable update as it updates the state objec directly, 

            // immutably updating the state object
            const copyState = { ...state, count: state.count + payload };
            return copyState

        case ACTIONS.DECREMENT:
            return { ...state, count: state.count - payload };

        default:
            return state
    }

}