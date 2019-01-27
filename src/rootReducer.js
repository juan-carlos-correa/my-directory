import { combineReducers } from 'redux';
import authReducer from './Auth/Reducers';
import fetchReducer from './Utils/Reducers/fetch';

const rootReducer = combineReducers({
  auth: authReducer,
  fetch: fetchReducer,
});

export default rootReducer;
