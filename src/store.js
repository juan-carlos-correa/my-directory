import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { verifyAuth } from './Auth/Actions/auth';

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    thunk,
  ),
);

console.log('initial state', store.getState());

store.dispatch(verifyAuth());

export default store;
