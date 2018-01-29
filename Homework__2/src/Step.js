import React, { Component } from 'react'
import './Step.css'

export default class Step extends Component {
  render() {
    return (
      <div
        className={`step ${this.props.isClickable ? 'step-clickable' : ''} ${
          this.props.isSelected ? 'step-selected' : ''
        }`}
        onClick={this.handleClick}
      >
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.children}</div>
      </div>
    )
  }

  handleClick = e => {
    const { isClickable, onClick, number } = this.props
    return isClickable === true ? onClick(number) : null
  }
}
