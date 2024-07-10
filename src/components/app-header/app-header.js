import { React } from 'react'
import './app-header.css'
import NewTaskForm from '../new-task-form'


function AppHeader(props) {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm newTask = {text => {props.newTask(text)}}/>
        </header>
    )
}

export default AppHeader
