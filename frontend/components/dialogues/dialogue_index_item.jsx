import React from 'react';
import { Link } from 'react-router-dom';

export const DialogueIndexItem = (props) => {
  return (
    <Link to={`/users/${props.user.id}/messages/${props.dialogue.id}`}>
      <div className='dialogue-item'>
        <img className='message-profile-image' src={props.user.image_url} />
        <h3 className='dialogue-username'>{props.user.username}</h3>
      </div>
    </Link>
  );
};
