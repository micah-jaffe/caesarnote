import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  renderProfileDropdown() {
    return (
      <div className="profile-dropdown">
        hello
    </div>
    );
  }

  showDropdown() {
    this.setState({ dropdown: true })
  }

  hideDropdown() {
    this.setState({ dropdown: false })
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
          <img className="avatar" src={window.images.avatar} />
          <span>{currentUser ? currentUser.username : ''}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="profile-svg"><path fill="none" d="M7 2L4 5 1 2"></path></svg>
        </span>

        <Dropdown visible={this.state.dropdown} />
      </div>
    );
  }
};

const Dropdown = ({ visible }) => {
  return (
    <div className={visible ? "user-profile-dropdown" : "no-display"}>
      hello
    </div>
  );
}


export default UserProfile;