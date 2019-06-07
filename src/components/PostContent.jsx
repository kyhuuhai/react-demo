import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import store from '../store/store';
import { showPost } from '../actions/PostAction';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import Moment from 'react-moment';

class ItemContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    showPost(this.props.match.params.id).then(data => {
      if (data.result.status === 500) {
        alert(data.result.message);
        window.sessionStorage.setItem('authenToken', '');
        this.props.history.push('/login');
      } else {
        console.log(data);

        store.dispatch(data);
      }
    });
  }

  render() {
    return (
      <Fragment>
        <article className="row format-standard post-detail">
          <div className="s-content__header col-full">
            <h2 className="s-content__header-title">{this.props.post.name}</h2>
            <ul className="s-content__header-meta">
              <li className="date">
                <Moment format="HH:MM DD/MM/YYYY">
                  {this.props.post.created_at}
                </Moment>
              </li>
            </ul>
          </div>
          {/* end s-content__header */}
          <div className="post-image-content col-full">
            <div className="s-content__post-thumb">
              <img
                className="post-img-top"
                src="/images/thumbs/featured/featured-guitarman.jpg"
                alt=""
              />
            </div>
          </div>{' '}
          {/* end s-content__media */}
          <div className="col-full">
            <p className="lead">{this.props.post.description}</p>
            <p>
              Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
              nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
              incididunt adipisicing veniam velit id fugiat enim mollit amet
              anim veniam dolor dolor irure velit commodo cillum sit nulla
              ullamco magna amet magna cupidatat qui labore cillum sit in tempor
              veniam consequat non laborum adipisicing aliqua ea nisi sint ut
              quis proident ullamco ut dolore culpa occaecat ut laboris in sit
              minim cupidatat ut dolor voluptate enim veniam consequat occaecat
              fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
              laborum mollit quis nostrud sed sed.
            </p>
            <p>
              <img
                className="post-img-top"
                src="/images/thumbs/featured/featured-guitarman.jpg"
                alt=""
              />
            </p>
            <h2>Large Heading</h2>
            <p>
              Harum quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit
              quo minus <a href="http://#">omnis voluptas assumenda est</a> id
              quod maxime placeat facere possimus, omnis dolor repellendus.
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et.
            </p>
            <blockquote>
              <p>
                This is a simple example of a styled blockquote. A blockquote
                tag typically specifies a section that is quoted from another
                source of some sort, or highlighting text in your post.
              </p>
            </blockquote>
            <p>
              Odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupti dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Nulla vitae elit libero, a pharetra augue laboris in
              sit minim cupidatat ut dolor voluptate enim veniam consequat
              occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim
              aliqua laborum mollit quis nostrud sed sed.
            </p>
            <h3>Smaller Heading</h3>
            <p>
              Dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla
              vitae elit libero, a pharetra augue laboris in sit minim cupidatat
              ut dolor voluptate enim veniam consequat occaecat fugiat in
              adipisicing in amet Ut nulla nisi non ut enim aliqua laborum
              mollit quis nostrud sed sed.
            </p>
            <pre>
              <code>
                {'\n'}
                {'    '}code {'{'}
                {'\n'}
                {'        '}font-size: 1.4rem;{'\n'}
                {'        '}margin: 0 .2rem;{'\n'}
                {'        '}padding: .2rem .6rem;{'\n'}
                {'        '}white-space: nowrap;{'\n'}
                {'        '}background: #F1F1F1;{'\n'}
                {'        '}border: 1px solid #E1E1E1;{'\n'}
                {'        '}border-radius: 3px;{'\n'}
                {'    '}
                {'}'}
                {'\n'}
              </code>
            </pre>
            <p>
              Odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupti dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa.
            </p>
            <ul>
              <li>
                Donec nulla non metus auctor fringilla.
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </li>
              <li>Donec nulla non metus auctor fringilla.</li>
              <li>Donec nulla non metus auctor fringilla.</li>
            </ul>
            <p>
              Odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupti dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Nulla vitae elit libero, a pharetra augue laboris in
              sit minim cupidatat ut dolor voluptate enim veniam consequat
              occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim
              aliqua laborum mollit quis nostrud sed sed.
            </p>
            <p className="s-content__tags">
              <span>Post Tags</span>
              <span className="s-content__tag-list">
                <a href="#0">orci</a>
                <a href="#0">lectus</a>
                <a href="#0">varius</a>
                <a href="#0">turpis</a>
              </span>
            </p>{' '}
            {/* end s-content__tags */}
            <div className="s-content__author">
              <img src="images/avatars/user-03.jpg" alt="" />
              <div className="s-content__author-about">
                <h4 className="s-content__author-name">
                  <a href="#0">Jonathan Doe</a>
                </h4>
                <p>
                  Alias aperiam at debitis deserunt dignissimos dolorem
                  doloribus, fuga fugiat impedit laudantium magni maxime nihil
                  nisi quidem quisquam sed ullam voluptas voluptatum. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <ul className="s-content__author-social">
                  <li>
                    <a href="#0">Facebook</a>
                  </li>
                  <li>
                    <a href="#0">Twitter</a>
                  </li>
                  <li>
                    <a href="#0">GooglePlus</a>
                  </li>
                  <li>
                    <a href="#0">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="s-content__pagenav">
              <div className="s-content__nav">
                <div className="s-content__prev">
                  <a href="#0" rel="prev">
                    <span>Previous Post</span>
                    Tips on Minimalist Design
                  </a>
                </div>
                <div className="s-content__next">
                  <a href="#0" rel="next">
                    <span>Next Post</span>
                    Less Is More
                  </a>
                </div>
              </div>
            </div>{' '}
            {/* end s-content__pagenav */}
          </div>{' '}
          {/* end s-content__main */}
        </article>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.postsReducer.post
  };
};

export default withRouter(connect(mapStateToProps)(ItemContent));
