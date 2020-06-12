import './App.css';
import { Router } from '@reach/router'; // https://reach.tech/router
// import { HashRouter, Link as HashLink, Route, Switch } from 'react-router-dom'
import Home from './page-home/Home.js';
import Project from './page-project/Project.js';
import React from 'react';

function App() {
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
          <Home path="/" />
          <Project path="/project/:github" />
        </Router>
      </div>
    </div>

  // TODO footer?
  );
}

export default App;
