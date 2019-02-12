import {
  SET_IS_LOADING_FETCH,
  SET_ERROR_MSG,
  SET_RESET_FETCH,
} from '../../Utils/Actions/fetch/types';
import AuthWithEmailAndPassword from '../../Services/Firebase/Auth/AuthWithEmailAndPassword';

export const signinWithEmailAndPassword = async (dispatch, { email, password }) => {
  const authWithEmailAndPassword = new AuthWithEmailAndPassword();

  try {
    dispatch({ type: SET_IS_LOADING_FETCH, value: true });
    await authWithEmailAndPassword.login({ email, password });
  } catch ({ code }) {
    const msg = authWithEmailAndPassword.getErrorMessageSignin(code);
    dispatch({ type: SET_ERROR_MSG, value: msg });
    setTimeout(() => dispatch({ type: SET_RESET_FETCH }), 6000);
  } finally {
    dispatch({ type: SET_IS_LOADING_FETCH, value: false });
  }
}

export default {
  signinWithEmailAndPassword,
};
