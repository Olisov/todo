import './new-task-form.css'
import NewInput from '../../shared/components/input'

export function NewTaskForm({placeholder}) {
    // return <input className="new-todo" placeholder={placeholder} autofocus></input>
    return <NewInput inputClass="new-todo" placeholder="What needs to be done?" autoFocus='true'/>
}

// NewInput({inputClass, placeholder, type, value, autofocus})

{/* <input class="new-todo" placeholder="What needs to be done?" autofocus></input> */}