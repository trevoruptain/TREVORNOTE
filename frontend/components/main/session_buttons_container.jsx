import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtonsContainer = () => (
  <ul className="session-button-container">
    <li><Link to="/login"><button>Login</button></Link></li>
    <li><Link to="/signup"><button>Sign Up</button></Link></li>
    <li><button className="colored-button">Demo</button></li>
  </ul>
);

export default SessionButtonsContainer;
