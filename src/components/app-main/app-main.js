import { Component } from 'react'
import PropTypes from 'prop-types'

import TaskList from '../task-list'
import AppFooter from '../app-footer'
import './app-main.css'

export class AppMain extends Component {

  static defaultProps = {
    filterStatus: 'active',
    activeTaskCount: 0,
  }

  static propTypes = {
    activeTaskCount: (props, propName, componentName ) => {
      const verifyingValue = props[propName]

      if( typeof verifyingValue === 'number' && !isNaN(verifyingValue) ) return null
      else return new TypeError(`${componentName}: ${propName} must be a number`)
    },
    todoDataArr: PropTypes.arrayOf(PropTypes.object)
    // todoDataArr: PropTypes.arrayOf(PropTypes.number)
  }
  

  render() {
    const { todoDataArr, 
            changeTaskStatus, 
            editTask,
            deleteTask,
            activeTaskCount,
            filterStatus,
            changeFilterStatus,
            clearAllCompleted } = this.props

    return (
      <section className="main">
        <TaskList 
          todos = {todoDataArr} 
          changeTaskStatus = {(id, newStatus) => (changeTaskStatus(id, newStatus))}
          editTask = {id => (editTask(id))}
          deleteTask = {id => (deleteTask(id))}/>
        <AppFooter 
          activeTaskCount = {activeTaskCount}
          filterStatus = { filterStatus }
          changeFilterStatus = { newStatus => {changeFilterStatus(newStatus)}}
          clearAllCompleted = { () => {clearAllCompleted()}}
          />
      </section>
    )
  }
}
