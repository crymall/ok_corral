import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchAllUsers } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  let store = configureStore();

  window.store = store;
  window.fetchAllUsers = fetchAllUsers;

  ReactDOM.render(<Root store={ store } />, root);

});
