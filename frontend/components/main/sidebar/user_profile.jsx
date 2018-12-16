import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.openPaywall = this.openPaywall.bind(this);
  }

  showDropdown() {
    this.setState({ dropdown: true })
  }

  hideDropdown() {
    this.setState({ dropdown: false })
  }

  openPaywall() {
    this.props.openModal('paywall');
  }

  render() {
    return (
      <div className="user-profile-container">
        <span 
          className="user-profile" 
          tabIndex="0" 
          onFocus={this.showDropdown}
          onBlur={this.hideDropdown}
        >
          <UserSnippet currentUser={this.props.currentUser} />
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="profile-svg"><path fill="none" d="M7 2L4 5 1 2"></path></svg>
        </span>

        <Dropdown 
          visible={this.state.dropdown} 
          logout={this.props.logout} 
          currentUser={this.props.currentUser}
          openPaywall={this.openPaywall}
        />
      </div>
    );
  }
};

const Dropdown = ({ visible, logout, currentUser, openPaywall }) => {
  return (
    <div className={visible ? "user-profile-dropdown" : "no-display"}>
      <ul>
        <li>Account</li>
        <li className="horizontal-row">
          <UserSnippet currentUser={currentUser} />
          <i className="fas fa-check"></i>
        </li>
        <li onMouseDown={openPaywall} className="hoverable">Settings</li>
        <li onMouseDown={openPaywall} className="hoverable">Help</li>
        <li onMouseDown={openPaywall} className="hoverable">What's new in Caesarnote Web</li>
        <li onMouseDown={openPaywall} className="hoverable">Switch to older version of Caesarnote</li>
        <li onMouseDown={logout} className="hoverable" >Sign out {currentUser.username}</li>
      </ul>
    </div>
  );
};

const UserSnippet = ({ currentUser }) => {
  return (
    <span className="user-snippet">
      <img className="avatar" src={window.images.avatar} />
      <span>{currentUser.username}</span>
    </span>
  );
}

export default UserProfile;