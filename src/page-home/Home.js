import './Home.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import EmailLogo from '../images/email.png';
import GitHubLogo from '../images/GitHub-Mark-120px-plus.png';
import LinkedInLogo from '../images/LI-In-Bug.png';
import Portrait from '../images/portrait.png'; // TODO update portrait
import ProjectList from './ProjectList.js';
import React from 'react';
import Row from 'react-bootstrap/Row';

function Home(props) {
  function scrollToInfo() {
    document.getElementById('infoAnchor').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  function scrollToProjects() {
    document.getElementById('projectsAnchor').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  document.title = 'Ethan Hanover';

  return (
    <div className="Home">
      <div className="myHeader titleFont">
        <nav>
          <Button variant="link" onClick={scrollToInfo}><h3>About Me</h3></Button>
          <h3>|</h3>
          <Button variant="link" onClick={scrollToProjects}><h3>My Projects</h3></Button>
          {/* <h3>Test <Button variant="link" onClick={scrollToInfo}>About Me></Button></h3> */}
        </nav>
      </div>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <h1 id="infoAnchor" className="titleFont">Ethan Hanover</h1>
            <br />
            <Row>
              <Col md={2} />
              <Col>
                <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/ehanover"><img className="myHover" src={GitHubLogo} width="40" alt="GitHub link" /></a>
              </Col>
              <Col>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethan-hanover-201a15186/"><img className="myHover" src={LinkedInLogo} width="40" alt="LinkedIn link" /></a>
              </Col>
              <Col>
                <a target="_blank" rel="noopener noreferrer" href="mailto:ephanover@gmail.com"><img className="myHover" src={EmailLogo} width="40" alt="Email link" /></a>
              </Col>
              <Col md={2} />
            </Row>
            <hr />
            <h3>
              I'm a second year computer science student at the University of Virginia. 
              I like making projects to learn new skills.
            </h3>
          </Col>
          <Col>
            <img id="myPortrait" src={Portrait} width="550" alt="Portrait" />
          </Col>
        </Row>
      </Container>
      {/* <h1 className="titleFont">Experience</h1>  TODO could add brief experience section */}
      <br />
      <br />
      <ProjectList />
    </div>
  );
}

export default Home;
