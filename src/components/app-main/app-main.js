import TaskList from '../task-list'
import AppFooter from '../app-footer'

import './app-main.css'

export function AppMain() {

  const todoData = [
    {taskText: 'Completed task', className: 'completed', createdDate: new Date(), id: 1},
    {taskText: 'Editing task', className: 'editing', createdDate: new Date(), id: 2},
    {taskText: 'Active task', createdDate: new Date(), id: 3},
  ]

  return (
    <section className="main">
      <TaskList  todos = {todoData}/>
      <AppFooter activeTasksNum = {todoData.filter(todoTask => todoTask.className !== 'completed').length}/>
    </section>
  )
}
