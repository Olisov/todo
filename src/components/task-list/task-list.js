import { React } from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

function TaskList(props) {
  const { todos, changeTaskStatus, editTask, deleteTask, timerPlay, timerPause } = props

  const todoTasks = todos.map((todoTask) => {
    const { id, taskStatus, taskText } = todoTask

    if (taskStatus === 'editing') {
      return (
        <li key={id} className="editing">
          <form onSubmit={editTask}>
            <input
              name="editingTaskInput"
              className="edit"
              defaultValue={taskText}
              data-id={id}
              pattern="\w+"
              required
              onKeyUp={(evt) => {
                if (evt.key === 'Escape') changeTaskStatus(id, 'Active')
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
          onChangeStatus={(taskId, newStatus) => changeTaskStatus(taskId, newStatus)}
          onDelete={(taskId) => deleteTask(taskId)}
          timerPlay={(taskId) => timerPlay(taskId)}
          timerPause={(taskId) => timerPause(taskId)}
        />
      </li>
    )
  })

  return <ul className="todo-list">{todoTasks}</ul>
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  changeTaskStatus: PropTypes.func,
  editTask: PropTypes.func,
  deleteTask: PropTypes.func,
  timerPlay: PropTypes.func,
  timerPause: PropTypes.func,
}

export default TaskList
