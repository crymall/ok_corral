import * as APIUtil from '../util/dialogues_api_util';

export const RECEIVE_ALL_DIALOGUES = 'RECEIVE_ALL_DIALOGUES';
export const RECEIVE_SINGLE_DIALOGUE = 'RECEIVE_SINGLE_DIALOGUE';

export const receiveAllDialogues = (dialogues) => {
  return {
    type: RECEIVE_ALL_DIALOGUES,
    dialogues
  }
}

export const receiveSingleDialogue = (dialogue) => {
  return {
    type: RECEIVE_SINGLE_DIALOGUE,
    dialogue
  }
}

export const fetchAllDialogues = (params) => (dispatch) => {
  return APIUtil.fetchAllDialogues(params)
    .then((dialogues) => {
      dispatch(receiveAllDialogues(dialogues));
    });
}

export const fetchSingleDialogue = (params) => (dispatch) => {
  return APIUtil.fetchSingleDialogue(params)
    .then((dialogue) => {
      dispatch(receiveSingleDialogue(dialogue));
    });
}

export const createDialogue = (dialogue) => (dispatch) => {
  return APIUtil.createDialogue(dialogue)
    .then((dialogue) => {
      dispatch(receiveSingleDialogue(dialogue));
    });
}
