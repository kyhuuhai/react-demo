import React, { Component } from 'react';
import Home from '../components/Home';
import ItemContent from '../components/ItemContent';

export default class Body extends Component {
  render() {
    return (
      <div id="top">
        <Home />
        <ItemContent />
      </div>
    );
  }
}
