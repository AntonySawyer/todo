import * as React from 'react';
import logo from '../../logo.png';

class Footer extends React.Component {
    render() {
        return ( 
            <footer>
                <img src={logo} alt="logo" />
            </footer>
        );
      }
}

export default Footer;