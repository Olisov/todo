import { React, Component } from 'react'
import './new-task-form.css'
// import NewInput from '../../shared/components/input'

export default class NewTaskForm extends Component {

    state = {
        newTaskText: ''
    }

    inputTextChange = (evt) => {
        this.setState({newTaskText: evt.target.value})
    }

    onFormSubmit = evt => {
        evt.preventDefault()
        this.props.newTask(this.state.newTaskText)
        this.setState({newTaskText: ''})
    }

    render() {
        return <form onSubmit={this.onFormSubmit}>
                <input 
                    className='new-todo'
                    placeholder="What needs to be done?" 
                    onChange={this.inputTextChange}
                    value={this.state.newTaskText}
                    autoFocus></input>
                </form>
        }
}

