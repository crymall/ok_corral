import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import UsersIndexContainer from './users/users_index_container';
import NavbarContainer from './nav/navbar_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <NavbarContainer />
    <Route exact path='/' component={ SignupFormContainer } />
    <Route path='/users' component={ UsersIndexContainer } />
  </div>
);

export default App;
