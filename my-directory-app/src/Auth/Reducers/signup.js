import {
  SET_SIGNUP_ERROR_MESSAGE,
  SET_SIGNUP_SUCCESS_MESSAGE,
  SET_IS_SIGNUP_SUCCESS,
  SET_IS_SIGNUP_ERROR,
  SET_IS_LOADING,
  RESET_SIGNUP_VALUES,
} from '../Actions/types';

const initialState = {
  isSignupError: false,
  isSignupSuccess: false,
  signupErrorMessage: '',
  signupSuccessMessage: '',
  isLoading: false,
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
      case SET_IS_LOADING:
        return {
          ...state,
          isLoading: action.value,
        };
      case RESET_SIGNUP_VALUES:
        return {
          ...state,
          isSignupError: false,
          isSignupSuccess: false,
          signupErrorMessage: '',
          signupSuccessMessage: ''
        };
    default:
      return state;
  }
};

export default signupReducer;
