import {
  SET_IS_SIGNIN_ERROR,
  SET_SIGNIN_ERROR_MESSAGE,
  SET_IS_SIGNIN_LOADING,
  RESET_SIGNIN_VALUES,
} from '../Actions/types';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';

export const signinWithEmailAndPassword = async (dispatch, { email, password }) => {
  try {
    dispatch({ type: SET_IS_SIGNIN_LOADING, value: true });

    const authWithEmailAndPassword = new AuthWithEmailAndPassword();
    await authWithEmailAndPassword.login({ email, password });
  } catch ({ code, message }) {
    dispatch({ type: SET_IS_SIGNIN_ERROR, value: true });
    dispatch({ type: SET_SIGNIN_ERROR_MESSAGE, value: message });
  } finally {
    dispatch({ type: SET_IS_SIGNIN_LOADING, value: false });
    dispatch({ type: RESET_SIGNIN_VALUES, value: false });
  }
}

export default {
  signinWithEmailAndPassword,
}
