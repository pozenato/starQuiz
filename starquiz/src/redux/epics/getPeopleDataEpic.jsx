import 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import actions from '../actions';
import actionTypes from '../actions/actionTypes';
import requests from '../../utils/requests';


const getPeopleDataEpic = action$ => action$.pipe(
    filter(action => action.type === actionTypes.FETCH_PEOPLE_DATA),
    mergeMap(action => axios(requests.getPeople(action.payload))
        .then(res => actions.receivePeopleData({
            ...res.data,
        }))
        .catch(err => actions.internalError(err))),
);

export default getPeopleDataEpic;
