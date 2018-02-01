import React, { Component } from 'react'
import CardNumberInput from './CardNumberInput'

export default class CardNumberHolder extends Component {
  static displayName = 'Card number formating'
  state = {
    cardNumber: ''
  }
  render() {
    return (
      <CardNumberInput
        onChange={this.getValue}
        cardNumber={this.state.cardNumber}
      />
    )
  }
  getValue = value => this.setState({ cardNumber: value })
}
