import React, { Component } from 'react';
import ApiLib from '../lib/api';
import ENV from '../env';

export default class Login extends Component {
  isChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  login = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    ApiLib.Post(ENV.apiLink + '/api/v1/login', user).then(result => {
      if (result.status === 500) {
        alert(result.message);
      } else {
        window.sessionStorage.setItem('authenToken', result.authenToken);
        this.props.history.push('/home');
      }
    });
  };

  render() {
    return (
      <div className="container login-container">
        <form onSubmit={event => this.login(event)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email </label>
              <input
                type="text"
                name="email"
                onChange={event => this.isChange(event)}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={event => this.isChange(event)}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
