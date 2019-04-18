import * as React from 'react';
import * as int from '../../interfaces';
import './Footer.css';

class Footer extends React.Component<int.IFooter> {
    render() {
        return ( 
            <footer>
                <button onClick={this.props.filter.bind(this, '')} title="Show all">Total = {this.props.total}</button>
                <button onClick={this.props.filter.bind(this, 'archive')} title="Show only active">Active = {this.props.total - this.props.arhive}</button>
                <button onClick={this.props.filter.bind(this, 'active')} title="Show only archived">Archived = {this.props.arhive}</button>
            </footer>
        );
      }
}

export default Footer;