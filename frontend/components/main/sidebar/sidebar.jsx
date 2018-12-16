import React from 'react';
import UserProfileContainer from './user_profile_container';
import SearchBar from './search_bar';
import NewNoteContainer from './new_note_container';
import NavBarContainer from './nav_bar_container';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <section className="sidebar">
          <UserProfileContainer />
          <SearchBar />
          <NewNoteContainer />
          <NavBarContainer />
        </section>
      </div>
    );
  }
};

export default Sidebar;