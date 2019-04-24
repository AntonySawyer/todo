import * as React from 'react';
import './Sidebar.css';


class Sidebar extends React.Component {
    showElement(screenToShow: string) {
        document.querySelectorAll('.screen').forEach(el => el.classList.add('isHidden'));
        document.querySelectorAll(screenToShow)[0].classList.remove('isHidden');
    }

    hideMenu() {
        document.querySelectorAll('.sideBar')[0].classList.add('isHidden');
        document.querySelectorAll('.sideWrapper')[0].classList.add('isHidden');
    }

    render() {
        return ( 
            <section className="sideWrapper isHidden" onClick={(e) => this.hideMenu()}>
                <article className="sideBar isHidden">
                    <ul>
                        <li onClick={(e) => this.showElement('#taskList')}>Task list</li>
                        <li onClick={(e) => this.showElement('#feature')}>Future features</li>
                    </ul>
                </article>
            </section>
        );
    }
}

export default Sidebar;