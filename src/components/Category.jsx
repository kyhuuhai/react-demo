import React, { Component } from 'react';
import store from '../store/store';
import { searchItemsByCategory } from '../actions/action';

export default class Category extends Component {
  searchCategory = term => {
    searchItemsByCategory(term).then(data => {
      if (data.result.status === 500) {
        alert(data.result.message);
        window.sessionStorage.setItem('authenToken', '');
        this.props.history.push('/login');
      } else {
        store.dispatch(data);
      }
    });
  };

  render() {
    return (
      <div className="list-group">
        <p className="list-group-item" onClick={() => this.searchCategory('')}>
          All
        </p>
        <p className="list-group-item" onClick={() => this.searchCategory('a')}>
          Category a
        </p>
        <p className="list-group-item" onClick={() => this.searchCategory('b')}>
          Category b
        </p>
        <p className="list-group-item" onClick={() => this.searchCategory('c')}>
          Category c
        </p>
      </div>
    );
  }
}
