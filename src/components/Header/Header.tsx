import * as React from 'react';
import logo from '../../logo.png';
import * as int from '../../interfaces';


class Header extends React.Component<int.IHeader> {
    render() {
        return ( 
            <header>
                <img src={logo} alt="logo" />
                <h1>ToDo List</h1>
                <div className="control">
                    <button onClick={this.props.deleteCompleted} title="Delete marked">✘ mark</button>
                    <button onClick={this.props.sortCompleted} title="Active to top">⇈</button>
                    <button onClick={this.props.addTask} title="Add new task">⏎</button>
                </div>
            </header>
        );
      }
}

export default Header;