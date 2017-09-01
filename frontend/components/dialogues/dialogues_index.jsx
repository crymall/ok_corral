import React from 'react';
import { DialogueIndexItem } from './dialogue_index_item';

class DialoguesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllDialogues({user: this.props.currentUser});
    this.props.fetchAllUsers();
  }

  render() {
    let dialogueList;
    if (this.props.dialogues.length > 0) {
      dialogueList = this.props.dialogues.map((dialogue) => {
        if (dialogue.user_one_id === this.props.currentUser.id) {
          return <DialogueIndexItem user={this.props.users[dialogue.user_two_id]} currentUser={this.props.currentUser.id} dialogue={dialogue} key={dialogue.id} />
        }
        else {
          return <DialogueIndexItem user={this.props.users[dialogue.user_one_id]} currentUser={this.props.currentUser.id} dialogue={dialogue} key={dialogue.id} />
        }
      });
    } else {
      dialogueList = [];
    }

    return (
      <div>
        <div className='dialogues-index-container'>
        <div className='dialogues-index'>
          <h2 className='message-header-text'>Messages</h2>
          { dialogueList.reverse() }
        </div>
        </div>
      </div>
    );
  }
}

export default DialoguesIndex;
