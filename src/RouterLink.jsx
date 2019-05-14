import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Contact from './components/Contact';
import Service from './components/Service';
import Body from './components/Body';

export default class RouterLink extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/login" component={Login} />
        <Route path="/" component={Body} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
      </Fragment>
    );
  }
}
