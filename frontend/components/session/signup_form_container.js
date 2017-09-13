import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signUp, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {

  return {
    signedIn: Boolean(state.session.currentUser),
    errors: state.session.errors.responseJSON
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
