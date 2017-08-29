import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchAllAnswers } from './actions/answer_actions';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  let store = configureStore();

  window.dispatch = store.dispatch;
  window.fetchAllAnswers = fetchAllAnswers;


  ReactDOM.render(<Root store={ store } />, root);

});
