import { RECEIVE_ALL_MESSAGES, RECEIVE_SINGLE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const initialState = {};

const messagesReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case RECEIVE_SINGLE_MESSAGE:
      return merge({}, state, {[action.message.id]: action.message});
    default:
      return state;
  };

};

export default messagesReducer;
