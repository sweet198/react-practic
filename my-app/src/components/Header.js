import React from 'react';
import './Header.css';
import Logo from './Logo';
import MainNav from './MainNav';
import Contacts from './Contacts';

class Header extends React.Component {
  render() {
    return <header class={this.props.class}>
      <Logo class={this.props.class} />
      <MainNav class={this.props.class} />
      <Contacts class={this.props.class} />
    </header>;
  }   
}

export default Header;