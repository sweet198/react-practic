import React from 'react';
import './MainNav.css';
import data from '../services/data';

class MainNav extends React.Component {
  render() {
    return (
      <nav className={this.props.class + '__nav'}>
        <ul>
          <li>
            <a href={data.mainNav.about.href}>{data.mainNav.about.title}</a>
          </li>
          <li>
            <a href={data.mainNav.programming.href}>{data.mainNav.programming.title}</a>
          </li>
          <li>
            <a href={data.mainNav.music.href}>{data.mainNav.music.title}</a>
          </li>
        </ul>
      </nav>
    );      
  }
}

export default MainNav;