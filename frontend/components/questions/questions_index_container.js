import QuestionsIndex from './questions_index';
import { connect } from 'react-redux';
import { fetchAllQuestions, fetchSingleQuestion } from '../../actions/question_actions';
import { withRouter } from 'react-router-dom';
import { fetchAllAnswers, fetchSingleAnswer, updateSingleAnswer, createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state) => {
  const arrayOfAnswers = Object.keys(state.answers).map((id) => state.answers[id]);
  const answeredQuestionIds = arrayOfAnswers.map((answer) => answer.question_id);
  const answeredQuestions = [];
  const unansweredQuestions = [];
  Object.keys(state.questions)
    .forEach((key) => {
      if (answeredQuestionIds.includes(parseInt(key))) {
        answeredQuestions.push(state.questions[key]);
      } else {
        unansweredQuestions.push(state.questions[key]);
      }
  });
  return {
    answers: arrayOfAnswers,
    answeredQuestions: answeredQuestions,
    unansweredQuestions: unansweredQuestions,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllQuestions: (params) => dispatch(fetchAllQuestions(params)),
    fetchSingleQuestion: (params) => dispatch(fetchSingleQuestion(params)),
    fetchAllAnswers: (params) => dispatch(fetchAllAnswers(params)),
    fetchSingleAnswer: (params) => dispatch(fetchSingleAnswer(params)),
    updateSingleAnswer: (params) => dispatch(updateSingleAnswer(params)),
    createAnswer: (answer) => dispatch(createAnswer(answer))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsIndex));
