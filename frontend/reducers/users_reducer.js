import { RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions.js';
import merge from 'lodash/merge';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_SINGLE_USER:
      return merge({}, state, {user: action.user});
    default:
      return state;
  };

};

export default usersReducer;
