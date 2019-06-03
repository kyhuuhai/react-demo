import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import RouterLink from './RouterLink';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <section className="s-content s-content--narrow s-content--no-padding-bottom">
            <RouterLink />
          </section>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
