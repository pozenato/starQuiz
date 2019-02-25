import { combineReducers } from 'redux';
import paymentDataReducer from './peopleData';

const rootReducer = combineReducers({
    peopleData: paymentDataReducer,
});

export default rootReducer;