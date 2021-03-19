import React from 'react';
import Logo from './Logo';
import MainNav from './MainNav';
import Contacts from './Contacts';

class Header extends React.Component {
    render() {
      return <header>
          <Logo />
          <MainNav href='#' />
          <Contacts tel='tel:+79117031903' mail='mailto:svitkovskiy198@gmail.com' />
      </header>;
    }
  }

  export default Header;