import React, { Component, Fragment } from 'react';
import Item from '../components/Item';
import { connect } from 'react-redux';
import store from '../store/store';
import { loadItems } from '../actions/action';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

class AllItems extends Component {
  componentDidMount() {
    loadItems().then(data => {
      if (data.result.status === 500) {
        alert(data.result.message);
        window.sessionStorage.setItem('authenToken', '');
        this.props.history.push('/login');
      } else {
        store.dispatch(data);
      }
    });
  }

  componentDidUpdate() {
    if (window.sessionStorage.getItem('authenToken') === '') {
      this.props.history.push('/login');
    }
  }

  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <Fragment key={item.id}>
          <Item item={item} authenToke={this.props.authenToken} />
        </Fragment>
      );
    });

    return <Fragment>{items}</Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.itemsReducer.items
  };
};

export default withRouter(connect(mapStateToProps)(AllItems));
