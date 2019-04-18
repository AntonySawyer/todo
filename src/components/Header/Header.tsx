import * as React from 'react';
import logo from '../../logo.png';
import * as int from '../../interfaces';
import './Header.css';


class Header extends React.Component<int.IHeader> {
    render() {
        return ( 
            <header>
                <img src={logo} alt="logo" className="logo" />
                <h1>ToDo List</h1>
                <div className="control">
                    <button onClick={this.props.deleteCompleted} title="Delete marked">Delete</button>
                    <button onClick={this.props.sortCompleted} title="Active to top">Sort done</button>
                    <button onClick={this.props.addTask} title="Add new task">Add new</button>
                </div>
                {this.props.inputGroup()}
            </header>
        );
      }
}

export default Header;