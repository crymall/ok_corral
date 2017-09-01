import React from 'react';
import { MessageItem } from './message_item';
import MessageFormContainer from './message_form_container';

class Dialogue extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSingleDialogue({id: this.props.match.params.dialogue_id})

    let otherUserId;

    if (this.props.dialogue) {
      if (this.props.dialogue.user_one_id === this.props.currentUser.id) {
        otherUserId = this.props.dialogue.user_two_id;
      } else {
        otherUserId = this.props.dialogue.user_one_id;
      }
      this.props.fetchSingleUser(otherUserId)
    }
  }

  render() {
    let messageList;
    
    if (this.props.messages.length > 0) {
      messageList = this.props.messages.map((message) => {
        if (message.user_id === this.props.currentUser.id) {
          return <MessageItem message={message} user={this.props.currentUser} currentUser={true} key={message.id} />
        }
        else {
          return <MessageItem message={message} user={this.props.otherUser} currentUser={false} key={message.id} />
        }
      });
    } else {
      messageList = null;
    }

    if (messageList) {
      return (
        <div>
          <div className='dialogues-index-container'>
            <div className='dialogues-index'>
              <h2>Messages with {this.props.otherUser.username}</h2>
              { messageList }
              <MessageFormContainer dialogue={this.props.dialogue} />
            </div>
          </div>
        </div>
      );
    } else if (this.props.dialogue) {
      return (
        <div>
          <div className='dialogues-index-container'>
            <div className='dialogues-index'>
              <MessageFormContainer dialogue={this.props.dialogue} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

}

export default Dialogue;
