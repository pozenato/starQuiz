import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducers from '../reducers';
import epics from '../epics';

const epicMiddleware = createEpicMiddleware();
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

epicMiddleware.run(epics);

export default store;