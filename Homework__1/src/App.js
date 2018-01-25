import React, { Component } from 'react'

import NewsPost from './NewsPost'
import './App.css'

export default class App extends Component {
  state = {
    value: '',
    postList: []
  }
  render() {
    const { value, postList } = this.state
    return (
      <div className="App">
        <input
          type="text"
          className="comment-input"
          onChange={this.handleChangeInput}
          value={value}
          placeholder="Какие новости ?"
        />
        <button type="text" onClick={this.handleClickBtn}>
          Create news
        </button>
        <NewsPost postList={postList} />
      </div>
    )
  }

  handleChangeInput = evt => {
    this.setState({ value: evt.target.value })
  }

  handleClickBtn = () => {
    const { postList, value } = this.state
    this.setState({ postList: [...postList, value] })
    this.setState({ value: '' })
  }
}
