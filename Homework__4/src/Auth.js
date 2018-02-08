import React, { Component } from 'react'
import { authorizeUser, isAuthorized } from './AuthorizeApi'
import { Redirect } from 'react-router-dom'

class Auth extends Component {
  state = {
    email: '',
    password: '',
    isAuthorized,
    error: false
  }
  render() {
    const { error, isAuthorized } = this.state
    return (
      <div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handlerChange}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={this.handlerChange}
          />
          {error ? <p className="error">Неверный пароль и/или почта.</p> : null}
          {isAuthorized && <Redirect from="/auth" to="/" />}
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
  handlerChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    const { email, password } = this.state
    return authorizeUser(email, password)
      ? this.setState({ isAuthorized })
      : this.setState({ error: true })
  }
}

export default Auth
