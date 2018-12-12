import React from 'react';

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
      email: 'demo@gmail.com',
      password: 'password'
    };

    this.props.login(demoUser);
  }

  renderErrors() {
    return (
      <ul className="session-form-errors">
        {this.props.errors.map((err, i) => (
          <li key={`error-${i}`}>{err}</li>
        ))}
      </ul>
    );
  }

  renderlastItem() {
    switch (this.props.formType) {
      case 'signup':
        return (
          <li className="row disclaimer-container">
            <p>By creating an account, you are agreeing to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
          </li>
        );
      case 'login':
        return (
          <li className="row remember-me-row">
            <input id="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Remember me for 30 days</label>
          </li>
        );
    };
  }

  render() {    
    return (
      <div className="login-page">
      
        <div className="login-form-container">

          <div className="login-form-header">
            <img className="logo" src={window.images.logo} />
            <h2 className="app-name">Notify</h2>
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
                  value={this.state.email}
                />
              </li>

              <li className="row">
                <input 
                  className="login-input"
                  type="password" 
                  onChange={this.handleInput('password')} 
                  value={this.state.password} 
                />
              </li>

              <li>
                <input id="continue-btn" type="submit" value="Continue" />
              </li>

              {this.renderlastItem()}
            </ol>

            <div className="switch-session-action-container">
              <p>{this.props.switchText}</p>
              <div onClick={this.props.clearErrors}>
                {this.props.navLink}
              </div>
            </div>
            
            {this.renderErrors()}
          </form>
        </div>

      </div>
    )
  }
};

export default SessionForm;