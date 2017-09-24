import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      page: this.props.location.pathname,
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/notes');
    }

    this.state.errors = nextProps.errors;
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.clearedErrors) {
      nextState.errors = [];
    }

    this.clearedErrors = !this.clearedErrors;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    if (this.state.page === "/login") {
      this.props.login({user});
    } else {
      this.props.signup({user});
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.state.errors.map((error, i) => (
          <li key={`error-${i}`} className="error-text">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  showTitle() {
    if (this.state.page === "/signup") {
      return (
        <h2>Create Account</h2>
      );
    } else if (this.state.page === "/login") {
      return (
        <h2 className="session-title-text">Sign In</h2>
      );
    }
  }

  showBaseText() {
    if (this.state.page === "/") {
      return (
        <p className="base-text">By clicking Sign up, I agree to the Terms of Service and Privacy Policy.</p>
      );
    }
  }

  showLink() {
    if (this.state.page === "/login") {
      return (
        <div>
          <p>Don't have an account?</p><br />
            <a onClick={() => {
                this.props.history.push("signup");
                this.setState({email: '', password: '', page: '/signup'});
              }}>Create Account</a>
        </div>
      );
    } else if (this.state.page === "/signup") {
      return (
        <div>
          <p>Already have an account?</p><br />
          <a onClick={() => {
              this.props.history.push("login");
              this.setState({email: '', password: '', page: '/login'});
            }}>Sign in</a>
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
