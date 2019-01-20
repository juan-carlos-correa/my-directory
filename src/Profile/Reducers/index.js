import { combineReducers } from 'redux';
import jobs from './jobs';
import subsidiaries from './subsidiaries';

const profile = combineReducers({
  jobs,
  subsidiaries,
});

export default profile;
