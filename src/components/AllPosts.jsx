import React, { Component, Fragment } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';
import store from '../store/store';
import { loadPosts } from '../actions/PostAction';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

class AllPosts extends Component {
  componentDidMount() {
    loadPosts().then(data => {
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
    const posts = this.props.posts.map((post, index) => {
      return (
        <Fragment key={post.id}>
          <Post post={post} authenToke={this.props.authenToken} />
        </Fragment>
      );
    });

    return <Fragment>{posts}</Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.postsReducer.posts
  };
};

export default withRouter(connect(mapStateToProps)(AllPosts));
