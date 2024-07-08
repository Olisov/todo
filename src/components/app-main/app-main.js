import { Component } from 'react'
import TaskList from '../task-list'
import AppFooter from '../app-footer'

import './app-main.css'

export class AppMain extends Component {



  render() {
    const { todoDataArr, changeTaskStatus, editTask, deleteTask } = this.props

    return (
      <section className="main">
        <TaskList 
          todos = {todoDataArr} 
          changeTaskStatus = {(id, newStatus) => (changeTaskStatus(id, newStatus))}
          editTask = {id => (editTask(id))}
          deleteTask = {id => (deleteTask(id))}/>
        <AppFooter activeTasksNum = {todoDataArr.filter(todoTask => todoTask.taskStatus !== 'completed').length}/>
        {/* <AppFooter activeTasksNum = {2}/> */}
      </section>
    )
  }
}
