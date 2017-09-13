import { connect } from 'react-redux';
import { createMessage } from '../../actions/message_actions';
import { fetchSingleDialogue } from '../../actions/dialogue_actions';
import MessageForm from './message_form';

const mapStateToProps = (state, ownProps) => {

  const dialogue = state.dialogues[ownProps.dialogue.id];

  return {
    currentUser: state.session.currentUser,
    dialogue: dialogue
  };

};

const mapDispatchToProps = (dispatch) => {

  return {
    processForm: (message) => dispatch(createMessage(message)),
    fetchSingleDialogue: (dialogue) => dispatch(fetchSingleDialogue(dialogue))
  };
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
