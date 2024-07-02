import './app-header.css'
import NewTaskForm from '../new-task-form'


export function AppHeader() {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm/>
        </header>
    )
}


{/* <header class="header">
<h1>todos</h1>
// <input class="new-todo" placeholder="What needs to be done?" autofocus>
</header> */}
