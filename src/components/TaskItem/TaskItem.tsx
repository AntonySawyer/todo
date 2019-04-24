import * as React from 'react';
import * as int from '../../interfaces';
import './TaskItem.css';

class TaskItem extends React.Component<int.ITask> {
    public render() {
        const liClassName: string = (this.props.isDone ? 'archive' : 'active').concat(this.props.favorite ? ' isFavorite' : '');
        return ( 
            <li className={liClassName} id={this.props.id}>
                <label className="checkContainer">
                    <input type="checkbox" checked={this.props.isDone} id={this.props.id} 
                            onChange={(e) => this.props.markAsDone(this.props.id)} />
                    <span className="checkmark" />
                </label>
                <div className="taskBox">
                    <div className="taskInfoGroup">
                        <span className="taskColorMark" style={{'background': this.props.color}}>category</span>
                        <span className="creationDate">{this.props.creationDate}</span>
                        <input type="checkbox" checked={this.props.favorite} id={this.props.id} 
                                className="favorite" onChange={(e) => this.props.changeStar(this.props.id)} />                        
                    </div>
                    <span className="taskTitle">{this.props.task}</span>                
                </div>
                <div className="taskControl">
                    <button className="taskBtn" onClick={(e) => this.props.deleteTask(this.props.id)} 
                            title="Delete task">×</button>
                    <button className="taskBtn" onClick={(e) => this.props.editTask({id: this.props.id, task: this.props.task, color: this.props.color})}
                    title="Edit task">✍</button>
                </div>
            </li>
        );
    }
}

export default TaskItem;