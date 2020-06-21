import './App.css';
import { Router } from '@reach/router'; // https://reach.tech/router
import React, { useState, useEffect } from 'react';
// import { HashRouter, Link as HashLink, Route, Switch } from 'react-router-dom'
import Home from './page-home/Home.js';
import Project from './page-project/Project.js';


function App() {

  const [projectList, setProjectList] = useState('');

  useEffect(() => {
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
        {/* <div className="myHeader titleFont">
          <nav>
            <h3><HashLink to="/home">About Me</HashLink></h3>
            <h3>  |  </h3>
            <h3><HashLink to="/home#projectsAnchor">My Projects</HashLink></h3>
          </nav>
        </div> */}
        <div className="myContent">
          <Router>
            <Home projectList={projectList} path="/" />
            <Project projectList={projectList} path="/project/:github" />
          </Router>
        </div>
      </div>
    );

  }
}

export default App;
