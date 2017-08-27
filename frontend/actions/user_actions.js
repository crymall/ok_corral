import * as APIUtil from '../util/users_api_util.js';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
}

export const receiveSingleUser = (user) => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  }
}

export const fetchAllUsers = (params) => (dispatch) => {
  return APIUtil.fetchUsers(params)
    .then((users) => {
      dispatch(receiveAllUsers(users));
    });
}

export const fetchSingleUser = (params) => (dispatch) => {
  return APIUtil.fetchSingleUser(params)
    .then((user) => {
      dispatch(receiveSingleUser(user));
    });
}

export const editSingleUser = (params) => (dispatch) => {
  return APIUtil.updateSingleUser(params)
    .then((user) => {
      dispatch(receiveSingleUser(user));
    });
}
