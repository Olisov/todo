import TaskFilter from '../task-filter'
import './app-footer.css'

import PropTypes from 'prop-types'


export function AppFooter(props) {
  const { activeTaskCount, 
          filterStatus, 
          changeFilterStatus,
          clearAllCompleted,
        } = props

  return <footer className="footer">
    <span className="todo-count">{activeTaskCount} items left</span>
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

AppFooter.propTypes = {
  activeTaskCount: PropTypes.number
}
