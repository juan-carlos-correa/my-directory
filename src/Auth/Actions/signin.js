import {
  SET_IS_SIGNIN_ERROR,
  SET_SIGNIN_ERROR_MESSAGE,
  SET_IS_SIGNIN_LOADING,
} from '../Actions/types';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';

export const setSigninErrorMessageAction = (msg) => ({
  type: SET_SIGNIN_ERROR_MESSAGE,
  value: msg,
});

export const setIsSigninErrorAction = (value) => ({
  type: SET_IS_SIGNIN_ERROR,
  value,
});

export const signinWithEmailAndPassword = async (dispatch, { email, password }) => {
  const authWithEmailAndPassword = new AuthWithEmailAndPassword();

  try {
    dispatch({ type: SET_IS_SIGNIN_LOADING, value: true });
    await authWithEmailAndPassword.login({ email, password });
  } catch ({ code }) {
    const msg = authWithEmailAndPassword.getErrorMessageSignin(code);
    dispatch({ type: SET_IS_SIGNIN_ERROR, value: true });
    dispatch(setIsSigninErrorAction(true));
    dispatch(setSigninErrorMessageAction(msg));
  } finally {
    dispatch({ type: SET_IS_SIGNIN_LOADING, value: false });
  }
}

export default {
  signinWithEmailAndPassword,
  setSigninErrorMessageAction,
  setIsSigninErrorAction,
};
