import * as React from 'react';
import * as int from '../../interfaces';
import './TaskItem.css';

class TaskItem extends React.Component<int.ITask> {
    deleteTask() {
        this.props.dispatch && this.props.dispatch({type: 'DELETE_TASK', payload: this.props.id});
    }

    markAsDone() {
        this.props.dispatch && this.props.dispatch({type: 'COMPLETE_TASK', payload: this.props.id});
    }

    editTask() {
        const currenTitle = this.props.task;
        this.props.fillInput && this.props.fillInput(currenTitle);
        this.props.dispatch && this.props.dispatch({type: 'DELETE_TASK', payload: this.props.id});
    }

    public render() {
        const liClassName: string = this.props.isDone ? 'archive' : 'active';
        return ( 
            <li className={liClassName} id={this.props.id}>
                <input type="checkbox" id={this.props.id} onChange={this.markAsDone.bind(this)} />
                {this.props.task}
                <button onClick={this.deleteTask.bind(this)}>del</button>
                <button onClick={this.editTask.bind(this)}>edit</button>
            </li>
        );
      }
}

export default TaskItem;