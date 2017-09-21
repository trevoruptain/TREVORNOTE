import React from 'react';

const ProfileButton = ({ logout }) => (
  <div id="profile-holder">
    <i className="fa fa-user profile-button" onClick={logout}></i>
  </div>
);

export default ProfileButton;
