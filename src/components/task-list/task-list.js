import Task from '../task'
import './task-list.css'
import NewInput from '../../shared/components/input'


// const todoData = [
//   {taskText: 'Completed task', className: 'completed', createdDate: (Date.now().getSeconds() - 17), id: 1},
//   {taskText: 'Editing task', className: 'editing', createdDate: (Date.now().getMinutes() - 5), id: 2},
//   {taskText: 'Active task', createdDate: (Date.now().getMinutes() - 5), id: 3},
// ]


export function TaskList({todos}) {
  const todoTasks = todos.map(todoTask => {
    const {id, className, ...todoData} = todoTask

    if(className === 'editing' ) {
      return <li key={id} {...(className ? {'className': className} : {})}>
        <Task  { ...todoData }/>
        <NewInput inputClass="edit" value={todoData.taskText} />
      </li>
    }

    return <li key={id} {...(className ? {'className': className} : {})}>
      <Task  { ...todoData }/>
    </li>
  })

  return ( 
    <ul className='todo-list'>
        { todoTasks }
    </ul>
    )
}
