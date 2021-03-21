import React from 'react';
import './SectionAbout.css'
import Section from './Section';
import data from '../../services/data';
import programming from '../../img/programming.jpg';
import guitar from '../../img/guitar.jpg'

class SectionAbout extends React.Component {  
  render() {
    return (
      <Section 
        id={data.sections.about.id}
        class={data.sections.about.sectionClass}
        title={data.sections.about.title}
        desc={data.sections.about.desc}
        structure={
          <ul>
            <li>
              <h3>{data.about.programming.title}</h3>
              <p>{data.about.programming.desc}</p>
              <img src={programming} alt={data.about.programming.title}/>      
            </li>
            <li>
              <h3>{data.about.music.title}</h3>
              <p>{data.about.music.desc}</p>
              <img src={guitar} alt=''/>      
            </li>                
          </ul>
        }  
      />
    );
  }
}

export default SectionAbout;