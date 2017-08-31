import DialoguesIndex from './dialogues_index';
import { connect } from 'react-redux';
import { fetchAllDialogues } from '../../actions/dialogue_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  const arrayOfDialogues = Object.keys(state.dialogues).map((id) => state.dialogues[id]);
  
  return {
    dialogues: arrayOfDialogues,
    currentUser: state.session.currentUser,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDialogues: (params) => dispatch(fetchAllDialogues(params)),
    fetchAllUsers: (params) => dispatch(fetchAllUsers(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialoguesIndex);
