import React, { Component } from 'react'
import './PersonalForm.css'

export default class PersonalForm extends Component {
  render() {
    return (
      <div>
        <h1>Персональная информация</h1>
        <div className="personal-form">
          <input
            name="firstName"
            placeholder="First name"
            onChange={this.handleChangeForm}
          />
          <input
            name="lastName"
            placeholder="Lirst name"
            onChange={this.handleChangeForm}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={this.handleChangeForm}
          />
        </div>
      </div>
    )
  }
  handleChangeForm = e => {
    const { onChangeForm } = this.props
    onChangeForm(e.target.name, e.target.value)
  }
}
