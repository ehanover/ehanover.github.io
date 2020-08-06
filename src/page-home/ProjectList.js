import './ProjectList.css';
import { Link } from 'react-router-dom';
import React from 'react';
import MyCarousel from '../components/MyCarousel';

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
  
  const favoriteProjects = props.projectList.favoriteIds.map((id) => props.projectList.projects.find(t => Number(t.id) === id));
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
      {/* <h1 className="titleFont">My Projects</h1> */}
      <div className="ProjectListCarousel">
        <MyCarousel urls={projectShowcaseImageUrls} captions={projectShowcaseCaptions} links={projectShowcaseCaptionLinks} shuffle={false}/>
      </div>

      {/* <h4 id="MyWarning"><i>The content at the following links is placeholder information and will be improved soon.</i></h4> */}

      <h2 className="titleFont" id="ProjectsAnchor">My Favorite Projects</h2>
      {favoriteProjects.map((p) => (
        <div key={p.id} className="ProjectListItem">
          <h5>
            <Link to={`/project/${p.github}`}>
              {'★ ' + p.date + ' - ' + p.title}
            </Link>
          </h5>
          <p>{p.technologies.join(', ')}</p>
        </div>
      ))}
      <br />

      <h2 className="titleFont">All Projects</h2>
      {allProjects.map((p) => (
        <div key={p.id} className="ProjectListItem">
          <h5>
            <Link to={`/project/${p.github}`}>
              {p.date + ' - ' + p.title}
            </Link>
          </h5>
          <p>{p.technologies.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
