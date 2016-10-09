import React from 'react';
import { Link } from 'react-router';

// Login logic goes here

const MainLayout = (props) => (
  <div className="container-fluid">
    <Link to="login" >Login</Link>
    <Link to="todos" >Todos</Link>
    {props.children}
  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.object,
};

export default MainLayout;
