import React, { Component, Fragment } from 'react'
import { addListener, removeListener, isAuthorized } from './AuthorizeApi'
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import Home from './Home'
import Private from './Private'
import Public from './Public'
import Auth from './Auth'
import './App.css'

class App extends Component {
  state = {
    isAuthorized
  }

  componentDidMount() {
    addListener(this.handleAuthorize)
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize)
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized })
  }

  render() {
    const { isAuthorized } = this.state
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/auth">Войти</Link>
            </li>
            <li>
              <Link to="/private">Секретная страница</Link>
            </li>
            <li>
              <Link to="/public">Публичная страница</Link>
            </li>
            <li>
              <Link to="/">Главная</Link>
            </li>
          </ul>
        </nav>

        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/public" component={Public} />
            {isAuthorized ? (
              <Route path="/private" component={Private} />
            ) : (
              <Redirect from="/private" to="/auth" />
            )}
            }
            <Route path="/auth" component={Auth} />
            {!isAuthorized && <Redirect to="/" />}
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default App
