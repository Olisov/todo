import { Component } from 'react';
import AppHeader from '../app-header'
import AppMain from '../app-main'
import './app.css'




export class App extends Component {

    maxId = 100;

    state = {
      todoData: [
        // {taskText: 'Completed task', taskStatus: 'completed', createdDate: new Date(), id: 1},
        // {taskText: 'Editing task', taskStatus: 'editing', createdDate: new Date(), id: 2},
        // {taskText: 'Active task', taskStatus: 'active', createdDate: new Date(), id: 3},
        // this.createTaskItem('Active task'),
      ],
      filterStatus: 'all',  /// all, completed, active
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
    
    filteredTodos = () => {
        const { filterStatus, todoData } = this.state

        if (filterStatus !== 'all') return todoData.filter(todo => todo.taskStatus === filterStatus )
        else return todoData
    }

    changeFilterStatus = newStatus => {
        this.setState({filterStatus: newStatus})
    }

    clearAllCompleted = () => {
        this.setState(lastState => {
            return {todoData: lastState.todoData.filter(todo => todo.taskStatus !== 'completed' )}
        })
    }

    render() {
        return (
            <section className="todoapp">
                <AppHeader newTask = {this.addItem} />
                <AppMain 
                    todoDataArr={this.filteredTodos()} 
                    activeTaskCount = {this.state.todoData.filter(todo => todo.taskStatus !== 'completed' ).length}
                    changeTaskStatus = {this.changeItemStatus}
                    editTask = {this.editItem}
                    deleteTask = {this.deleteItem}
                    filterStatus = {this.state.filterStatus}
                    changeFilterStatus = {this.changeFilterStatus}
                    clearAllCompleted = { this.clearAllCompleted }
                />
            </section>
        )
    }
}

