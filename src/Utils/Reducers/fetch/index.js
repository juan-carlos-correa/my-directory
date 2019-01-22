import { SET_IS_LOADING_FETCH, SET_SUCCESS_MSG, SET_ERROR_MSG } from '../Actions/fetch/types';

const initialState = {
  isLoading: false,
  successMsg: '',
  errorMsg: '',
};

const fetchReducer = (state = initialState, action) => {
  const { value } = action;

  switch (action.type) {
    case SET_IS_LOADING_FETCH:
      return { ...state, isLoading: value };
    case SET_SUCCESS_MSG:
      return { ...state, successMsg: value };
    case SET_ERROR_MSG:
      return { ...state, errorMsg: value };
    default:
      return state;
  }
};

export default fetchReducer;
