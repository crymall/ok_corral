import { RECEIVE_ALL_QUESTIONS, RECEIVE_SINGLE_QUESTION } from '../actions/question_actions';
import merge from 'lodash/merge';

const initialState = {};

const questionsReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case RECEIVE_SINGLE_QUESTION:
      return merge({}, state, {question: action.question});
    default:
      return state;
  };

};

export default questionsReducer;
