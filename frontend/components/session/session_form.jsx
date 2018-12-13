import React from 'react';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    user.username = user.email.substr(0, user.email.indexOf('@')); 
    this.props.processForm(user);
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = { 
      email: 'demouser@caesarnote.com',
      password: 'password'
    };

    this.props.login(demoUser);
  }
  
  renderFormFooter() {
    switch (this.props.formType) {
      case 'signup':
        return (
          <div className="form-postscript">
            <p>By creating an account, you are agreeing to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
          </div>
        );
      case 'login':
        return (
          <div className="form-postscript">
            <input className="remember-me" type="checkbox" />
            <label className="remember-me" htmlFor="remember-me">Remember me for 30 days</label>
            <br/>
            <a href="#">Forgot password?</a>
          </div>
        );
    };
  }

  renderSwitchAction() {
    return (
      <div className="switch-session-action-container">
        <p>{this.props.switchText}</p>
        <p>{this.props.navLink}</p>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {    
    return (
      <div className="login-page">
      
        <div className="login-form-container">

          <div className="login-form-header">
            <img className="logo" src={window.images.logo} />
            <h2 className="app-name">Caesarnote</h2>
            <h4 id="tagline">Remember everything important.</h4>
          </div>
          
          <form className="login-form-box" onSubmit={this.handleSubmit}>
            <ol>
              <li className="row">
                <button id="demo-login-btn" onClick={this.demoLogin}>Continue as demo user</button>
              </li>

              <li className="row horizontal-row">
                <div></div>
                <p>or</p>
                <div></div>
              </li>

              <li className="row">
                <input 
                  className="login-input"
                  type="email" 
                  onChange={this.handleInput('email')} 
                  placeholder="Email"
                  value={this.state.email}
                />
              </li>

              <li className="session-error">
                {this.props.errors.email}
              </li>

              <li className="row">
                <input 
                  className="login-input"
                  type="password" 
                  onChange={this.handleInput('password')}
                  placeholder="Password"
                  value={this.state.password} 
                />
              </li>

              <li className="session-error">
                {this.props.errors.password}
              </li>

              <li className="row">
                <input id="continue-btn" type="submit" value="Continue" />
              </li>
            </ol>
          </form>

          <div className="formFooter">
            {this.renderFormFooter()}
            {this.renderSwitchAction()}
          </div>

        </div>

      </div>
    )
  }
};

export default SessionForm;