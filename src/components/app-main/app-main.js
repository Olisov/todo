import TaskList from '../task-list'
import AppFooter from '../app-footer'

import './app-main.css'

export function AppMain() {

  // const todoData = [
  //   {label: 'Drink coffee', important: false, id: 1},
  //   {label: 'Make Awesome App', important: true, id: 2},
  //   {label: 'Have a lunch', important: false, id: 3},
  // ]

  const todoData = [
    {taskText: 'Completed task', className: 'completed', createdDate: new Date(), id: 1},
    {taskText: 'Editing task', className: 'editing', createdDate: new Date(), id: 2},
    {taskText: 'Active task', createdDate: new Date(), id: 3},
  ]


  return (
    <section className="main">
      <TaskList  todos = {todoData}/>
      <AppFooter todos = {todoData}/>
    </section>

  )

}



<section class="main">

<footer class="footer">
  <span class="todo-count">1 items left</span>
  <ul class="filters">
    <li>
      <button class="selected">All</button>
    </li>
    <li>
      <button>Active</button>
    </li>
    <li>
      <button>Completed</button>
    </li>
  </ul>
  <button class="clear-completed">Clear completed</button>
</footer>
</section>