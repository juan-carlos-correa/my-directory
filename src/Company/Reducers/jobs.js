import { SET_JOBS, SET_SINGLE_JOB, REMOVE_SINGLE_JOB } from '../Actions/types';

const initialState = [];

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return action.payload;
    case SET_SINGLE_JOB:
      return [
        ...state,
        action.job,
      ];
    case REMOVE_SINGLE_JOB:
      return state.filter(job => job.uid !== action.uid);
    default:
      return state,
  };
};

export default jobsReducer;
