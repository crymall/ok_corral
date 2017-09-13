import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import UsersIndexContainer from './users/users_index_container';
import UserProfileRoot from './users/user_profile_root';
import NavbarContainer from './nav/navbar_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (

  <div>

    <NavbarContainer />
    <Route exact path='/' component={ SignupFormContainer } />
    <AuthRoute exact path='/users' component={ UsersIndexContainer } />
    <Route path='/users/:user_id' component={ UserProfileRoot } />

  </div>
  
);

export default App;
