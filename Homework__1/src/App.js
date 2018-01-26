import React, { Component } from 'react'

import NewsPost from './NewsPost'
import './App.css'

export default class App extends Component {
  state = {
    news: [],
    newsInput: ''
  }
  render() {
    const { newsInput, news } = this.state
    return (
      <div className="App">
        <input
          type="text"
          className="comment-input"
          onChange={this.handleChange}
          value={newsInput}
          placeholder="Какие новости ?"
        />
        <button type="text" onClick={this.handleNewPost}>
          Create news
        </button>
        <div className="todo-container">
          {news.map((post, key) => <NewsPost text={post.text} key={key} />)}
        </div>
      </div>
    )
  }

  handleChange = evt => {
    this.setState({ newsInput: evt.target.value })
  }

  handleNewPost = () => {
    const { newsInput, news } = this.state
    this.setState({ news: [...news, { text: newsInput }] })
    this.setState({ newsInput: '' })
  }
}
