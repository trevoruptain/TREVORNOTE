import React from 'react';
import NavButton from './nav_button';
import ProfileButtonContainer from './profile_button_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navbar">
        <div id="main-nav">
          <img src="https://s26.postimg.org/uumqyfbj9/trevornote-icon.png" />
          <NavButton type="add-note"/>
          <NavButton type="shortcuts"/>
          <NavButton type="notes"/>
          <NavButton type="notebooks"/>
          <NavButton type="tags"/>
        </div>
        <ProfileButtonContainer />
      </div>
    );
  }
}

export default NavBar;
