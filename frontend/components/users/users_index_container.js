import UsersIndex from './users_index';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  const arrayOfUsers = Object.keys(state.users).map((id) => state.users[id]);

  return {
    users: arrayOfUsers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: (params) => dispatch(fetchAllUsers(params)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersIndex);
