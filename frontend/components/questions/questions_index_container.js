import QuestionsIndex from './questions_index';
import { connect } from 'react-redux';
import { fetchAllQuestions, fetchSingleQuestion } from '../../actions/question_actions';
import { fetchAllAnswers, fetchSingleAnswer, updateSingleAnswer, createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state) => {
  const arrayOfQuestions = Object.keys(state.questions).map((id) => state.questions[id]);
  const arrayOfAnswers = Object.keys(state.answers).map((id) => state.answers[id]);

  return {
    questions: arrayOfQuestions,
    answers: arrayOfAnswers
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsIndex);
