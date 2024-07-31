import { React, Component } from 'react'

import TaskList from '../task-list'
import AppFooter from '../app-footer'
import AppHeader from '../app-header'
import './app.css'

export default class App extends Component {
  maxId = 100

  constructor(props) {
    super(props)

    this.state = {
      todoData: [
        // {taskText: 'Completed task', taskStatus: 'completed', createdDate: new Date(), id: 1},
        // {taskText: 'Editing task', taskStatus: 'editing', createdDate: new Date(), id: 2},
        // {taskText: 'Active task', taskStatus: 'active', createdDate: new Date(), id: 3},
        // this.createTaskItem('Active task'),
      ],
      filterStatus: 'all', /// all, completed, active
      intervalId: null,
    }
  }

  componentDidUpdate() {
    const { todoData, intervalId } = this.state
    const timerOn = todoData.filter((data) => data.timeRunning === true).length > 0

    if (!intervalId && timerOn) this.startTimers()
    else if (intervalId && !timerOn) this.stopTimers()
  }

  componentWillUnmount() {
    this.stopTimers()
  }

  addItem = (data) => {
    this.setState((lastState) => ({ todoData: [...lastState.todoData, this.createTaskItem(data)] }))
  }

  changeItemStatus = (id, newStatus) => {
    if (newStatus) this.timerPause(id)
    this.setState((lastState) => {
      const { todoData } = lastState
      const idx = todoData.findIndex((el) => el.id === id)

      const editedTask = { ...todoData[idx] }

      if (newStatus) editedTask.taskStatus = newStatus
      else if (todoData[idx].taskStatus !== 'completed') {
        editedTask.taskStatus = 'completed'
        editedTask.timerMin = 0
        editedTask.timerSec = 0
      } else {
        editedTask.taskStatus = 'active'
      }
      editedTask.timeRunning = false

      return {
        todoData: [...todoData.slice(0, idx), editedTask, ...todoData.slice(idx + 1)],
      }
    })
  }

  editItem = (evt) => {
    evt.preventDefault()
    const dataInput = evt.target.editingTaskInput
    const id = +dataInput.dataset.id

    this.setState((lastState) => {
      const { todoData } = lastState
      const idx = todoData.findIndex((el) => el.id === id)

      const editedTask = {
        ...todoData[idx],
        taskStatus: 'active',
        taskText: dataInput.value,
      }

      return {
        todoData: [...todoData.slice(0, idx), editedTask, ...todoData.slice(idx + 1)],
      }
    })
  }

  deleteItem = (id) => {
    this.timerPause(id)
    this.setState((lastState) => {
      const { todoData } = lastState
      const idx = todoData.findIndex((el) => el.id === id)

      return {
        todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)],
      }
    })
  }

  filteredTodos = () => {
    const { filterStatus, todoData } = this.state

    if (filterStatus !== 'all') return todoData.filter((todo) => todo.taskStatus === filterStatus)
    return todoData
  }

  changeFilterStatus = (newStatus) => {
    this.setState({ filterStatus: newStatus })
  }

  clearAllCompleted = () => {
    this.setState((lastState) => ({ todoData: lastState.todoData.filter((todo) => todo.taskStatus !== 'completed') }))
  }

  startTimers = () => {
    this.setState({
      intervalId: setInterval(() => {
        const { todoData } = this.state

        todoData.forEach((todo) => {
          if (todo.timeRunning) this.updateTaskTimer(todo.id)
        })
      }, 1000),
    })
  }

  stopTimers = () => {
    const { intervalId } = this.state
    clearInterval(intervalId)
    this.setState({ intervalId: null })
  }

  timerPlay = (id) => {
    this.setState((lastState) => {
      const { todoData } = lastState
      const idx = todoData.findIndex((el) => el.id === id)

      const editedTask = { ...todoData[idx] }

      if (+editedTask.timerMin + +editedTask.timerSec > 0) editedTask.timeRunning = true
      else editedTask.timeRunning = false

      return {
        todoData: [...todoData.slice(0, idx), editedTask, ...todoData.slice(idx + 1)],
      }
    })
  }

  timerPause = (id) => {
    this.setState((lastState) => {
      const { todoData } = lastState
      const idx = todoData.findIndex((el) => el.id === id)

      const editedTask = { ...todoData[idx] }
      editedTask.timeRunning = false

      return {
        todoData: [...todoData.slice(0, idx), editedTask, ...todoData.slice(idx + 1)],
      }
    })
  }

  updateTaskTimer = (id, stepSec = 1) => {
    this.setState((lastState) => {
      const { todoData } = lastState
      const idx = todoData.findIndex((el) => el.id === id)

      const editedTask = structuredClone(todoData[idx])
      if (editedTask.timerSec >= stepSec) editedTask.timerSec -= stepSec
      else if (editedTask.timerMin > 0) {
        editedTask.timerMin -= 1
        editedTask.timerSec += 60 - stepSec
      }

      return {
        todoData: [...todoData.slice(0, idx), editedTask, ...todoData.slice(idx + 1)],
      }
    })
  }

  createTaskItem(data) {
    const { taskText, timerMin, timerSec } = data
    this.maxId += 1
    return {
      taskText,
      timerMin,
      timerSec,
      timeRunning: false,
      taskStatus: 'active',
      createdDate: new Date(),
      id: this.maxId,
    }
  }

  render() {
    const { todoData, filterStatus } = this.state

    return (
      <section className="todoapp">
        <AppHeader newTask={this.addItem} />

        <section className="main">
          <TaskList
            todos={this.filteredTodos()}
            changeTaskStatus={this.changeItemStatus}
            editTask={this.editItem}
            deleteTask={this.deleteItem}
            timerPlay={this.timerPlay}
            timerPause={this.timerPause}
          />
          <AppFooter
            activeTaskCount={todoData.filter((todo) => todo.taskStatus !== 'completed').length}
            filterStatus={filterStatus}
            changeFilterStatus={this.changeFilterStatus}
            clearAllCompleted={this.clearAllCompleted}
          />
        </section>
      </section>
    )
  }
}
