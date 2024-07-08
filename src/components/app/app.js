import { Component } from 'react';
import AppHeader from '../app-header'
import AppMain from '../app-main'
import './app.css'




export class App extends Component {

    maxId = 100;

    state = {
      todoData: [
        {taskText: 'Completed task', taskStatus: 'completed', createdDate: new Date(), id: 1},
        {taskText: 'Editing task', taskStatus: 'editing', createdDate: new Date(), id: 2},
        // {taskText: 'Active task', taskStatus: 'active', createdDate: new Date(), id: 3},
        this.createTaskItem('Active task'),
      ]
    } 

    createTaskItem(text) {
        return {taskText: text, taskStatus: 'active', createdDate: new Date(), id: this.maxId++}
      }
    
    addItem = text => {
        this.setState(lastState => {
            return {todoData: [...lastState.todoData, this.createTaskItem(text)]}
        })
    }

    changeItemStatus = (id, newStatus) => {

        this.setState(lastState => {
            const { todoData } = lastState;
            const idx = todoData.findIndex(el => el.id === id)

            const editedTask = { ...todoData[idx] }

            if (newStatus) editedTask.taskStatus = newStatus
            else editedTask.taskStatus = todoData[idx].taskStatus !== 'completed' ? 'completed' : 'active'
            // console.log('editedTask', editedTask)

            return {todoData: [
            ...todoData.slice(0, idx),
            editedTask,
            ...todoData.slice(idx + 1),
            ]}
        })
    }
    
    editItem = (evt) => {
        evt.preventDefault()
        const dataInput = evt.target['editingTaskInput']
        const id = +dataInput.dataset['id']


        this.setState(lastState => {
            const { todoData } = lastState;
            const idx = todoData.findIndex(el => el.id === id)

            const editedTask = {
            ...todoData[idx],
            taskStatus: 'active',
            taskText: dataInput.value,
            }

            return {todoData: [
            ...todoData.slice(0, idx),
            editedTask,
            ...todoData.slice(idx + 1),
            ]}
        })
    }

    
    deleteItem = id => {
        this.setState(lastState => {
            const { todoData } = lastState;
            const idx = todoData.findIndex(el => el.id === id)

            return {todoData: [ 
            ...todoData.slice(0, idx),  
            ...todoData.slice(idx + 1)
            ]}
        })
    }
    
    render() {
        return (
            <section className="todoapp">
                <AppHeader />
                <AppMain 
                    todoDataArr={this.state.todoData} 
                    changeTaskStatus = {this.changeItemStatus}
                    editTask = {this.editItem}
                    deleteTask = {this.deleteItem}
                />
            </section>
        )
    }
}


// <header class="header">
// <h1>todos</h1>
// <input class="new-todo" placeholder="What needs to be done?" autofocus>
// </header>
// <section class="main">
// <ul class="todo-list">
//   <li class="completed">
//     <div class="view">
//       <input class="toggle" type="checkbox">
//       <label>
//         <span class="description">Completed task</span>
//         <span class="created">created 17 seconds ago</span>
//       </label>
//       <button class="icon icon-edit"></button>
//       <button class="icon icon-destroy"></button>
//     </div>
//   </li>
//   <li class="editing">
//     <div class="view">
//       <input class="toggle" type="checkbox">
//       <label>
//         <span class="description">Editing task</span>
//         <span class="created">created 5 minutes ago</span>
//       </label>
//       <button class="icon icon-edit"></button>
//       <button class="icon icon-destroy"></button>
//     </div>
//     <input type="text" class="edit" value="Editing task">
//   </li>
//   <li>
//     <div class="view">
//       <input class="toggle" type="checkbox">
//       <label>
//         <span class="description">Active task</span>
//         <span class="created">created 5 minutes ago</span>
//       </label>
//       <button class="icon icon-edit"></button>
//       <button class="icon icon-destroy"></button>
//     </div>
//   </li>
// </ul>
// <footer class="footer">
//   <span class="todo-count">1 items left</span>
//   <ul class="filters">
//     <li>
//       <button class="selected">All</button>
//     </li>
//     <li>
//       <button>Active</button>
//     </li>
//     <li>
//       <button>Completed</button>
//     </li>
//   </ul>
//   <button class="clear-completed">Clear completed</button>
// </footer>
// </section>