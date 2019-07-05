import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'core/reducer';
import {logger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';


export const store = createStore(rootReducer, {}, applyMiddleware(logger, promiseMiddleware));
