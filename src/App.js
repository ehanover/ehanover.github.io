import './App.css';
// import './AppAnimation.css';
import { Router } from '@reach/router'; // https://reach.tech/router
import React, { useState, useEffect } from 'react';
// import { HashRouter, Link as HashLink, Route, Switch } from 'react-router-dom'
import Home from './page-home/Home.js';
import Project from './page-project/Project.js';


function App() {

  const [projectList, setProjectList] = useState('');
  const isMobile = window.innerWidth < 800; // TODO This doesn't account for changing page size without refresh

  useEffect(() => {
    document.title = 'Ethan Hanover';
    const url = "https://raw.githubusercontent.com/ehanover/ehanover.github.io-content/master/projects.json";
    fetch(url).then((resUrl) => {
      resUrl.text().then((resText) => {
        setProjectList(JSON.parse(resText));
      });
    });
  }, []);

  if(projectList === '') {
    return (
      <div className="App bodyFont"></div>
    );
  } else {
    return (
      <div className="App bodyFont">
        
        <div className="myContent">
          {/* TODO you can't type a project url directly into the address bar, it says page not found.
            This is probably because of the SPA nature of the router or the hosting rules on github (eg. user site vs. project site) */}
          {/* Maybe try using react-router instead of reach */}
          {/* <Router basepath={process.env.PUBLIC_URL}> */}
          <Router>
            <Home projectList={projectList} path={process.env.PUBLIC_URL + "/"} />
            <Project projectList={projectList} path={process.env.PUBLIC_URL + "/project/:github"} />
          </Router>
          {/* <p>Hello</p> */}
        </div>

        {isMobile ? null : null}
        {/* {isMobile
          ? null
          : <div className="area">
            ? <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
          </div>
        } */}

      </div>

    );

  }
}

export default App;
