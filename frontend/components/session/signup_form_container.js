import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signUp, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {

  let errors = null;

  if (state.session.errors) {
    errors = state.session.errors.responseJSON;
  }

  return {
    signedIn: Boolean(state.session.currentUser),
    errors: errors
  };

};

const mapDispatchToProps = (dispatch) => {

  return {
    processForm: (user) => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
