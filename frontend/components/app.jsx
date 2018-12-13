import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainContainer from './main/main_container';
import HomeContainer from './home/home_container';
import { Switch, Redirect } from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute
} from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/main" component={MainContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={HomeContainer}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;