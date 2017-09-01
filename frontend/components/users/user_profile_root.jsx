import React from 'react';
import UserProfileHeaderContainer from './user_profile_header_container';
import UserProfileContainer from './user_profile_container';
import QuestionsIndexContainer from '../questions/questions_index_container';
import DialoguesIndexContainer from '../dialogues/dialogues_index_container';
import DialogueContainer from '../dialogues/dialogue_container';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';

const UserProfileRoot = () => {
  return (
    <div>
      <Route path='/users/:user_id' component={ UserProfileHeaderContainer } />
      <AuthRoute exact path='/users/:user_id' component={ UserProfileContainer } />
      <AuthRoute path='/users/:user_id/questions' component={ QuestionsIndexContainer } />
      <AuthRoute path='/users/:user_id/messages' component={ DialoguesIndexContainer } />
      <AuthRoute path='/users/:user_id/messages/:dialogue_id' component={ DialogueContainer } />
    </div>
  );
}

export default withRouter(UserProfileRoot);
