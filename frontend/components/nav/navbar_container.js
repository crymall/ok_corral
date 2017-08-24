import Navbar from './navbar';
import { signOut, signIn, clearErrors } from '../../actions/session_actions.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapDispatchToProps= (dispatch) => {
  return {
    signOut: () => {
      return dispatch(signOut())
    },
    processForm: (user) => {
      return dispatch(signIn(user));
    },
    clearErrors: () => {
      return dispatch(clearErrors());
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
