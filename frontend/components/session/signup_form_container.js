import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signUp, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {

  if (state.session.errors) {
    let errors = state.session.errors.responseJSON;
  } else {
    let errors = null;
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
