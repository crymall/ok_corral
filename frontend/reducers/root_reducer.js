import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer
});

export default rootReducer;
