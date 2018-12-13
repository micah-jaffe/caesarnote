import React from 'react';
import UserProfileContainer from './user_profile_container';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="sidebar">
        <UserProfileContainer />
        {/*SearchBar */}
        {/*NewNote */}
        {/*NavBar */}

      </section>
    );
  }
};

export default Sidebar;