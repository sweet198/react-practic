import React from 'react';
import './Socials.css';
import data from '../services/data';
import vk from '../img/vk.png';
import instagram from '../img/instagram.png';
import youtube from '../img/youtube.png';

class Socials extends React.Component {
  render() {
    return (
      <div className={this.props.class + '__socials'}>
        <ul>
          <li>
            <a href={data.socials.vk.href}>
              <img src={vk} alt={data.socials.vk.title} />
            </a>
          </li>
          <li>
            <a href={data.socials.instagram.href}>                  
              <img src={instagram} alt={data.socials.instagram.title} />
            </a>
          </li>
          <li>
            <a href={data.socials.youtube.href}>                  
              <img src={youtube} alt={data.socials.youtube.title} />
            </a>
          </li>                         
        </ul>
      </div>
    );      
  }
}

export default Socials;