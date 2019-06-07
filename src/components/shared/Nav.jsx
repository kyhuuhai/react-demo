import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

export class Nav extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  logOut = () => {
    sessionStorage.setItem('authenToken', '');

    this.props.history.push('/login');
  };

  render() {
    // let header;

    // if (sessionStorage.getItem('authenToken') !== null) {
    //   header = (
    //     <Fragment>
    //       <li className="nav-item active">
    //         <Link to="/home" className="nav-link">
    //           Home
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/service" className="nav-link">
    //           Service
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="/contact" className="nav-link">
    //           Contact
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <p className="nav-link p-link" onClick={this.logOut}>
    //           Log Out
    //         </p>
    //       </li>
    //     </Fragment>
    //   );
    // } else {
    //   header = (
    //     <Fragment>
    //       <li className="nav-item">
    //         <Link to="/login" className="nav-link">
    //           Login
    //         </Link>
    //       </li>
    //     </Fragment>
    //   );
    // }

    return (
      <section className="s-pageheader s-pageheader--home">
        <header className="header">
          <div className="header__content row">
            <div className="header__logo">
              <Link className="logo" to="/">
                <img src="/images/logo.svg" alt="Homepage" />
              </Link>
            </div>
            <ul className="header__social">
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
            </ul>
            {/* end header__social */}
            <a className="header__search-trigger" href="#0" />
            <div className="header__search">
              <form
                role="search"
                method="get"
                className="header__search-form"
                action="#"
              >
                <label>
                  <span className="hide-content">Search for:</span>
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Type Keywords"
                    defaultValue
                    name="s"
                    title="Search for:"
                    autoComplete="off"
                  />
                </label>
                <input
                  type="submit"
                  className="search-submit"
                  defaultValue="Search"
                />
              </form>
              <a
                href="#0"
                title="Close Search"
                className="header__overlay-close"
              >
                Close
              </a>
            </div>
            {/* end header__search */}
            <a className="header__toggle-menu" href="#0" title="Menu">
              <span>Menu</span>
            </a>
            <nav className="header__nav-wrap">
              <h2 className="header__nav-heading h6">Site Navigation</h2>
              <ul className="header__nav">
                <li className="current">
                  <Link className="logo" to="/">
                    Home
                  </Link>
                </li>
                <li className="has-children">
                  <a href="#0">Categories</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="category.html">Lifestyle</a>
                    </li>
                    <li>
                      <a href="category.html">Health</a>
                    </li>
                    <li>
                      <a href="category.html">Family</a>
                    </li>
                    <li>
                      <a href="category.html">Management</a>
                    </li>
                    <li>
                      <a href="category.html">Travel</a>
                    </li>
                    <li>
                      <a href="category.html">Work</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#0">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="single-video.html">Video Post</a>
                    </li>
                    <li>
                      <a href="single-audio.html">Audio Post</a>
                    </li>
                    <li>
                      <a href="single-gallery.html">Gallery Post</a>
                    </li>
                    <li>
                      <a href="single-standard.html">Standard Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="style-guide.html">Styles</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              {/* end header__nav */}
              <a
                href="#0"
                title="Close Menu"
                className="header__overlay-close close-mobile-menu"
              >
                Close
              </a>
            </nav>
            {/* end header__nav-wrap */}
          </div>
          {/* header-content */}
        </header>
      </section>
    );
  }
}

export default withRouter(Nav);
