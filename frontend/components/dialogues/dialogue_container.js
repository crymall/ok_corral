import { connect } from 'react-redux';
import Dialogue from './dialogue';
import { fetchSingleDialogue } from '../../actions/dialogue_actions';
import { fetchSingleUser } from '../../actions/user_actions';
import { fetchAllMessages } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  const dialogue = state.dialogues[ownProps.match.params.dialogue_id];
  const user = state.users[parseInt(ownProps.match.params.user_id)];

  let arrayOfMessages;

  if (dialogue) {
    arrayOfMessages = Object.keys(state.messages)
                      .map((id) => state.messages[id]);
  } else {
    arrayOfMessages = [];
  }

  return {
    dialogue: dialogue,
    messages: arrayOfMessages,
    currentUser: state.session.currentUser,
    otherUser: user
  };

};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchSingleDialogue: (params) => dispatch(fetchSingleDialogue(params)),
    fetchSingleUser: (params) => dispatch(fetchSingleUser(params)),
    fetchAllMessages: (params) => dispatch(fetchAllMessages(params))
  };

};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogue));
