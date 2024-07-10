import { React } from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

function TaskList(props) {
  const { todos, changeTaskStatus, editTask, deleteTask } = props

  const todoTasks = todos.map((todoTask) => {
    const { id, taskStatus, taskText } = todoTask

    if (taskStatus === 'editing') {
      return (
        <li key={id} className="editing">
          <form onSubmit={editTask}>
            <input name="editingTaskInput" className="edit" defaultValue={taskText} data-id={id} />
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
}

export default TaskList
