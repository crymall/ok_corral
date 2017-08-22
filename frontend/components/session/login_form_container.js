import { connect } from 'react-redux';
import LoginForm from './login_form';
import { signIn, clearErrors } from '../../actions/session_actions.js'

const mapStateToProps = (state) => {
  return {
    signedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => {
      dispatch(signIn(user));
    },
    clearErrors: () => {
      dispatch(clearErrors());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
