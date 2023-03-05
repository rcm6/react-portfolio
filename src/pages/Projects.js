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
        {this.state.data.map((project, index) => (
            <Card
              key={index}       
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              linkLive={project.linkLive}
              linkRepo={project.linkRepo}

            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;