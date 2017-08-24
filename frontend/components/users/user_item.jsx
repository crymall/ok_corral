import React from 'react';

export const UserItem = (props) => {
  return (
    <div className='user-item' key={props.user.id}>
      <h2>{props.user.username}</h2>
      <p>{props.user.age}</p>
    </div>
  );
};
