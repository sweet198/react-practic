import React from 'react';
import SectionAbout from './MainContent/SectionAbout';
import SectionProgramming from './MainContent/SectionProgramming';
import SectionMusic from './MainContent/SectionMusic'; 


class Main extends React.Component {
  render() {
    return <main class={this.props.class}>
      <h1>Обо мне</h1>
      <SectionAbout />
      <SectionProgramming />
      <SectionMusic />
    </main>;
  }   
}

export default Main;

