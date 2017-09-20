import React from 'react';
import SessionButtonsContainer from './session_buttons_container';
import IntroText from './intro_text';
import SessionFormContainer from '../session/session_form_container';
import Footer from './footer';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar">
          <h1>TREVORNOTE</h1>
          <SessionButtonsContainer />
        </nav>
        <div>
          <IntroText />
          <SessionFormContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
