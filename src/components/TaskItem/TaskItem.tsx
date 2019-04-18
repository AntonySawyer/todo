import * as React from 'react';
import * as int from '../../interfaces';
import './TaskItem.css';

class TaskItem extends React.Component<int.ITask> {
    public render() {
        const liClassName: string = this.props.isDone ? 'archive' : 'active';
        return ( 
            <li className={liClassName} id={this.props.id}>
                <input type="checkbox" checked={this.props.isDone} id={this.props.id} 
                onChange={(e) => this.props.markAsDone(this.props.id)} />
                {this.props.task}
                <button className="taskBtn" onClick={(e) => this.props.deleteTask(this.props.id)} title="Delete task">×</button>
                <button className="taskBtn" onClick={(e) => this.props.editTask({id: this.props.id, task: this.props.task})} title="Edit task">✎</button>
            </li>
        );
      }
}

export default TaskItem;