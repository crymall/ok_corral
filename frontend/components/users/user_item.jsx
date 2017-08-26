import React from 'react';
import { Link } from 'react-router-dom';
import { UserProfileContainer } from './user_profile_container';

export const UserItem = (props) => {
  return (
    <Link to={`/users/${props.user.id}`}>
      <div className='user-item'>
        <h2>{props.user.username}</h2>
        <p>{props.user.age}</p>
      </div>
    </Link>
  );
};
