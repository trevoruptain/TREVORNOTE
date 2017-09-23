import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/notes');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    if (this.props.location.pathname === "/login") {
      this.props.login({user});
    } else {
      this.props.signup({user});
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error-text">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  showTitle() {
    if (this.props.location.pathname === "/signup") {
      return (
        <h2>Create Account</h2>
      );
    } else if (this.props.location.pathname === "/login") {
      return (
        <h2 className="session-title-text">Sign In</h2>
      );
    }
  }

  showBaseText() {
    if (this.props.location.pathname === "/") {
      return (
        <p className="base-text">By clicking Sign up, I agree to the Terms of Service and Privacy Policy.</p>
      );
    }
  }

  showLink() {
    if (this.props.location.pathname !== "/") {
      return (
        <div>
          <p>Want to go back?</p><br />
          <a href="/">Return Home</a>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="login-form-container">
        {this.showTitle()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            <br/>
            {this.showBaseText()}
            <input type="submit" value="Submit" />
            {this.renderErrors()}
            {this.showLink()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
