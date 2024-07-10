import { React } from 'react'
import PropTypes from 'prop-types'
import './task-filter.css'

function TaskFilter(props) {
  const { filterStatus, changeFilterStatus = () => {} } = props

  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          {...(filterStatus === 'all' ? { className: 'selected' } : {})}
          onClick={() => {
            changeFilterStatus('all')
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          {...(filterStatus === 'active' ? { className: 'selected' } : {})}
          onClick={() => {
            changeFilterStatus('active')
          }}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          {...(filterStatus === 'completed' ? { className: 'selected' } : {})}
          onClick={() => {
            changeFilterStatus('completed')
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TaskFilter.propTypes = {
  filterStatus: PropTypes.string,
  changeFilterStatus: PropTypes.func,
}

export default TaskFilter

// TaskFilter.defaultProps = {
//   filterStatus: 'all',
// }
