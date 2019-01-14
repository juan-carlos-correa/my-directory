import { SET_IS_SIGNIN_SUCCESS, SET_SIGNIN_ERROR } from '../Actions/types';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';

export const signinWithEmailAndPassword = async (dispatch, { name, email, password }) => {
  try {
    const authWithEmailAndPassword = new AuthWithEmailAndPassword();
    await authWithEmailAndPassword.signin({ email, password });
    dispatch({ type: SET_IS_SIGNIN_SUCCESS, value: true });
  } catch (e) {
    console.log('errorrrrrr', e);
    dispatch({ type: SET_IS_SIGNIN_SUCCESS, value: false });
    dispatch({ type: SET_SIGNIN_ERROR, payload: e });
  }
};

export default {
  signinWithEmailAndPassword,
}
