import * as APIUtil from '../util/questions_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_SINGLE_QUESTION = 'RECEIVE_SINGLE_QUESTION';

export const receiveAllQuestions = (questions) => {

  return {
    type: RECEIVE_ALL_QUESTIONS,
    questions
  }

}

export const receiveSingleQuestion = (question) => {

  return {
    type: RECEIVE_SINGLE_QUESTION,
    question
  }

}

export const fetchAllQuestions = (params) => (dispatch) => {

  return APIUtil.fetchQuestions(params)
                .then((questions) => {
                  dispatch(receiveAllQuestions(questions));
                });

}

export const fetchSingleQuestion = (params) => (dispatch) => {

  return APIUtil.fetchSingleQuestion(params)
                .then((question) => {
                  dispatch(receiveSingleQuestion(question));
                });

}
