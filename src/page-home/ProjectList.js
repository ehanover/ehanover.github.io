import './ProjectList.css';
import { Link } from '@reach/router';
import React from 'react';
import projectListJson from '../projects.json';

function ProjectList(props) {
  function projectListSort(a, b) {
    const [aMonth, aYear] = a.date.split('/');
    const [bMonth, bYear] = b.date.split('/');
    if (aYear < bYear) return 1;
    if (aYear > bYear) return -1;
    if (aYear === bYear) {
      if (aMonth < bMonth) return 1;
      if (aMonth > bMonth) return -1;
    }
    return 0;
  }

  return (
    <div className="Project">
      <h1 className="titleFont" id="projectsAnchor">My Projects</h1>
      <h4 id="myWarning"><i>The content at the following links is placeholder information and will be improved soon.</i></h4>
      {projectListJson.projects.sort(projectListSort).map((p) => (
        <div key={p.id} className="myProjectItem">
          <h4>
            <Link to={`/project/${p.github}`}>
              {p.date + ' - ' + p.title}
            </Link>
          </h4>
          <p>{p.technologies.join(', ')}</p>
        </div>
      ))}
      <br />
      <br />
    </div>
  );
}

export default ProjectList;
