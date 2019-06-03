import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Contact from './components/Contact';
import Service from './components/Service';
import Body from './components/Body';
import PostContent from './components/PostContent';

export default class RouterLink extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/home" component={Body} />
        <Route path="/login" component={Login} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:id" component={PostContent} />
      </Fragment>
    );
  }
}
