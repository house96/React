import React, { Component } from 'react'
import './App.css'
import Switcher from './Switcher'
import ModalButton from './ModalButton'
import VideoPlayer from './VideoPlayer'
import CardNumberHolder from './CardNumberHolder'

class App extends Component {
  render() {
    return (
      <Switcher>
        <VideoPlayer />
        <CardNumberHolder />
        <ModalButton />
      </Switcher>
    )
  }
}

export default App
