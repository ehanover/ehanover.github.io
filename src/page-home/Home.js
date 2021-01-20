import './Home.css';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import EmailLogo from '../images/email.png';
import GitHubLogo from '../images/GitHub-Mark-120px-plus.png';
import LinkedInLogo from '../images/LI-In-Bug.png';
import Portrait from '../images/portrait.png'; // TODO update portrait
import ProjectList from './ProjectList.js';
import React from 'react';
import Resume from './Resume.js';
import Row from 'react-bootstrap/Row';

function Home(props) {

  const isMobile = window.innerWidth < 800; // TODO This doesn't account for changing page size without refresh
  document.title = `Ethan Hanover`;

  /* function scrollToInfo() {
    document.getElementById('InfoAnchor').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  function scrollToProjects() {
    document.getElementById('ProjectsAnchor').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  } */

  const shortBio = <h5>I'm a second year computer science student at the University of Virginia. I like making fun projects to learn new skills. </h5>;
  const iconRow = <Row className="iconRow">
    <Col md={2} />
    <Col>
      <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/ehanover"><img className="myHover" src={GitHubLogo} width="40" alt="GitHub link" /></a>
    </Col>
    <Col>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethan-hanover-201a15186/"><img className="myHover" src={LinkedInLogo} width="40" alt="LinkedIn link" /></a>
    </Col>
    <Col>
      <a href="mailto:ephanover@gmail.com"><img className="myHover" src={EmailLogo} width="40" alt="Email link" /></a>
    </Col>
    <Col md={2} />
  </Row>;

  return (
    <div className="Home">
      {/* <nav className="myHeader titleFont">
        <Button className="myHeaderColumn" variant="link" onClick={scrollToInfo}><h3>About Me</h3></Button>
        <span className="myHeaderColumn"> <h4>|</h4> </span>
        <Button className="myHeaderColumn" variant="link" onClick={scrollToProjects}><h3>My Projects</h3></Button>
      </nav> */}
      <br />
      <br />
      <br />
      <Container className="shortBioContainer">
        {isMobile ? 
          <div>
            <img id="myPortrait" src={Portrait} alt="Portrait" />
            <br />
            <br />
            <h1 id="InfoAnchor" className="titleFont">Ethan Hanover</h1>
            {iconRow}
            {shortBio}
            <hr />
          </div>
          :
          <Row>
            <Col>
              <br />
              <h1 id="InfoAnchor" className="titleFont">Ethan Hanover</h1>
              <br />
              {iconRow}
              <hr />
              {shortBio}
            </Col>
            <Col>
              <img id="myPortrait" src={Portrait} alt="Portrait" />
            </Col>
          </Row>
        }
      </Container>

      <br />
      <br />
      <p id="myBio">I first started programming with an Arduino board in middle school. Ever since then, the elegance and 
      power of computer science has interested me. Now, I like to practice my coding skills on a wide variety of 
      projects and showcase my favorite ones on this website. </p>
      <br />

      <hr />
      <br />
      <br />
      <Resume />
      <br />

      <hr />
      <br />
      <br />
      <br />
      <ProjectList projectList={props.projectList}/>
      <br />

      <span id="myFooterSpacer"></span>
      <hr />
      <p id="myFooterText">☺ | 2021</p>

    </div>
  );
}

export default Home;
