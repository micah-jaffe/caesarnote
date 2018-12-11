import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { login, signup, logout } from './util/session_api_util';


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
    <h1>hello</h1>,
    root
  )
});