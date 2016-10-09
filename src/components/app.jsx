import React from 'react';
import TodoLayout from './todoLayout';
import Login from './login';
import MainLayout from './mainLayout';

const Horizon = require('@horizon/client');
const horizon = new Horizon({ secure: false });
const todos = horizon('todos');

import { Router, Route, browserHistory } from 'react-router';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <Route path="todos" component={TodoLayout} todos={todos} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);


export default App;
