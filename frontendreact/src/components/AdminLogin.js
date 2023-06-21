import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false,
    error: '',
  };

  handleLogin = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    axios
      .post('http://127.0.0.1:8000/api/login/', { username, password })
      .then((response) => {
        const { data } = response;
        if (data.success) {
          this.setState({ isLoggedIn: true, error: '' });
        } else {
          this.setState({ error: data.error });
        }
      })
      .catch((error) => {
        if (error.response) {
          this.setState({ error: error.response.data.detail });
        } else {
          this.setState({ error: 'An error occurred while processing your request' });
        }
      });
  };

  render() {
    const { username, password, isLoggedIn, error } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </form>
        {isLoggedIn && <a href="http://127.0.0.1:8000/admin/">Go to admin panel</a>}
      </div>
    );
  }
}

export default Login;
