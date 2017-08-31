import { RECEIVE_ALL_DIALOGUES, RECEIVE_SINGLE_DIALOGUE } from '../actions/dialogue_actions';
import merge from 'lodash/merge';

const initialState = {};

const dialoguesReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_DIALOGUES:
      return action.dialogues;
    case RECEIVE_SINGLE_DIALOGUE:
      return merge({}, state, {[action.dialogue.id]: action.dialogue});
    default:
      return state;
  };

};

export default dialoguesReducer;
