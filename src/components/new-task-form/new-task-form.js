import { React, Component } from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'
// import NewInput from '../../shared/components/input'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newTaskText: '',
    }
  }

  inputTextChange = (evt) => {
    this.setState({ newTaskText: evt.target.value })
  }

  onFormSubmit = (evt) => {
    evt.preventDefault()
    const { newTask } = this.props
    const { newTaskText } = this.state

    newTask(newTaskText)
    this.setState({ newTaskText: '' })
  }

  render() {
    const { newTaskText } = this.state

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.inputTextChange}
          value={newTaskText}
          autoFocus
          pattern="\w+"
          required
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  newTask: PropTypes.func,
}
