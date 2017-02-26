import React, { Component } from 'react';


class ProjectItem extends Component {
    deleteProject(title){
        this.props.onDelete(title);
    }
  render() {
    return (
      <li className="Project" onClick={this.deleteProject.bind(this,this.props.project.title)}>
        {this.props.project.title} - {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
