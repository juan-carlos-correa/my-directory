import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    thunk,
  ),
);

console.log('initial state', store.getState());

store.subscribe(() => console.log(store.getState()));

export default store;
