import UserProfileHeader from './user_profile_header';
import { connect } from 'react-redux';
import { fetchSingleUser, editSingleUser } from '../../actions/user_actions';
import { createDialogue, fetchAllDialogues } from '../../actions/dialogue_actions';

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
    processForm: (params) => dispatch(editSingleUser(params)),
    createDialogue: (params) => dispatch(createDialogue(params)),
    fetchAllDialogues: (params) => dispatch(fetchAllDialogues(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileHeader);
