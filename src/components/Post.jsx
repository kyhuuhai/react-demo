import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="preview-post">
          <div className="post h-100">
            <Link to={'/post/' + this.props.post.id}>
              <img
                className="post-img-top"
                src="/images/thumbs/featured/featured-guitarman.jpg"
                alt=""
              />
            </Link>

            <div className="post-body post-preview">
              <Link className="title" to={'/post/' + this.props.post.id}>
                {this.props.post.name}
              </Link>
              <p className="time">
                Posted at:<span> </span>
                <Moment format="HH:MM DD/MM/YYYY">
                  {this.props.post.created_at}
                </Moment>
              </p>
              <p className="pre-content">
                Is we miles ready he might going. Own books built put civil
                fully blind fanny. Projection appearance at of admiration no. As
                he totally cousins warrant besides ashamed do.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
