import React, { Component } from 'react';
import AllItems from '../components/AllItems';
import Category from '../components/Category';

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="container body-content">
          <div className="row">
            <div className="col-lg-3">
              <Category />
            </div>
            <div className="col-lg-9">
              <div className="row">
                <AllItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
