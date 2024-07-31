import { React } from 'react'
import PropTypes from 'prop-types'

import './app-header.css'
import NewTaskForm from '../new-task-form'

function AppHeader(props) {
  const { newTask } = props
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm
        newTask={(data) => {
          newTask(data)
        }}
      />
    </header>
  )
}

AppHeader.propTypes = {
  newTask: PropTypes.func,
}

export default AppHeader
