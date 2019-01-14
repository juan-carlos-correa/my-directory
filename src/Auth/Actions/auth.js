import { SET_IS_SIGNUP_SUCCESS, SET_SIGNUP_ERROR } from '../Actions/types';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';

export const signinWithEmailAndPassword = async (dispatch, { name, email, password }) => {
  try {
    const authWithEmailAndPassword = new AuthWithEmailAndPassword();
    await authWithEmailAndPassword.signin({ email, password });
    dispatch({ type: SET_IS_SIGNUP_SUCCESS, value: true });
  } catch (e) {
    console.log('error', e);
    dispatch({ type: SET_IS_SIGNUP_SUCCESS, value: false });
    dispatch({ type: SET_SIGNUP_ERROR, payload: e });
  }
};

export default {
  signinWithEmailAndPassword,
}
