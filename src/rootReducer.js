import { combineReducers } from 'redux';
import authReducer from './Auth/Reducers';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
