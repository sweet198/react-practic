import React from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.id = props.id;
    this.class = props.class;
    this.title = props.title;
    this.desc = props.desc;
    this.stucture = props.structure;     
  }
  render() {
    return (
      <section id={this.id} className={this.class}>
        <h2>{this.title}</h2>
        <p>{this.desc}</p>
        <div className="container">
          {this.stucture}    
        </div>
      </section>          
    );
  }
}    
  
export default Section;