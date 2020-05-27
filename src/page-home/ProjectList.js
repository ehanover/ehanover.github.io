import React from 'react';
import './ProjectList.css';
import { Link } from '@reach/router';
// var projectsData = require('../projects.json');
import data from '../projects.json';

function ProjectList(props) {

  function projectListSort(a, b) {
    let [aMonth, aYear] = a.date.split("/");
    let [bMonth, bYear] = b.date.split("/");
    if(aYear < bYear)
      return 1;
    if(aYear > bYear)
      return -1;
    if(aYear === bYear) {
      if(aMonth < bMonth)
        return 1;
      if(aMonth > bMonth)
        return -1;
    }
    return 0;
  }

  return (
    <div className="Project">
        <h1 className="titleFont" id="projectsAnchor">My Projects</h1>
        {data.projects.sort(projectListSort).map(p => (
          <div class="myProjectItem">
            {/* <h4>{p.date} - <Link to={"/project/" + p.id}>{p.title}</Link></h4> */}
            <h4><Link to={"/project/" + p.id}>{p.date} - {p.title}</Link></h4>
            <p>{p.technologies.join(', ')}</p>
          </div>
        ))}
      <br/>
      <br/>
    </div>
  );
}

export default ProjectList;
