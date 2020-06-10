import React from 'react';
import { Router } from '@reach/router'; // https://reach.tech/router
// import { Switch, HashRouter, Route, Link as HashLink } from 'react-router-dom'
import Home from './page-home/Home.js';
import Project from './page-project/Project.js';
// import Home from './page-home/Home.js';
// import Project from './page-project/Project.js'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
import './App.css';

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
