import React from 'react';
import './Footer.css'
import Logo from './Logo';
import Socials from './Socials';
import Contacts from './Contacts';

class Footer extends React.Component {
  render() {
    return <footer className={this.props.class}>
      <Logo class={this.props.class} />
      <Socials class={this.props.class} />          
      <Contacts class={this.props.class} />
    </footer>;
  }   
}

export default Footer;