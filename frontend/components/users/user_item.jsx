import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileContainer from './user_profile_container';

export const UserItem = (props) => {
  return (
    <Link to={`/users/${props.user.id}`}>
      <div className='user-item'>
        <img className='user-item-image' src={props.user.image_url} />

        <div className='user-item-text'>
          <h2 className='user-item-name'>{props.user.username}</h2>
          <p className='user-item-age'>{props.user.age}</p>
        </div>
      </div>
    </Link>
  );
};
