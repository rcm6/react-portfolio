import React, {Component} from "react";
import Card from "../components/Card";
import data from '../data/projects.json';

//console.log(data);

class Projects extends Component {
  state = {
    data
  };
  render() {
    return (
      <div className="container">
        <h2>Projects</h2>
        <div className="row hidden-md-up">
        {this.state.data.map((project, key) => (
            <Card
              index={project.index}
              
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    );
  }
}
  
/*
function Projects() {
  return (
    <div className="container">
      <h2>Projects</h2>
                  <div className="row hidden-md-up">


      
      <Card />
      <Card />
      <Card />
            </div>
    </div>
  );
}
*/

export default Projects;
