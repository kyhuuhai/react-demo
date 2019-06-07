import React, { Component } from 'react';
import './App.scss';
import Body from './components/Body';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Body />
      </div>
    );
  }
}

export default App;
