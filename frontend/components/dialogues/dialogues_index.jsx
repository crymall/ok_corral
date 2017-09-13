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
      let currentUser = this.props.currentUser;

      dialogueList = this.props.dialogues.map((dialogue) => {
        let userOne = this.props.users[dialogue.user_one_id];
        let userTwo = this.props.users[dialogue.user_two_id];

        if (dialogue.user_one_id === currentUser.id) {
          return <DialogueIndexItem
                    user={userTwo}
                    currentUser={currentUser.id}
                    dialogue={dialogue}
                    key={dialogue.id}
                 />
        }
        else {
          return <DialogueIndexItem
                    user={userOne}
                    currentUser={currentUser.id}
                    dialogue={dialogue}
                    key={dialogue.id}
                 />
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
