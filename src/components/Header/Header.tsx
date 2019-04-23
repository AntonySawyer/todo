import * as React from 'react';
import logo from '../../logo.svg';
import * as int from '../../interfaces';
import './Header.css';


class Header extends React.Component<int.IHeader> {
    render() {
        return ( 
            <header>
                <img src={logo} alt="logo" className="logo" />
                <h1>ToDo List</h1>
                {this.props.inputGroup()}
            </header>
        );
      }
}

export default Header;