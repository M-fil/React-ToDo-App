import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import tasksTypesReducer from './tasks_types/tasksTypesReducer';

const store = createStore(tasksTypesReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;