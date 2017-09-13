import React from 'react';

export const MessageItem = (props) => {

  return (
    <div className={(props.currentUser) ? 'cu-message-item' : 'message-item'}>
      <div className={(props.currentUser) ? 'cu-stuff' : 'user-stuff'}>

        <img
          className='message-profile-image'
          src={props.user.image_url}
        />

      </div>
      <div className='message-body'>

        <p className='message-text'>{props.message.body}</p>

      </div>
    </div>
  );
  
};
