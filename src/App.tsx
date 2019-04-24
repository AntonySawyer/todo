import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as int from './interfaces';
import Sidebar from './components/Sidebar/Sidebar';
import TaskItem from './components/TaskItem/TaskItem';
import generateNewTask from './utils/generateTask';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


class App extends Component<int.IAppProps> {
  state = {
    isHidden: false
  }

  taskInput!: HTMLInputElement;
  colorInput!: HTMLInputElement;

  addTask() {
    const newTask = this.taskInput.value;
    const newColor = this.colorInput.value;
    this.fillInput(['', newColor]);
    newTask && this.props.dispatch({type: 'ADD_TASK', payload: generateNewTask([newTask, newColor])});
  }

  changeStar(id: string) {
    this.props.dispatch({type: 'CHANGE_STAR', payload: id});
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
    } else if (toHide === 'notFavorite') {
      active.forEach(el => {el.classList.contains('isFavorite') ? el.classList.remove('isHidden') : el.classList.add('isHidden')});
      archive.forEach(el => {el.classList.contains('isFavorite') ? el.classList.remove('isHidden') : el.classList.add('isHidden')});
    } else {
    active.forEach(el => {el.classList.remove('isHidden')});
    archive.forEach(el => {el.classList.remove('isHidden')});
  }
  this.state.isHidden = !this.state.isHidden;
  }

  fillInput = (content: string[]) => {
    this.taskInput.value = content[0];
    this.taskInput.focus();
    this.colorInput.value = content[1] || "#62bfbf";
  };

  deleteTask(id: string) {
    this.props.dispatch({type: 'DELETE_TASK', payload: id});
  }

  markAsDone(id: string) {
    this.props.dispatch({type: 'COMPLETE_TASK', payload: id});
  }

  editTask(target: int.editTask) {
    this.fillInput([target.task, target.color]);
    this.props.dispatch({type: 'DELETE_TASK', payload: target.id});
  }

  inputGroup () {
    return (
      <div className="inputGroup">
        <input type="text" className="taskInput" placeholder="Enter new task ⏎" 
                required pattern="\S+"
                ref={(input: HTMLInputElement) => {this.taskInput = input}} 
                onKeyPress={this.onKeyDown} />
        <input type="color" className="taskColorPicker" defaultValue="#62bfbf"
                ref={(input: HTMLInputElement) => {this.colorInput = input}} />
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
          <Sidebar />
          <section id="feature" className="screen isHidden">
            <h2>Some features will be here in future.</h2>
          </section>

          <ul id="taskList" className="screen">
            {this.props.tasks.map(el =>
                <TaskItem key={el.id}
                  id={el.id}
                  isDone={el.isDone}
                  favorite={el.favorite}
                  color={el.color}
                  task={el.task} 
                  creationDate={el.creationDate}
                  deleteTask={this.deleteTask.bind(this)}
                  editTask={this.editTask.bind(this)}
                  markAsDone={this.markAsDone.bind(this)} 
                  changeStar={this.changeStar.bind(this)} />
              )}
          </ul>
        </main>
        <Footer total={this.props.tasks.length} 
                arhive={this.props.tasks.filter(el => el.isDone).length} 
                favorite={this.props.tasks.filter(el => el.favorite).length} 
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
