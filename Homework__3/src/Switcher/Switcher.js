import React, { Component } from 'react'
import './Switcher.css'

export default class Switcher extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedChild: 0 }
  }

  handleClick = event => {
    this.setState({ selectedChild: event.target.dataset.id })
    console.log(event.target.dataset.id)
  }

  renderComponent() {
    const { selectedChild } = this.state
    return this.props.children[selectedChild]
  }

  render() {
    return (
      <div className="switcher">
        <ul className="component-list" onClick={this.handleClick}>
          {this.props.children.map((child, indx) => (
            <li key={indx} data-id={indx} className="component-list__name">
              {child.type.displayName || child.type.name}
            </li>
          ))}
        </ul>
        <hr />
        <div className="component-wrapper">{this.renderComponent()}</div>
      </div>
    )
  }
}
