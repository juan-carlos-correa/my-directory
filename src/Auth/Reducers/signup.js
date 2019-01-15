import {
  SET_SIGNUP_ERROR_MESSAGE,
  SET_SIGNUP_SUCCESS_MESSAGE,
  SET_IS_SIGNUP_SUCCESS,
  SET_IS_SIGNUP_ERROR
} from '../Actions/types';

const initialState = {
  isSignupError: false,
  isSignupSuccess: false,
  signupErrorMessage: '',
  signupSuccessMessage: '',
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupSuccess: action.value,
      };
    case SET_IS_SIGNUP_ERROR:
      return {
        ...state,
        isSignupError: action.value,
      };
    case SET_SIGNUP_ERROR_MESSAGE:
      return {
        ...state,
        signupErrorMessage: action.value,
      };
      case SET_SIGNUP_SUCCESS_MESSAGE:
      return {
        ...state,
        signupSuccessMessage: action.value,
      };
    default:
      return state;
  }
};

export default signupReducer;
