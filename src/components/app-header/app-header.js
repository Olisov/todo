import './app-header.css'
import NewTaskForm from '../new-task-form'


export function AppHeader(props) {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm newTask = {text => {props.newTask(text)}}/>
        </header>
    )
}


