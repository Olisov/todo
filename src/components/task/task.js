import { React } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

function Task(props) {
  const { taskText, timerMin, timerSec, timeRunning, createdDate, taskStatus, id, onDelete, updateTask } = props

  const timerControlBtn = timeRunning ? (
    <button
      aria-label="Pause button"
      type="button"
      className="icon icon-pause"
      onClick={() => updateTask(id, { timeRunning: false })}
    />
  ) : (
    <button
      aria-label="Play button"
      type="button"
      className="icon icon-play"
      onClick={() => updateTask(id, { timeRunning: true })}
    />
  )

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={taskStatus === 'completed'}
        onChange={(evt) => {
          if (evt.target.checked)
            updateTask(id, { taskStatus: 'completed', timeRunning: false, timerMin: 0, timerSec: 0 })
          else updateTask(id, { taskStatus: 'active' })
        }}
        id={`task-${id}`}
      />
      <label htmlFor={`task-${id}`}>
        <span className="title">{taskText}</span>
        <span className="description">
          {timerControlBtn}
          {timerMin}:{timerSec}
        </span>
        <span className="description">
          {formatDistanceToNow(new Date(createdDate), { addSuffix: true, includeSeconds: true })}
        </span>
      </label>
      <button
        type="button"
        aria-label="Editing button"
        className="icon icon-edit"
        onClick={() => updateTask(id, { taskStatus: 'editing', timeRunning: false })}
      />
      <button type="button" aria-label="Delete button" className="icon icon-destroy" onClick={() => onDelete(id)} />
    </div>
  )
}

Task.propTypes = {
  taskText: PropTypes.string,
  taskStatus: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func,
  updateTask: PropTypes.func,
  createdDate: PropTypes.string,
}

export default Task
