import Navbar from './navbar';
import { signOut, signIn, clearErrors } from '../../actions/session_actions.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {

  let errors = null;

  if (state.session.errors) {
    errors = state.session.errors.responseJSON;
  }

  return {
    currentUser: state.session.currentUser,
    errors: errors
  };

};

const mapDispatchToProps= (dispatch) => {

  return {
    signOut: () => dispatch(signOut()),
    processForm: (user) => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors())
  };

};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
