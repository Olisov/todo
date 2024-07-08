// import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';
// import NewInput from '../../shared/components/input';

// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true, includeSeconds: true })
//=> 'in 6 months'

 export function Task(props) {
    const { taskText, createdDate, taskStatus, id, onChangeStatus, onDelete } = props;

    return <div className="view">
        <input className='toggle' 
                type="checkbox" 
                checked= { taskStatus === 'completed' ? true : false }
                onChange={() => onChangeStatus(id)}
                ></input>
        <label onClick={() => onChangeStatus(id)}>
            <span className="description">{taskText}</span>
            <span className="created">{
                formatDistanceToNow(createdDate, { addSuffix: true, includeSeconds: true })
            }</span>
        </label>
        <button className="icon icon-edit" onClick={() => onChangeStatus(id, 'editing')}></button>
        <button className="icon icon-destroy" onClick={() => onDelete(id)}></button>
    </div>   
}


// export class Task extends Component {

//     render() {
//         const { taskText, createdDate, taskStatus, id, onComplete, onEdit, onDelete } = this.props;

//         return <div className="view">
//             <input className='toggle' 
//                     type="checkbox" 
//                     checked= { taskStatus === 'completed' ? true : false }
//                     onChange={() => onComplete(id)}
//                     ></input>
//             <label onClick={() => onComplete(id)}>
//                 <span className="description">{taskText}</span>
//                 <span className="created">{
//                     formatDistanceToNow(createdDate, { addSuffix: true, includeSeconds: true })
//                 }</span>
//             </label>
//             <button className="icon icon-edit" onClick={() => onEdit(id)}></button>
//             <button className="icon icon-destroy" onClick={() => onDelete(id)}></button>
//         </div>
//     }
// }



// export function TaskFunc({taskText, createdDate}) {
//     return <div className="view">
//         <NewInput inputClass="toggle" type="checkbox" />
//         <label>
//             <span className="description">{taskText}</span>
//             <span className="created">{
//                 formatDistanceToNow(createdDate, { addSuffix: true, includeSeconds: true })
//             }</span>
//         </label>
//         <button className="icon icon-edit"></button>
//         <button className="icon icon-destroy"></button>
//     </div>
// }
