import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Contact from './components/Contact';
import Service from './components/Service';
import Home from './components/Home';
import PostContent from './components/PostContent';
import CreatePost from './components/CreatePost';

export default class RouterLink extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
        <Route path="/post/:id" component={PostContent} />
        <Route path="/create_post" component={CreatePost} />
      </Switch>
    );
  }
}
