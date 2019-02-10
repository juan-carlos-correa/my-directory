import {
  SET_IS_LOADING_FETCH,
  SET_SUCCESS_MSG,
  SET_ERROR_MSG,
  SET_RESET_FETCH,
} from '../../Utils/Actions/fetch/types';
import UserFirebase from '../../Services/Firebase/Models/UserFirebase';

export const inviteUser = (dispatch) => async ({
  name,
  job,
  email,
  defaultPassword,
  phone,
  subsidiary,
}) => {
  try {
    dispatch({ type: SET_IS_LOADING_FETCH, value: true });
    const userFirebase = new UserFirebase();

    const result = await userFirebase.writeUserData({
      name,
      job,
      email,
      defaultPassword,
      phone,
      subsidiary,
    });

    dispatch({ type: SET_SUCCESS_MSG, value: 'Usuario invitado. Ya puede iniciar sesión' });
    setTimeout(() => dispatch({ type: SET_RESET_FETCH }), 6000);
  } catch (err) {
    console.log(err);
    dispatch({ type: SET_ERROR_MSG, value: err.message });
  } finally {
    dispatch({ type: SET_IS_LOADING_FETCH, value: false });
  }
}

export default {
  inviteUser,
};
