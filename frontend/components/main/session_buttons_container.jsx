import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtonsContainer = () => (
  <ul id="session-buttons-container">
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">Sign Up</Link></li>
    <li><button>Demo</button></li>
  </ul>
);

export default SessionButtonsContainer;
