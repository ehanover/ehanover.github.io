import './ProjectList.css';
import { Link } from 'react-router-dom';
import React from 'react';
import MyCarousel from '../components/MyCarousel';
import Table from 'react-bootstrap/Table';

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
  
  const favoriteProjectIds = props.projectList.favoriteIds;
  const allProjects = props.projectList.projects.sort(projectListSort);

  let projectShowcaseImageUrls = [];
  let projectShowcaseCaptions = [];
  let projectShowcaseCaptionLinks = [];
  props.projectList.projects.forEach(project => {
    project.imageShowcaseNums.forEach(num => {
      projectShowcaseImageUrls.push(`https://raw.githubusercontent.com/ehanover/ehanover.github.io-content/master/${project.github}/img${num}.jpg`);
      projectShowcaseCaptions.push(project.title);
      projectShowcaseCaptionLinks.push(`/project/${project.github}`);
    });
  });

  return (
    <div className="ProjectList">
      <h1 id="ProjectsAnchor" className="titleFont">My Projects</h1>
      <div className="ProjectListCarousel">
        <MyCarousel urls={projectShowcaseImageUrls} captions={projectShowcaseCaptions} links={projectShowcaseCaptionLinks} shuffle={false}/>
      </div>

      <Table hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            {/* <th>Coolness</th> */}
            {/* <th>Effort</th> */}
            <th>Technologies</th>
          </tr>
        </thead>
        <tbody>
          {allProjects.map((p) => (
            <tr key={p.id} className="ProjectListItem">
              <td>{p.date}</td>
              <td>
                {favoriteProjectIds.includes(p.id) ? 
                  // This is a favorite project
                  <Link to={`/project/${p.github}`} className="ProjectListTitleFavorite">★ {p.title}</Link>
                : // Not a favorite project
                  <Link to={`/project/${p.github}`}>{p.title}</Link>
                }
              </td>
              <td>{p.technologies.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <p>Projects with stars are ones that I think are extra cool. </p> */}
    </div>
  );
}

export default ProjectList;
