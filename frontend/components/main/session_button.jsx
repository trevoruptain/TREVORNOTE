import React from 'react';
import { Link } from 'react-router-dom';

class SessionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDemo(event) {
    event.preventDefault();
    this.props.loginDummy();
  }

  render() {
    return (
      <ul id="session-buttons-container">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><button onClick={e => this.handleDemo(e)}>Demo</button></li>
      </ul>
    );
  }
}

export default SessionButton;
