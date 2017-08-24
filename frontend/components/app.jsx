import React from 'react';
import HomePage from './home/home_page';
import UsersIndexContainer from './users/users_index_container';
import NavbarContainer from './nav/navbar_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <NavbarContainer />
    <Route exact path='/' component={ HomePage } />
    <Route path='/users' component={ UsersIndexContainer } />
  </div>
);

export default App;
