import { React, Component } from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskText: '',
      timerMin: '',
      timerSec: '',
    }
  }

  inputTextChange = (evt) => {
    this.setState({ taskText: evt.target.value })
  }

  inputMinChange = (evt) => {
    this.setState({ timerMin: evt.target.value })
  }

  inputSecChange = (evt) => {
    this.setState({ timerSec: evt.target.value })
  }

  onFormSubmit = (evt) => {
    evt.preventDefault()
    const { newTask } = this.props
    const { taskText, timerMin, timerSec } = this.state

    newTask({ taskText, timerMin: Number(timerMin), timerSec: Number(timerSec) })
    this.setState({ taskText: '', timerMin: '', timerSec: '' })
  }

  render() {
    const { taskText, timerMin, timerSec } = this.state

    return (
      <form className="new-todo-form" onSubmit={this.onFormSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.inputTextChange}
          value={taskText}
          autoFocus
          pattern="\w+"
          required
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          pattern="[0-5][0-9]|[0-9]"
          maxLength={2}
          onChange={this.inputMinChange}
          value={timerMin}
          required
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          pattern="[0-5][0-9]|[0-9]"
          maxLength={2}
          onChange={this.inputSecChange}
          value={timerSec}
          required
        />
        <button aria-label="submit button" type="submit" />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  newTask: PropTypes.func,
}
