import React from 'react';
import HomePage from './home/home_page';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path='/' component={ HomePage } />
  </div>
);

export default App;
