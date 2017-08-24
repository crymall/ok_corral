import * as APIUtil from '../util/users_api_util.js';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
}

export const fetchAllUsers = () => (dispatch) => {
  return APIUtil.fetchUsers()
    .then((users) => {
      dispatch(receiveAllUsers(users));
    });
}
