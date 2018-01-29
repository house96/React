import React, { Component, Fragment } from 'react'
import './CardForm.css'

export default class CardForm extends Component {
  componentWillUnmount() {}
  render() {
    return (
      <Fragment>
        <h1>Номер карты</h1>
        <div className="card-form">
          <input
            type="text"
            name="cardNumber"
            className="input"
            placeholder="0000000000000000"
            onChange={this.handleChangeForm}
          />
        </div>
      </Fragment>
    )
  }
  handleChangeForm = e => {
    const { onChangeForm } = this.props

    onChangeForm(e.target.name, e.target.value)
  }
}
