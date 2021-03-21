import React from 'react';
import './Logo.css';

class Logo extends React.Component {
  render() {
    return (
      <div className={this.props.class + '__logo'}>
        Лого
      </div>
      );      
  }
}

export default Logo;