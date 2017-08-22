import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};


export const signUp = (user) => (dispatch) => {
  return APIUtil.signup(user)
    .then((user) => {
      dispatch(receiveCurrentUser(user));
    }, (error) => {
      dispatch(receiveErrors(error));
    });
};

export const signIn = (user) => (dispatch) => {
  return APIUtil.signin(user)
    .then((user) => {
      dispatch(receiveCurrentUser(user));
    }, (error) => {
      dispatch(receiveErrors(error));
    });
};

export const signOut = () => (dispatch) => {
  return APIUtil.signout()
    .then(() => {
      dispatch(receiveCurrentUser(null));
    }, (error) => {
      dispatch(receiveErrors(error));
    });
};
