import React, { Component } from 'react'
import video from './Video.mp4'
import './VideoPlayer.css'

export default class VideoPlayer extends Component {
  static displayName = 'VideoPlayer'
  state = {
    play: false
  }
  componentDidUpdate() {
    this.state.play ? this.video.play() : this.video.pause()
  }

  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={c => (this.video = c)}>
          <source src={video} type="video/mp4" />
        </video>
        <div>
          <button type="text" onClick={this.handlerPlayVideo}>
            Play
          </button>
          <button type="text" onClick={this.handlerStopVideo}>
            Stop
          </button>
        </div>
      </div>
    )
  }

  handlerPlayVideo = () => this.setState({ play: true })

  handlerStopVideo = () => this.setState({ play: false })
}
