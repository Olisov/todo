import { React } from 'react'
import './task-filter.css'

function TaskFilter(props) {
  const { filterStatus, 
          changeFilterStatus = () => {} } = props

  return <ul className="filters">
    <li>
      <button 
        {...(filterStatus === 'all' ? {className: "selected"}: {})}
        onClick={() => {changeFilterStatus('all')}}
        >All</button>
    </li>
    <li>
      <button
        {...(filterStatus === 'active' ? {className: "selected"}: {})}
        onClick={() => {changeFilterStatus('active')}}
        >Active</button>
    </li>
    <li>
      <button
        {...(filterStatus === 'completed' ? {className: "selected"}: {})}
        onClick={() => {changeFilterStatus('completed')}}
        >Completed</button>
    </li>
  </ul>
}

export default TaskFilter

// TaskFilter.defaultProps = {
//   filterStatus: 'all',
// }
