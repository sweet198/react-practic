import React from 'react';

class MainNav extends React.Component {
    render() {
      return (
        <nav className="header__nav">
          <ul>
              <li>
                  <a href={this.props.href}>Обо мне</a>
              </li>
              <li>
                  <a href={this.props.href}>Музыка</a>
              </li>
              <li>
                  <a href={this.props.href}>Программирование</a>
              </li>
          </ul>
        </nav>
        );      
    }
  }

  export default MainNav;