import { React, useState, useEffect } from 'react'

import TaskList from '../task-list'
import AppFooter from '../app-footer'
import AppHeader from '../app-header'
import './app.css'

function createTaskItem(data, maxId) {
  const { taskText, timerMin, timerSec } = data
  return {
    taskText,
    timerMin,
    timerSec,
    timeRunning: false,
    taskStatus: 'active',
    createdDate: new Date().toString(),
    id: maxId,
  }
}

function App() {
  const [appState, setAppState] = useState({
    maxId: 100,
    filterStatus: 'all', /// all, completed, active
    intervalId: null,
  })
  const { maxId, filterStatus, intervalId } = appState

  const [todoDataArr, setTodoDataArr] = useState([
    // {taskText: 'Completed task', taskStatus: 'completed', createdDate: 'Mon Aug 05 2024 12:05:05 GMT+0300', id: 1},
    // {taskText: 'Editing task', taskStatus: 'editing', createdDate: 'Mon Aug 05 2024 12:05:05 GMT+0300', id: 2},
    // {taskText: 'Active task', taskStatus: 'active', createdDate: 'Mon Aug 05 2024 12:05:05 GMT+0300', id: 3},
  ])

  const updateTaskTimer = (id, stepSec = 1) => {
    setTodoDataArr((lastTodoDataArr) => {
      const idx = lastTodoDataArr.findIndex((el) => el.id === id)
      const updatedTask = { ...lastTodoDataArr[idx] }

      if (updatedTask.timerSec >= stepSec) updatedTask.timerSec -= stepSec
      else if (updatedTask.timerMin > 0) {
        updatedTask.timerMin -= 1
        updatedTask.timerSec += 60 - stepSec
      } else {
        updatedTask.timerMin = 0
        updatedTask.timerSec = 0
        updatedTask.timeRunning = false
      }

      return [...lastTodoDataArr.slice(0, idx), updatedTask, ...lastTodoDataArr.slice(idx + 1)]
    })
  }

  function startTimers() {
    setAppState((lastAppState) => {
      return {
        ...lastAppState,
        intervalId: setInterval(() => {
          todoDataArr.forEach((todo) => {
            if (todo.timeRunning) updateTaskTimer(todo.id)
          })
        }, 1000),
      }
    })
  }

  function stopTimers() {
    setAppState((lastAppState) => {
      clearInterval(lastAppState.intervalId)
      return { ...lastAppState, intervalId: null }
    })
  }

  useEffect(() => {
    const timerOn = todoDataArr.filter((data) => data.timeRunning === true).length > 0

    if (!intervalId && timerOn) startTimers()
    else if (intervalId && !timerOn) stopTimers()
    return () => {
      if (intervalId) stopTimers()
    }
  }, [todoDataArr, appState])

  const addTask = (newTodoData) => {
    setTodoDataArr((lastTodoDataArr) => {
      return [...lastTodoDataArr, createTaskItem(newTodoData, maxId)]
    })
    setAppState((lastState) => {
      return { ...lastState, maxId: lastState.maxId + 1 }
    })
  }

  const updateTask = (id, newParams) => {
    setTodoDataArr((lastTodoDataArr) => {
      const idx = lastTodoDataArr.findIndex((el) => el.id === id)
      const updatedTask = { ...lastTodoDataArr[idx], ...newParams }

      return [...lastTodoDataArr.slice(0, idx), updatedTask, ...lastTodoDataArr.slice(idx + 1)]
    })
  }

  const deleteTask = (id) => {
    setTodoDataArr((lastTodoDataArr) => {
      const idx = lastTodoDataArr.findIndex((el) => el.id === id)
      return [...lastTodoDataArr.slice(0, idx), ...lastTodoDataArr.slice(idx + 1)]
    })
  }

  const filteredTodos = () => {
    if (filterStatus !== 'all') return todoDataArr.filter((todo) => todo.taskStatus === filterStatus)
    return todoDataArr
  }

  const changeFilterStatus = (newStatus) => {
    setAppState((lastAppState) => {
      return { ...lastAppState, filterStatus: newStatus }
    })
  }

  const clearAllCompleted = () => {
    setTodoDataArr((lastTodoDataArr) => {
      return lastTodoDataArr.filter((todo) => todo.taskStatus !== 'completed')
    })
  }

  return (
    <section className="todoapp">
      <AppHeader newTask={addTask} />

      <section className="main">
        <TaskList todos={filteredTodos()} updateTask={updateTask} deleteTask={deleteTask} />
        <AppFooter
          activeTaskCount={todoDataArr.filter((todo) => todo.taskStatus !== 'completed').length}
          filterStatus={filterStatus}
          changeFilterStatus={changeFilterStatus}
          clearAllCompleted={clearAllCompleted}
        />
      </section>
    </section>
  )
}

export default App
