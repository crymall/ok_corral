import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { fetchSingleUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.users[ownProps.match.params.user_id];
  return {
    user: user,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (params) => dispatch(fetchSingleUser(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
