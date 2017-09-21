import React from 'react';
import SessionButtonsContainer from './session_buttons_container';
import IntroText from './intro_text';

import SessionFormContainer from '../session/session_form_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <img src={"https://s26.postimg.org/ysa0ntycl/trevornote-logo-s.png"} />
          <SessionButtonsContainer />
        </nav>
        <div id="main">
          <IntroText />
          <div id="session-form-container">
            <p className="signup-text">Sign Up for Free</p>
            <SessionFormContainer />
          </div>
        </div>
        <footer>
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Facebook</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default MainPage;
