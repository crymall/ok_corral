import React from 'react';
import UserProfileHeaderContainer from './user_profile_header_container';
import UserProfileContainer from './user_profile_container';
import QuestionsIndexContainer from '../questions/questions_index_container';
import { Route } from 'react-router-dom';

export const UserProfileRoot = () => {
  return (
    <div>
      <Route path='/users/:user_id' component={ UserProfileHeaderContainer } />
      <Route exact path='/users/:user_id' component={ UserProfileContainer } />
      <Route path='/users/:user_id/questions' component={ QuestionsIndexContainer } />
    </div>
  );
}
