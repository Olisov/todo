import TaskFilter from '../task-filter'
import './app-footer.css'


export function AppFooter({todos}) {
  // const activeTasks = todos.filter(todoTask => { 
  //   console.log(todoTask)
  // })
  const activeTasks = todos.forEach(todoTask => { 
    console.log(todoTask)
  })



  return <footer className="footer">

  </footer>

}


<footer class="footer">
  <span class="todo-count">1 items left</span>
  {/* <ul class="filters">
    <li>
      <button class="selected">All</button>
    </li>
    <li>
      <button>Active</button>
    </li>
    <li>
      <button>Completed</button>
    </li>
  </ul> */}
  <button class="clear-completed">Clear completed</button>
</footer>