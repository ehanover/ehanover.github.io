import React from 'react';
import './Project.css';
import { Link } from '@reach/router';

// Consider https://github.com/rexxars/react-markdown

function Project(props) {
  return (
    <div className="Project">
      <div className="myHeader titleFont">
        <nav>
          <h3>← <Link to="/">Back to Home</Link></h3>
        </nav>
      </div>

      <h3>Here is a project with id {props.projectId}</h3>
    </div>
  );
}

export default Project;
