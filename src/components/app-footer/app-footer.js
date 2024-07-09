import TaskFilter from '../task-filter'
import './app-footer.css'


export function AppFooter(props) {
  const { activeTodoCount, 
          filterStatus, 
          changeFilterStatus,
          clearAllCompleted,
        } = props

  return <footer className="footer">
    <span className="todo-count">{activeTodoCount} items left</span>
    <TaskFilter
      filterStatus = {filterStatus}
      changeFilterStatus = { newStatus => {changeFilterStatus(newStatus)}}
       />
    <button 
      className="clear-completed"
      onClick={() => {clearAllCompleted()}}
      >Clear completed</button>
  </footer>
}
