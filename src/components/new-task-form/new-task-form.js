import './new-task-form.css'
import NewInput from '../../shared/components/input'

export function NewTaskForm() {
    return <NewInput inputClass="new-todo" placeholder="What needs to be done?" autoFocus='true'/>
}

