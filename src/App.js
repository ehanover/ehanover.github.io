import './App.css';
import './AppBackground.css';
import {
  HashRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Home from './page-home/Home.js';
import Project from './page-project/Project.js';

// TODO add a .nojekyll file in the root of the build folder (but it gets deleted because of different branches)

function App() {
  const [projectList, setProjectList] = useState('');
  // const isMobile = window.innerWidth < 800; // TODO This doesn't account for changing page size without refresh

  useEffect(() => {
    document.title = 'Ethan Hanover';
    const url = 'https://raw.githubusercontent.com/ehanover/ehanover.github.io-content/master/projects.json';
    fetch(url).then((resUrl) => {
      resUrl.text().then((resText) => {
        setProjectList(JSON.parse(resText));
      });
    });
  }, []);

  if (projectList === '') {
    return (
      <div><Spinner animation="border" id="mySpinner" /></div>
    );
  }

  return (
    <div className="App bodyFont appBackground">

      <div className="myContent">
        <Router>
          {/* <Home projectList={projectList} path={process.env.PUBLIC_URL + "/"} /> */}
          {/* <Project projectList={projectList} path={process.env.PUBLIC_URL + "/project/:github"} /> */}

          <Switch>
            <Route path="/project/:github" render={(props) => <Project projectList={projectList} {...props} />} />
            <Route exact path="/" render={(props) => <Home projectList={projectList} {...props} />} />
            <Redirect from="/*" to="/" />
          </Switch>
        </Router>
      </div>

    </div>

  );
}

export default App;
