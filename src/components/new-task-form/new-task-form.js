import { React, useState } from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'

function NewTaskForm(props) {
  const initialData = {
    taskText: '',
    timerMin: '',
    timerSec: '',
  }

  const [newTaskData, setNewTaskData] = useState(initialData)
  const { taskText, timerMin, timerSec } = newTaskData

  function onFormSubmit(evt) {
    evt.preventDefault()
    const { newTask } = props
    newTask({ taskText, timerMin: Number(timerMin), timerSec: Number(timerSec) })
    setNewTaskData(initialData)
  }

  return (
    <form className="new-todo-form" onSubmit={onFormSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(evt) => {
          setNewTaskData((prev) => {
            return { ...prev, taskText: evt.target.value }
          })
        }}
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
        onChange={(evt) => {
          setNewTaskData((prev) => {
            return { ...prev, timerMin: evt.target.value }
          })
        }}
        value={timerMin}
        required
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        pattern="[0-5][0-9]|[0-9]"
        maxLength={2}
        onChange={(evt) => {
          setNewTaskData((prev) => {
            return { ...prev, timerSec: evt.target.value }
          })
        }}
        value={timerSec}
        required
      />
      <button aria-label="submit button" type="submit" />
    </form>
  )
}

NewTaskForm.propTypes = {
  newTask: PropTypes.func,
}

export default NewTaskForm
