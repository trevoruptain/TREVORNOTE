import React from 'react';
import SessionFormContainer from './session_form_container';
import { Link } from 'react-router-dom';

const SessionPage = () => (
  <div>
    <div className="top-bar" />
    <div id="session-main">
      <div id="login-container">
        <a href="/">
          <img src={"https://s26.postimg.org/uumqyfbj9/trevornote-icon.png"} />
        </a>
        <SessionFormContainer />
      </div>
    </div>
  </div>
);

export default SessionPage;
