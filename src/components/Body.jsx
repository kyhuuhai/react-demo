import React, { Component } from 'react';
import '../App.scss';
import Nav from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import RouterLink from '../RouterLink';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Body extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <section className="s-content s-content--narrow s-content--no-padding-bottom">
          <RouterLink />
        </section>
        <Footer />
      </Router>
    );
  }
}

export default Body;
