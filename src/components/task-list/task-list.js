import Task from '../task'
import './task-list.css'


export function TaskList(props) {
  const { todos, changeTaskStatus, editTask, deleteTask } = props

  const todoTasks = todos.map(todoTask => {
    const {id, taskStatus, taskText } = todoTask
  
    if(taskStatus === 'editing' ) {
      return <li key={id} className='editing'>
        <form onSubmit={ editTask }>
          <input name='editingTaskInput' className='edit'
          defaultValue={taskText}
          data-id={id}
          ></input>
        </form>
      </li>
    }

    return <li key={id} {...(taskStatus === 'completed' ? {'className': 'completed'} : {})}>
      <Task  { ...todoTask  }
      onChangeStatus = {(id, newStatus) => (changeTaskStatus(id, newStatus))}
      onDelete = {id => (deleteTask(id))}/>

    </li>
  })

  return ( 
    <ul className='todo-list'>
        { todoTasks }
    </ul>
    )
}
