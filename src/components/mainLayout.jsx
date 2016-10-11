import React from 'react';
import { Link } from 'react-router';

const MainLayout = (props) => (
  <div>
    <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">TodoApp</Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="todos">Todos</Link></li>
          <li><Link to="login">Login/Logout</Link></li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid todo-container">
      {props.children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.object,
};

export default MainLayout;
