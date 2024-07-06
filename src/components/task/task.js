import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';
// import NewInput from '../../shared/components/input';

// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true, includeSeconds: true })
//=> 'in 6 months'

export class Task extends Component {

    // state = {
    //     taskStatus: 'active'
    // }

    // onItemClick = () => {
    //     this.setState(lastState => {
    //         if (lastState.taskStatus !== 'completed') return { taskStatus: 'completed' }
    //         return { taskStatus: 'active' }
    //     })

    //     console.log('this.state.taskStatus', this.state.taskStatus)
    // }

    render() {
        // const { taskText, createdDate, taskStatus, id } = this.props;
        const { taskText, createdDate, taskStatus, id, onComplete, onEdit, onDelete } = this.props;

        return <div className="view">
            {/* <NewInput inputClass="toggle" type="checkbox" onClick={() => {console.log('checkbox')}} /> */}
            <input className='toggle' 
                    type="checkbox" 
                    checked= { taskStatus === 'completed' ? true : false }
                    // {...(taskStatus === 'completed' ? {'checked': true} : {})}
                    onChange={() => onComplete(id)}
                    ></input>
            <label onClick={() => onComplete(id)}>
                <span className="description">{taskText}</span>
                <span className="created">{
                    formatDistanceToNow(createdDate, { addSuffix: true, includeSeconds: true })
                }</span>
            </label>
            <button className="icon icon-edit" onClick={() => onEdit(id)}></button>
            <button className="icon icon-destroy" onClick={() => onDelete(id)}></button>
        </div>
    }
}



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
