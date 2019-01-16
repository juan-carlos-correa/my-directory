import { combineReducers } from 'redux';
import user from './user';
import signup from './signup';
import signin from './signin';

const auth = combineReducers({
  user,
  signup,
  signin,
});

export default auth;
