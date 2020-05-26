import React from 'react';
// import logo from './images/logo.svg';
import { Router, Link } from "@reach/router" // https://reach.tech/router
import Home from './page-home/Home';
import Project from './page-project/Project'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* https://react-bootstrap.github.io/components/navbar/ */}
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Link to="/about">About</Link>
        </Nav>
      </Navbar>
       */}

      {/* <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <div class="navbar-brand">WebSiteName</div>
          </div>
          <ul class="nav navbar-nav">
            // <li class="active"><a href="#">Home</a></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
      </nav> */}

      <div class="myHeader">
        <nav>
          {/* <h3><Link to="/">About Me</Link></h3> */}
          <h3><Link to="/home#homeAnchor">About Me</Link></h3>
          <h3>  |  </h3>
          <h3><Link to="/home#projectsAnchor">My Projects</Link></h3>
        </nav>
      </div>

      <br/>

      <div class="myContent">
        <Router>
          <Home path="/home"/>
          <Project path="/project/:projectId"/>
        </Router>
      </div>
    </div>

    // TODO footer?
  );
}

export default App;

/*
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
*/

