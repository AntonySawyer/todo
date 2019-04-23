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
  sortByDate() {
    this.props.dispatch({type: 'SORT_BY_DATE', payload: ''});
  }

  onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      this.addTask();
    }
  }

  hideTarget(toHide: string) {
    const archive = document.querySelectorAll('.archive');
    const active = document.querySelectorAll('.active');
    if (toHide === 'archive') {
      active.forEach(el => {el.classList.remove('isHidden')});
      archive.forEach(el => {el.classList.add('isHidden')});
    } else if (toHide === 'active') {
      active.forEach(el => {el.classList.add('isHidden')});
      archive.forEach(el => {el.classList.remove('isHidden')});
    } else {
      active.forEach(el => {el.classList.remove('isHidden')});
      archive.forEach(el => {el.classList.remove('isHidden')});
    }
    this.state.isHidden = !this.state.isHidden;
  }

  fillInput = (content: string) => {this.taskInput.value = content; this.taskInput.focus();};

  deleteTask(id: string) {
    this.props.dispatch({type: 'DELETE_TASK', payload: id});
  }

  markAsDone(id: string) {
    this.props.dispatch({type: 'COMPLETE_TASK', payload: id});
  }

  editTask(target: {id: string, task: string}) {
    const currenTitle = target.task;
    this.fillInput(currenTitle);
    this.props.dispatch({type: 'DELETE_TASK', payload: target.id});
  }

  inputGroup () {
    return (
      <div className="inputGroup">
        <input type="text" className="taskInput" placeholder="Enter new task ⏎" 
                required pattern="\S+"
                ref={(input: HTMLInputElement) => {this.taskInput = input}} 
                onKeyPress={this.onKeyDown} />
        <button className="taskInputBtn" title="Add new task"
                onClick={this.addTask.bind(this)}>Add</button>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Header inputGroup={this.inputGroup.bind(this)} />
        <main>

          <ul>
            {this.props.tasks.map(el =>
                <TaskItem key={el.id}
                  id={el.id}
                  isDone={el.isDone}
                  task={el.task} 
                  creationDate={el.creationDate}
                  deleteTask={this.deleteTask.bind(this)}
                  editTask={this.editTask.bind(this)}
                  markAsDone={this.markAsDone.bind(this)} />
              )}
          </ul>
        </main>
        <Footer total={this.props.tasks.length} 
                arhive={this.props.tasks.filter(el => el.isDone).length} 
                filter={this.hideTarget.bind(this)} 
                deleteCompleted={this.deleteCompleted.bind(this)}
                sortCompleted={this.sortCompleted.bind(this)} 
                sortByDate={this.sortByDate.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = (state: int.ITask[]) => ({
  tasks: state
});


export default connect(mapStateToProps)(App);
