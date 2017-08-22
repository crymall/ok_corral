import React from 'react';
import LoginFormContainer from './session/login_form_container';
import HomePage from './home/home_page';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path='/' component={ HomePage } />
    <Route exact path='/login' component={ LoginFormContainer } />
  </div>
);

export default App;
