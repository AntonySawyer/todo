import * as React from 'react';
import * as int from '../../interfaces';
import './Footer.css';

class Footer extends React.Component<int.IFooter> {
    render() {
        return ( 
            <footer>
                    <input type="radio" name="menuRadio" id="showViewed" className="showViewed" defaultChecked />
                    <label htmlFor="showViewed">Filters</label>
                    <input type="radio" name="menuRadio" id="showControl" className="showControl" />
                    <label htmlFor="showControl">Controls</label>
                    <div className="control">
                        <button onClick={this.props.deleteCompleted} title="Delete marked">Delete</button>
                        <button onClick={this.props.sortCompleted} title="Active to top">Sort done</button>
                        <button onClick={this.props.sortByDate} title="First fresh">Sort by date</button>
                    </div>
                    <div className="viewed">
                        <button onClick={this.props.filter.bind(this, '')} title="Show all">Total (<b>{this.props.total}</b>)</button>
                        <button onClick={this.props.filter.bind(this, 'notFavorite')} title="Favorite">Favorite (<b>{this.props.favorite}</b>)</button>
                        <button onClick={this.props.filter.bind(this, 'archive')} title="Show only active">Active (<b>{this.props.total - this.props.arhive}</b>)</button>
                        <button onClick={this.props.filter.bind(this, 'active')} title="Show only archived">Archive (<b>{this.props.arhive}</b>)</button>
                    </div>
            </footer>
        );
      }
}

export default Footer;