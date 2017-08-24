import { RECEIVE_ALL_USERS } from '../actions/user_actions.js';
import merge from 'lodash/merge';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_USERS:
      newState = merge({}, state, action.users);
      return newState;
    default:
      return state;
  };

};

export default usersReducer;
