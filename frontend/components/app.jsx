import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import UsersIndexContainer from './users/users_index_container';
import UserProfileContainer from './users/user_profile_container';
import NavbarContainer from './nav/navbar_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <NavbarContainer />
    <Route exact path='/' component={ SignupFormContainer } />
    <Route exact path='/users' component={ UsersIndexContainer } />
    <Route path='/users/:user_id' component={ UserProfileContainer } />
    <Route path='/users/:user_id/questions' component={ QuestionsIndexContainer } />
  </div>
);

export default App;
