import actionTypes from './actionTypes';

const fetchPeopleData = payload => ({
    type: actionTypes.FETCH_PEOPLE_DATA,
    payload: payload,
});

const receivePeopleData = peopleData => ({
    type: actionTypes.RECEIVE_PEOPLE_DATA,
    payload: peopleData,
});

const internalError = () => ({
    type: actionTypes.INTERNAL_ERROR,
    payload: '',
});

const actions = {
    fetchPeopleData,
    receivePeopleData,
    internalError,
};

export default actions;