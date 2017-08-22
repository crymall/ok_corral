import React from 'react';
import LoginFormContainer from './session/login_form_container';
import HomePage from './home/home_page';
import { Route } from 'react-router';

const App = () => (
  <div>
    <Route path='/' component={ HomePage } />
    <Route path='/login' component={ LoginFormContainer } />
  </div>
);

export default App;
