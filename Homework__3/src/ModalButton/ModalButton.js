import React, { Component } from 'react'
import Modal from './Modal'
import './ModalButton.css'

export default class ModalButton extends Component {
  static displayName = 'ModalButton'
  state = {
    isModalShow: false
  }
  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        <Modal>{this.modalShow()}</Modal>
      </div>
    )
  }
  hideModal = () => this.setState({ isModalShow: false })
  showModal = () => this.setState({ isModalShow: true })

  modalShow = () => {
    const { isModalShow } = this.state
    return isModalShow ? (
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            <h1>Модальное окно</h1>
            <button onClick={this.hideModal}>Close</button>
          </div>
        </div>
      </div>
    ) : null
  }
}
