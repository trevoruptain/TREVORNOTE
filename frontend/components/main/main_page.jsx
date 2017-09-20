import React from 'react';
import SessionButtonsContainer from './session_buttons_container';

class MainPage extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <h1>TREVORNOTE</h1>
        <SessionButtonsContainer />
      </nav>
    );
  }
}

export default MainPage;
