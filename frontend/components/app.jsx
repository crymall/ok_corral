import React from 'react';
import LoginFormContainer from './session/login_form_container';
import { Route } from 'react-router';

const App = () => (
  <div>
    <Route path='/' component= { LoginFormContainer } />
  </div>
);

export default App;
