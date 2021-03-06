import React, { Component } from 'react';
const Horizon = require('@horizon/client');

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.horizon = this.props.horizon || this.props.route.horizon;
  }
  handleAuth() {
    this.horizon.authEndpoint('github').subscribe((endpoint) => {
      window.location.replace(endpoint);
    });
  }
  handleLogout(e) {
    e.preventDefault();
    Horizon.clearAuthTokens();
    this.context.router.push('/');
  }
  render() {
    const login = (
      <div className="row">
        <button
          className="btn btn-block btn-github" onClick={this.handleAuth}
        >
          <span className="fa fa-github"></span> Sign in with Github
        </button>
      </div>);
    const logout = (
      <div className="row">
        <button
          className="btn btn-block btn-danger"
          onClick={this.handleAuth}
        >
          <span className="fa fa-github"></span> Logout
        </button>
      </div>);
    const jsx = this.horizon.hasAuthToken() ? logout : login;
    return jsx;
  }
}
Login.propTypes = {
  route: React.PropTypes.object,
  horizon: React.PropTypes.func,
};

Login.contextTypes = {
  router: React.PropTypes.object,
};

export default Login;
