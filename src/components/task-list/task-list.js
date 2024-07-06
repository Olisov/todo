import Task from '../task'
import './task-list.css'
// import NewInput from '../../shared/components/input'


// const todoData = [
//   {taskText: 'Completed task', className: 'completed', createdDate: (Date.now().getSeconds() - 17), id: 1},
//   {taskText: 'Editing task', className: 'editing', createdDate: (Date.now().getMinutes() - 5), id: 2},
//   {taskText: 'Active task', createdDate: (Date.now().getMinutes() - 5), id: 3},
// ]


export function TaskList({todos, completeTask, editTask, deleteTask}) {
  const todoTasks = todos.map(todoTask => {
    const {id, taskStatus, taskText } = todoTask
 
    if(taskStatus === 'editing' ) {
      return <li key={id} className='editing'>
        <input className='edit'
         defaultValue={taskText}
        //  onChange={editTask(id, 'new text')}
         ></input>
      </li>
    }

    return <li key={id} {...(taskStatus === 'completed' ? {'className': 'completed'} : {})}>
      <Task  { ...todoTask  }
      onComplete = {completeTask}
      onEdit = {editTask}
      onDelete = {deleteTask}/>
      {/* onDeleted = {() => {console.log('onDeleted')}}/> */}
    </li>
  })

  return ( 
    <ul className='todo-list'>
        { todoTasks }
    </ul>
    )
}
