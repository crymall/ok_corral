import React from 'react';
import { Link } from 'react-router-dom';

export const DialogueIndexItem = (props) => {

  let messageSnippet = null;
  let messages = null;

  if (props.dialogue.messages) {
    messages = props.dialogue.messages;
  }

  if (messages && messages.length > 0) {
    messageSnippet = messages[messages.length - 1].body.slice(0, 50).concat('...');
  }

  // ^ Create message preview (messageSnippet) for thread index ^

  if (props.user) {
    return (
      <Link to={`/users/${props.user.id}/messages/${props.dialogue.id}`}>
        <div className='dialogue-item'>
          <div className='dialogue-right'>

            <img className='message-profile-image' src={props.user.image_url} />

            <h3 className='dialogue-username'>
              {props.user.username}
            </h3>

          </div>

          <p className='message-snippet'>{ messageSnippet }</p>

        </div>
      </Link>
    );
  } else {
    return null;
  }

};
