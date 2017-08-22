import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, signIn, clearErrors } from '../../actions/session_actions.js'

const mapStateToProps = (state) => {
  return {
    signedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: (user) => {
      dispatch(processForm(user));
    },
    clearErrors: () => {
      dispatch(clearErrors());
    },
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
