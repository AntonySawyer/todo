import * as React from 'react';
import logo from '../../logo.png';

class Header extends React.Component {
    render() {
        return ( 
            <header>
                <img src={logo} alt="logo" />
                <h1>ToDo List</h1>
            </header>
        );
      }
}

export default Header;