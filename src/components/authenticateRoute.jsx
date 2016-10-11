import React, { Component } from 'react';
import Login from './login';

const authRoute = (ChildComponent) => {
  class AuthenticatedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { currentUser: '' };
      this.horizon = this.props.route.horizon;
    }
    componentDidMount() {
      if (this.horizon.hasAuthToken()) {
        this.getCurrentUser((user) => {
          this.setState({ currentUser: user.id });
        });
      }
    }
    getCurrentUser(callback) {
      this.horizon.currentUser().fetch().subscribe((user) => callback(user));
    }
    render() {
      return (this.horizon.hasAuthToken() ? <ChildComponent {...this.props} user={this.state.currentUser} /> : <Login horizon={this.horizon} />);
    }
  }
  AuthenticatedComponent.propTypes = {
    route: React.PropTypes.object,
  };
  return AuthenticatedComponent;
};

export default authRoute;
