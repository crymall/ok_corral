import * as APIUtil from '../util/messages_api_util';

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_SINGLE_MESSAGE = 'RECEIVE_SINGLE_MESSAGE';

export const receiveAllMessages = (messages) => {

  return {
    type: RECEIVE_ALL_MESSAGES,
    messages
  }

}

export const receiveSingleMessage = (message) => {

  return {
    type: RECEIVE_SINGLE_MESSAGE,
    message
  }

}

export const fetchAllMessages = (params) => (dispatch) => {

  return APIUtil.fetchAllMessages(params)
                .then((messages) => {
                  dispatch(receiveAllMessages(messages));
                });

}

export const fetchSingleMessage = (params) => (dispatch) => {

  return APIUtil.fetchSingleMessage(params)
                .then((message) => {
                  dispatch(receiveSingleMessage(message));
                });

}

export const createMessage = (message) => (dispatch) => {

  return APIUtil.createMessage(message)
                .then((message) => {
                  dispatch(receiveSingleMessage(message));
                });
                
}
