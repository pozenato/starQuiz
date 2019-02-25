import { combineEpics } from 'redux-observable';
import getPeopleDataEpic from './getPeopleDataEpic';

const epics = combineEpics(
    getPeopleDataEpic,
);

export default epics;
