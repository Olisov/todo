import { React } from 'react'
import PropTypes from 'prop-types'

import TaskList from '../task-list'
import AppFooter from '../app-footer'
import './app-main.css'

function AppMain(props) {
  const {
    todoDataArr,
    changeTaskStatus,
    editTask,
    deleteTask,
    activeTaskCount,
    filterStatus,
    changeFilterStatus,
    clearAllCompleted,
  } = props

  return (
    <section className="main">
      <TaskList
        todos={todoDataArr}
        changeTaskStatus={(id, newStatus) => changeTaskStatus(id, newStatus)}
        editTask={(id) => editTask(id)}
        deleteTask={(id) => deleteTask(id)}
      />
      <AppFooter
        activeTaskCount={activeTaskCount}
        filterStatus={filterStatus}
        changeFilterStatus={(newStatus) => {
          changeFilterStatus(newStatus)
        }}
        clearAllCompleted={() => {
          clearAllCompleted()
        }}
      />
    </section>
  )
}

AppMain.propTypes = {
  changeTaskStatus: PropTypes.func,
  editTask: PropTypes.func,
  deleteTask: PropTypes.func,
  changeFilterStatus: PropTypes.func,
  clearAllCompleted: PropTypes.func,
  todoDataArr: PropTypes.arrayOf(PropTypes.object),
  filterStatus: PropTypes.string,
  activeTaskCount: (props, propName, componentName) => {
    const verifyingValue = props[propName]

    if (typeof verifyingValue === 'number' && !Number.isNaN(verifyingValue)) return null
    return new TypeError(`${componentName}: ${propName} must be a number`)
  },
}

export default AppMain
