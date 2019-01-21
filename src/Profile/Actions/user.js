import { SET_USER_DATA } from '../../Auth/Actions/types';
import UserFirebase from '../../Services/Firebase/Models/UserFirebase';

export const updateUser = async (dispatch, uid, userData) => {
  try {
    const userFirebase = new UserFirebase();
    await userFirebase.updateUserData(uid, userData);
    const userUpdated = await userFirebase.getUserData(uid);
    const payload = { ...userUpdated.data(), uid };
    dispatch({ type: SET_USER_DATA, payload });
  } catch (e) {
    console.log(e);
  }
};

export default {
  updateUser,
};
