import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { fetchSingleUser, editSingleUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

  const user = state.users[ownProps.match.params.user_id];

  if (state.session.currentUser) {
    return {
      user: user,
      currentUser: state.session.currentUser
    };
  } else {
    return {
      user: user,
    };
  }

};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchSingleUser: (params) => dispatch(fetchSingleUser(params)),
    processForm: (params) => dispatch(editSingleUser(params))
  };
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
