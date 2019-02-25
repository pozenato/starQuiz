import actionTypes from '../actions/actionTypes';

const defaultState = {
    count: null,
    next: null,
    previous: null,
    results: []

};

const peopleDataReducer = (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.RECEIVE_PEOPLE_DATA:
        if (!action.payload.isError) {
            const result = (action.payload);
            return {
                ...state,
                result,
            };
        };
    default:
        return state;
    }
};

export default peopleDataReducer;
