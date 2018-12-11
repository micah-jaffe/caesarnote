import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { login, signup, logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  
  // TESTING
  
  //
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store}/>,
    root
  )
});