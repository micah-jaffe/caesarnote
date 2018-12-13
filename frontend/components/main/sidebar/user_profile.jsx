import React from 'react';

const UserProfile = ({ currentUser }) => {
  return (
    <div className="user-profile-container">
      <span className="user-profile">
        <img className="avatar" src={window.images.avatar} />
        <span>{currentUser ? currentUser.username : ''}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="profile-svg"><path fill="none" d="M7 2L4 5 1 2"></path></svg>
      </span>

    </div>
  );
};

export default UserProfile;