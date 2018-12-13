import React from 'react';

const UserProfile = props => {
  return (
    <div className="user-profile">
      <span>
        <img className="avatar" src={window.images.logo} />
      </span>

      <span>
        {props.currentUser.username}
      </span>

    </div>
  );
};

export default UserProfile;