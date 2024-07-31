import { React } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true, includeSeconds: true })
//= > 'in 6 months'

function Task(props) {
  const {
    taskText,
    timerMin,
    timerSec,
    timeRunning,
    createdDate,
    taskStatus,
    id,
    onChangeStatus,
    onDelete,
    timerPlay,
    timerPause,
  } = props

  const timerControlBtn = timeRunning ? (
    <button aria-label="Pause button" type="button" className="icon icon-pause" onClick={() => timerPause(id)} />
  ) : (
    <button aria-label="Play button" type="button" className="icon icon-play" onClick={() => timerPlay(id)} />
  )

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={taskStatus === 'completed'}
        onChange={() => onChangeStatus(id)}
        id={`task-${id}`}
      />
      <label htmlFor={`task-${id}`}>
        <span className="title">{taskText}</span>
        <span className="description">
          {timerControlBtn}
          {timerMin}:{timerSec}
        </span>
        <span className="description">
          {formatDistanceToNow(createdDate, { addSuffix: true, includeSeconds: true })}
        </span>
      </label>
      <button
        type="button"
        aria-label="Editing button"
        className="icon icon-edit"
        onClick={() => onChangeStatus(id, 'editing')}
      />
      <button type="button" aria-label="Delete button" className="icon icon-destroy" onClick={() => onDelete(id)} />
    </div>
  )
}

Task.propTypes = {
  taskText: PropTypes.string,
  taskStatus: PropTypes.string,
  id: PropTypes.number,
  onChangeStatus: PropTypes.func,
  onDelete: PropTypes.func,
  timerPlay: PropTypes.func,
  timerPause: PropTypes.func,
  createdDate: (props, propName, componentName) => {
    if (props[propName] instanceof Date) return null
    return new TypeError(`${componentName}: ${propName} must be a Date`)
  },
}

export default Task
