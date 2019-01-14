import { combineReducers } from 'redux';
import user from './user';
import signup from './signup';

const auth = combineReducers({
  user,
  signup,
});

export default auth;
