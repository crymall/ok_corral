import { RECEIVE_ALL_ANSWERS, RECEIVE_SINGLE_ANSWER } from '../actions/answer_actions';
import merge from 'lodash/merge';

const initialState = {};

const answersReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ANSWERS:
      return action.answers;
    case RECEIVE_SINGLE_ANSWER:
      return merge({}, state, {answer: action.answer});
    default:
      return state;
  };

};

export default answersReducer;
