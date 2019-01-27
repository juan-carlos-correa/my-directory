import { SET_USER_DATA } from '../../Auth/Actions/types';
import {
  SET_IS_LOADING_FETCH,
  SET_SUCCESS_MSG,
  SET_ERROR_MSG,
  SET_RESET_FETCH,
} from '../../Utils/Actions/fetch/types';
import UserFirebase from '../../Services/Firebase/Models/UserFirebase';

export const updateUser = async (dispatch, uid, userData) => {
  try {
    dispatch({ type: SET_IS_LOADING_FETCH, value: true });
    const userFirebase = new UserFirebase();
    await userFirebase.updateUserData(uid, userData);
    const userUpdated = await userFirebase.getUserData(uid);
    const payload = { ...userUpdated.data(), uid };
    dispatch({ type: SET_USER_DATA, payload });
    dispatch({ type: SET_SUCCESS_MSG, value: 'Datos actualizados correctamente' });
  } catch (e) {
    console.log(e);
    dispatch({ type: SET_ERROR_MSG, value: 'Hubo un problema al actualizar los datos' });
  } finally {
    dispatch({ type: SET_IS_LOADING_FETCH, value: false });
    setTimeout(() => dispatch({ type: SET_RESET_FETCH }), 6000);
  }
};

export default {
  updateUser,
};
