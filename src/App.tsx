import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as int from './interfaces';
import TaskItem from './components/TaskItem/TaskItem';
import generateNewTask from './utils/generateTask';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


class App extends Component<int.IAppProps> {
  state = {
    isHidden: false
  }

  taskInput!: HTMLInputElement;
  addTask() {
    const newTask = this.taskInput.value;
    this.fillInput('');
    newTask && this.props.dispatch({type: 'ADD_TASK', payload: generateNewTask(newTask)});
  }

  deleteCompleted() {
    this.props.dispatch({type: 'DELETE_MARKED', payload: ''});
  }

  sortCompleted() {
    this.props.dispatch({type: 'SORT_COMPLETED', payload: ''});
  }

  onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      this.addTask();
    }
  }

  hideDone() {
    const targets = document.querySelectorAll('.archive');
    if (this.state.isHidden) {
      targets.forEach(el => {
        el.classList.remove('isHidden');
      });
    } else {
      targets.forEach(el => {
        el.classList.add('isHidden');
      }); 
    }
    this.state.isHidden = !this.state.isHidden;
  }

  fillInput = (content: string) => {this.taskInput.value = content; this.taskInput.focus();};

  render() {
    return (
      <div className="App">
        <Header />
        <div className="inputGroup">
          <label className="taskInputLabel">Enter new task</label>
          <input type="text" className="taskInput" placeholder="Enter new task" 
                  ref={(input: HTMLInputElement) => {this.taskInput = input}} 
                  onKeyPress={this.onKeyDown} />
          <button onClick={this.addTask.bind(this)}>Add</button>
          <button onClick={this.deleteCompleted.bind(this)}>del mark</button>
          <button onClick={this.sortCompleted.bind(this)}>sort done</button>     
          <button onClick={this.hideDone.bind(this)}>{this.state.isHidden ? 'show done' : 'hide done'}</button>
        </div>
        <ul>
          {this.props.tasks.map(el =>
              <TaskItem key={el.id}
                id={el.id}
                isDone={el.isDone}
                task={el.task} 
                dispatch={this.props.dispatch} fillInput={this.fillInput.bind(this.taskInput)} />
            )}
        </ul>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: int.ITask[]) => ({
  tasks: state
});


export default connect(mapStateToProps)(App);
