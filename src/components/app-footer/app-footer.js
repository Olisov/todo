import TaskFilter from '../task-filter'
import './app-footer.css'


export function AppFooter({activeTasksNum}) {

  return <footer className="footer">
    <span className="todo-count">{activeTasksNum} items left</span>
    <TaskFilter />
    <button className="clear-completed">Clear completed</button>
  </footer>
}
