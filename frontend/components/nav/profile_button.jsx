import React from 'react';

const ProfileButton = ({ logout }) => (
  <div id="profile-holder">
    <i className="fa fa-sign-out profile-button" onClick={logout}></i>
  </div>
);

export default ProfileButton;
