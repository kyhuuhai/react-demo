import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

export class Nav extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  logOut = () => {
    sessionStorage.setItem('authenToken', '');

    this.props.history.push('/login');
  };

  render() {
    let header;

    if (sessionStorage.getItem('authenToken') !== null) {
      header = (
        <Fragment>
          <li className="nav-item active">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/service" className="nav-link">
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <p className="nav-link p-link" onClick={this.logOut}>
              Log Out
            </p>
          </li>
        </Fragment>
      );
    } else {
      header = (
        <Fragment>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <h3 className="navbar-brand">Yè Ye</h3>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">{header}</ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default withRouter(Nav);
