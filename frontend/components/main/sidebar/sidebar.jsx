import React from 'react';
import UserProfileContainer from './user_profile_container';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        Sidebar goes here

        <UserProfileContainer />
        {/*SearchBar */}
        {/*NewNote */}
        {/*NavBar */}

      </div>
    );
  }
};

export default Sidebar;