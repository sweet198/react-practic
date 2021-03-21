import React from 'react';
import './sectionProgrammic.css'
import Section from './Section';
import data from '../../services/data';

class SectionProgramming extends React.Component {
  render() {
    return (
      <Section
        id={data.sections.programming.id} 
        class={data.sections.programming.sectionClass}
        title={data.sections.programming.title}
        desc={data.sections.programming.desc}
        structure={
          <ul>  
            <li>              
              <a href={data.programming[0].link}>
                <span>1</span>
                <h3>{data.programming[0].title}</h3>  
              </a>             
            </li>
            <li>              
              <a href={data.programming[1].link}>
              <span>2</span>
                <h3>{data.programming[1].title}</h3>  
              </a>             
            </li>
            <li>              
              <a href={data.programming[2].link}>
              <span>3</span>
                <h3>{data.programming[2].title}</h3>  
              </a>             
            </li>
          </ul>  
        }         
      />
    );
  }
}

export default SectionProgramming;