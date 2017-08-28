import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import answersReducer from './answers_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer,
  questions: questionsReducer,
  answers: answersReducer
});

export default rootReducer;
