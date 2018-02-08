import React, { Component } from 'react'

import PersonalForm from './PersonalForm'
import CardForm from './CardForm'
import Step from './Step'
import './App.css'

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  }

  render() {
    const pages = ['Personal information', 'Card information', 'Finish']
    let steps = pages.map((title, index) => {
      return (
        <Step
          key={index}
          number={index + 1}
          onClick={this.handleTabClick}
          isClickable={this.state.step !== index + 1}
          isSelected={this.state.step === index + 1}
        >
          {title}
        </Step>
      )
    })
    return (
      <div className="container">
        <div className="tab-panel">{steps}</div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            disabled={!this.isFormCommitable()}
            onClick={this.handleClickNextForm}
          >
            next
          </button>
        </div>
      </div>
    )
  }
  renderForm = () => {
    if (this.state.step === 1) {
      return (
        <PersonalForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          onChangeForm={this.handleChangeForm}
        />
      )
    }
    if (this.state.step === 2) {
      return (
        <CardForm
          cardNumber={this.state.cardNumber}
          onChangeForm={this.handleChangeForm}
          onChangeTimeOver={this.handleChangeTimeOver}
        />
      )
    }
    if (this.state.step === 3) {
      return 'Поздравляем!'
    }
  }
  handleClickNextForm = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  handleChangeForm = (key, value) => {
    return this.setState({
      [key]: value
    })
  }
  handleTabClick = step => {
    return this.setState({
      step: step
    })
  }
  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state
    if (step === 1) {
      if (
        firstName !== '' &&
        lastName !== '' &&
        email !== '' &&
        email.includes('@')
      ) {
        return true
      }
    }
    if (step === 2) {
      if (cardNumber.length === 16) {
        return true
      }
    }
    return false
  }
  isSelected = n => {
    if (n === this.state.step) {
      return true
    }
  }
}
export default App
