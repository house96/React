import React, { Component } from 'react'
export default class CardNumberInput extends Component {
  render() {
    const format = () => {
      const { cardNumber } = this.props
      let inputView = ''

      for (let i = 0; i < cardNumber.length; i++) {
        if ((i + 1) % 4 === 0) {
          inputView = inputView + cardNumber[i] + ' '
        } else {
          inputView = inputView + cardNumber[i]
        }
      }

      return inputView
    }
    return <input type="text" value={format()} onChange={this.handlerChange} />
  }
  handlerChange = event => {
    this.props.onChange(event.target.value)
  }
}
