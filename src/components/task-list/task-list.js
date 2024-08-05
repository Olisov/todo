import { React } from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

function TaskList(props) {
  const { todos, updateTask, deleteTask } = props

  const todoTasks = todos.map((todoTask) => {
    const { id, taskStatus, taskText } = todoTask

    const enableTaskChange = (evt) => {
      evt.preventDefault()
      const newParams = {
        taskStatus: 'active',
        taskText: evt.target.editingTaskInput.value,
      }
      updateTask(id, newParams)
    }

    if (taskStatus === 'editing') {
      return (
        <li key={id} className="editing">
          <form onSubmit={enableTaskChange}>
            <input
              name="editingTaskInput"
              className="edit"
              defaultValue={taskText}
              pattern="\w+"
              required
              onKeyUp={(evt) => {
                if (evt.key === 'Escape') updateTask(id, { taskStatus: 'Active' })
              }}
            />
          </form>
        </li>
      )
    }

    return (
      <li key={id} {...(taskStatus === 'completed' ? { className: 'completed' } : {})}>
        <Task
          {...todoTask}
          onDelete={(taskId) => deleteTask(taskId)}
          updateTask={(taskId, params) => updateTask(taskId, params)}
        />
      </li>
    )
  })

  return <ul className="todo-list">{todoTasks}</ul>
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  deleteTask: PropTypes.func,
  updateTask: PropTypes.func,
}

export default TaskList
