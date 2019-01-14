import { SET_USER_DATA, SET_SIGNUP_ERROR, SET_IS_SIGNUP_SUCCESS } from '../Actions/types';

const initialState = {
  user: {},
  isSignupSuccess: false,
  signupError: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case SET_IS_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupSuccess: action.value,
      };
    case SET_SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
