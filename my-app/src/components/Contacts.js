import React from 'react';
import './Contacts.css'
import data from '../services/data';
import Button from './Button'


class Contacts extends React.Component {
  render() {
    return (
      <div className={this.props.class + '__contacts'}>
        <ul>
          <li>
            <a href={data.contacts.tel.href}>{data.contacts.tel.desc}</a>
          </li>
          <li>
            <a href={data.contacts.mail.href}>{data.contacts.mail.desc}</a>
          </li>
          <li>
            <Button class={this.props.class} text='Мне можно написать здесь:'/>
          </li>              
        </ul>
      </div>
    );      
  }
}

export default Contacts;