import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GitHubLogo from '../images/GitHub-Mark-120px-plus.png'
import LinkedInLogo from '../images/LI-In-Bug.png'
import EmailLogo from '../images/email.png'
import Portrait from '../images/logo.svg' // TODO update portrait

function Home(props) {
  return (
    <div className="Home">
      <Container>
        <Row>
          <Col>
            <br/>
            <br/>
            <h1 id="homeAnchor">Ethan Hanover</h1>
            <br/>
            <Row>
              <Col md={2}></Col>
              <Col>
                <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/ehanover"><img class="myHover" src={GitHubLogo} width="40" alt="GitHub logo"/></a>
              </Col>
              <Col>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ethan-hanover-201a15186/"><img class="myHover" src={LinkedInLogo} width="40" alt="LinkedIn logo"/></a>
              </Col>
              <Col>
                <a target="_blank" rel="noopener noreferrer" href="mailto:ephanover@gmail.com"><img class="myHover" src={EmailLogo} width="40" alt="Email symbol"/></a>
              </Col>
              <Col md={2}></Col>
            </Row>
            <hr/>
            <h3>I'm a second year computer science student at the University of Virginia. I like making projects to learn new things.</h3>
          </Col>
          <Col>
            <img src={Portrait} width="500" alt="Portrait"/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row id="projectsAnchor">Project list title</Row>
      </Container>
    </div>
  );
}

export default Home;
