import { formatDistanceToNow } from 'date-fns'
import './task.css'
import NewInput from '../../shared/components/input'

// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true, includeSeconds: true })
//=> 'in 6 months'

// const todoData = [
//   {taskText: 'Completed task', createdDate: (Date.now().getSeconds() - 17)},
//   {taskText: 'Editing task', createdDate: (Date.now().getMinutes() - 5)},
//   {taskText: 'Active task', createdDate: (Date.now().getMinutes() - 5)},
// ]

export function Task({taskText, createdDate}) {
    return <div className="view">
        <NewInput inputClass="toggle" type="checkbox" />
        <label>
            <span className="description">{taskText}</span>
            <span className="created">{
                formatDistanceToNow(createdDate, { addSuffix: true, includeSeconds: true })
            }</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
    </div>

}
