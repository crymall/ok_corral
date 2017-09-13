import Navbar from './navbar';
import { signOut, signIn, clearErrors } from '../../actions/session_actions.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {

  if (state.session.errors) {
    let errors = state.session.errors.responseJSON;
  } else {
    let errors = null;
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
