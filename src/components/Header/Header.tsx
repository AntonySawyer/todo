import * as React from 'react';
import logo from '../../logo.svg';
import * as int from '../../interfaces';
import './Header.css';


class Header extends React.Component<int.IHeader> {
    showSideBar() {
        const sideBar = document.querySelectorAll('.sideBar')[0];
        if (sideBar.classList.contains('isHidden')) {
            sideBar.classList.remove('isHidden');
            document.querySelectorAll('.sideWrapper')[0].classList.remove('isHidden');
        } else {
            sideBar.classList.add('isHidden');
            document.querySelectorAll('.sideWrapper')[0].classList.add('isHidden');
        }
    }

    render() {
        return ( 
            <header>
                <button className="menuBar" onClick={this.showSideBar}>☰</button>
                <img src={logo} alt="logo" className="logo" />
                <h1>ToDo List</h1>
                {this.props.inputGroup()}
            </header>
        );
    }
}

export default Header;