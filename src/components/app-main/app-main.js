import { Component } from 'react'
import TaskList from '../task-list'
import AppFooter from '../app-footer'

import './app-main.css'

export class AppMain extends Component {
  state = {
    todoData: [
      {taskText: 'Completed task', taskStatus: 'completed', createdDate: new Date(), id: 1},
      {taskText: 'Editing task', taskStatus: 'editing', createdDate: new Date(), id: 2},
      {taskText: 'Active task', taskStatus: 'active', createdDate: new Date(), id: 3},
    ]
  } 

  completeItem = (id) => {
    this.setState(lastState => {
      // const { todoData } = lastState;
      const newArr = [ ...lastState.todoData ]
      const idx = newArr.findIndex(el => el.id === id)

      if (newArr[idx].taskStatus === 'completed' ) newArr[idx].taskStatus = 'active'
      else if (newArr[idx].taskStatus !== 'completed' ) newArr[idx].taskStatus = 'completed'

      return {todoData: newArr}
    })
  }

  editItem = (id) => {
    console.log('editTask', id)
  }

  deleteItem = (id) => {

    this.setState(lastState => {
      const { todoData } = lastState;

      const idx = todoData.findIndex(el => el.id === id)
      const newArr = [ 
        ...todoData.slice(0, idx),  
        ...todoData.slice(idx + 1)
      ]

      return {todoData: newArr}
    })
  }


  render() {
    const { todoData } = this.state

    return (
      <section className="main">
        <TaskList 
          todos = {todoData} 
          completeTask = {this.completeItem}
          editTask = {this.editItem}
          deleteTask = {this.deleteItem}/>
        <AppFooter activeTasksNum = {todoData.filter(todoTask => todoTask.taskStatus !== 'completed').length}/>
      </section>
    )
  }
}
