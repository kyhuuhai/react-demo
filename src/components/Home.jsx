import React, { Component } from 'react';
import AllPosts from '../components/AllPosts';
import NavHome from '../components/shared/NavHome';
import Footer from '../components/shared/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div id="top">
        <AllPosts />
        {/* <Router>
          <NavHome /> */}
        {/* <Footer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
          </Switch> */}
        {/* </Router> */}
      </div>
    );
  }
}
