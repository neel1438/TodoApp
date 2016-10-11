import React from 'react';
import TodoLayout from './todoLayout';
import Login from './login';
import MainLayout from './mainLayout';
import authRoute from './authenticateRoute';

const Horizon = require('@horizon/client');
const horizon = new Horizon({ secure: true, authType: 'token' });
const todos = horizon('todos');

import { Router, Route, browserHistory } from 'react-router';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <Route path="todos" component={authRoute(TodoLayout)} horizon={horizon} todos={todos} />
      <Route path="login" component={Login} horizon={horizon} />
    </Route>
  </Router>
);


export default App;
