import QuestionForm from './question_form';
import { connect } from 'react-redux';
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (answer) => dispatch(createAnswer(answer))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
