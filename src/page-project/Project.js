import React from 'react';
import './Project.css';

// Consider: https://github.com/rexxars/react-markdown

function Project(props) {
  return (
    <div className="Project">
      <h3>Here is a project with id {props.projectId}</h3>
    </div>
  );
}

export default Project;
