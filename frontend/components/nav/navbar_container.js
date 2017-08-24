import Navbar from './navbar';
import { signOut } from '../../actions/session_actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps= (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
