import React, { Component } from 'react';

export default class ItemContent extends Component {
  render() {
    return (
      <div>
        <section className="s-extra">
          <div className="row top">
            <div className="col-eight md-six tab-full popular">
              <h3>Popular Posts</h3>
              <div className="block-1-2 block-m-full popular__posts">
                <article className="col-block popular__post">
                  <a href="#0" className="popular__thumb ">
                    <img src="images/thumbs/small/wheel-150.jpg" alt />
                  </a>
                  <h5>
                    <a href="#0">Visiting Theme Parks Improves Your Health.</a>
                  </h5>
                  <section className="popular__meta">
                    <span className="popular__author">
                      <span>By</span> <a href="#0"> John Doe</a>
                    </span>
                    <span className="popular__date">
                      <span>on</span>{' '}
                      <time dateTime="2017-12-19">Dec 19, 2017</time>
                    </span>
                  </section>
                </article>
                <article className="col-block popular__post">
                  <a href="#0" className="popular__thumb">
                    <img src="images/thumbs/small/shutterbug-150.jpg" alt />
                  </a>
                  <h5>
                    <a href="#0">Key Benefits Of Family Photography.</a>
                  </h5>
                  <section className="popular__meta">
                    <span className="popular__author">
                      <span>By</span> <a href="#0"> John Doe</a>
                    </span>
                    <span className="popular__date">
                      <span>on</span>{' '}
                      <time dateTime="2017-12-18">Dec 18, 2017</time>
                    </span>
                  </section>
                </article>
                <article className="col-block popular__post">
                  <a href="#0" className="popular__thumb">
                    <img src="images/thumbs/small/cookies-150.jpg" alt />
                  </a>
                  <h5>
                    <a href="#0">Absolutely No Sugar Oatmeal Cookies.</a>
                  </h5>
                  <section className="popular__meta">
                    <span className="popular__author">
                      <span>By</span> <a href="#0"> John Doe</a>
                    </span>
                    <span className="popular__date">
                      <span>on</span>{' '}
                      <time dateTime="2017-12-16">Dec 16, 2017</time>
                    </span>
                  </section>
                </article>
                <article className="col-block popular__post">
                  <a href="#0" className="popular__thumb">
                    <img src="images/thumbs/small/beetle-150.jpg" alt />
                  </a>
                  <h5>
                    <a href="#0">Throwback To The Good Old Days.</a>
                  </h5>
                  <section className="popular__meta">
                    <span className="popular__author">
                      <span>By</span> <a href="#0"> John Doe</a>
                    </span>
                    <span className="popular__date">
                      <span>on</span>{' '}
                      <time dateTime="2017-12-16">Dec 16, 2017</time>
                    </span>
                  </section>
                </article>
                <article className="col-block popular__post">
                  <a href="#0" className="popular__thumb">
                    <img src="images/thumbs/small/tulips-150.jpg" alt />
                  </a>
                  <h5>
                    <a href="#0">10 Interesting Facts About Caffeine.</a>
                  </h5>
                  <section className="popular__meta">
                    <span className="popular__author">
                      <span>By</span> <a href="#0"> John Doe</a>
                    </span>
                    <span className="popular__date">
                      <span>on</span>{' '}
                      <time dateTime="2017-12-14">Dec 14, 2017</time>
                    </span>
                  </section>
                </article>
                <article className="col-block popular__post">
                  <a href="#0" className="popular__thumb">
                    <img src="images/thumbs/small/salad-150.jpg" alt />
                  </a>
                  <h5>
                    <a href="#0">Healthy Mediterranean Salad Recipes</a>
                  </h5>
                  <section className="popular__meta">
                    <span className="popular__author">
                      <span>By</span> <a href="#0"> John Doe</a>
                    </span>
                    <span className="popular__date">
                      <span>on</span>{' '}
                      <time dateTime="2017-12-12">Dec 12, 2017</time>
                    </span>
                  </section>
                </article>
              </div>{' '}
              {/* end popular_posts */}
            </div>{' '}
            {/* end popular */}
            <div className="col-four md-six tab-full about">
              <h3>About Philosophy</h3>
              <p>
                Donec sollicitudin molestie malesuada. Nulla quis lorem ut
                libero malesuada feugiat. Pellentesque in ipsum id orci porta
                dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Donec velit neque, auctor sit
                amet aliquam vel, ullamcorper sit amet ligula. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Donec
                sollicitudin molestie malesuada.
              </p>
              <ul className="about__social">
                <li>
                  <a href="#0">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                </li>
              </ul>{' '}
              {/* end header__social */}
            </div>{' '}
            {/* end about */}
          </div>{' '}
          {/* end row */}
          <div className="row bottom tags-wrap">
            <div className="col-full tags">
              <h3>Tags</h3>
              <div className="tagcloud">
                <a href="#0">Salad</a>
                <a href="#0">Recipe</a>
                <a href="#0">Places</a>
                <a href="#0">Tips</a>
                <a href="#0">Friends</a>
                <a href="#0">Travel</a>
                <a href="#0">Exercise</a>
                <a href="#0">Reading</a>
                <a href="#0">Running</a>
                <a href="#0">Self-Help</a>
                <a href="#0">Vacation</a>
              </div>{' '}
              {/* end tagcloud */}
            </div>{' '}
            {/* end tags */}
          </div>{' '}
          {/* end tags-wrap */}
        </section>
      </div>
    );
  }
}
