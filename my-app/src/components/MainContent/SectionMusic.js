import React from 'react';
import './sectionMusic.css'
import Section from './Section';
import data from '../../services/data';

class SectionMusic extends React.Component {
  render() {
    return (
      <Section 
        id={data.sections.music.id}
        class={data.sections.music.sectionClass}
        title={data.sections.music.title}
        desc={data.sections.music.desc}
        structure={
          <ul>  
            <li>
              <h3>{data.music[0].title}</h3>
              <iframe width="auto" height="auto" src={data.music[0].code} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
            <li>
              <h3>{data.music[1].title}</h3>
              <iframe width="auto" height="auto" src={data.music[1].code} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
            <li>
              <h3>{data.music[2].title}</h3>
              <iframe width="auto" height="auto" src={data.music[2].code} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
          </ul>  
        }         
      />
    );    
  }
}

export default SectionMusic; 