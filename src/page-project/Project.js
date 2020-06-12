import './Project.css';
import React, { useState } from 'react';
import { Link } from '@reach/router';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import projectListJson from '../projects.json';
import ReactMarkdown from 'react-markdown';
import Row from 'react-bootstrap/Row';

function Project(props) {
  const thisProject = projectListJson.projects.find((other) => other.github === props.github);

  document.title = `Ethan Hanover - ${thisProject.title}`;
  const [markdown, setMarkdown] = useState('\n*Loading...*');

  const url = `https://raw.githubusercontent.com/ehanover/${thisProject.github}/master/README.md`;
  fetch(url).then((resUrl) => {
    resUrl.text().then((resText) => {
      setMarkdown(resText);
    });
  });

  return (
    <div className="Project">
      <div className="myHeader titleFont">
        <nav>
          <h3>
            ← <Link to="/">Back to Home</Link>
          </h3>
        </nav>
      </div>

      <Container>
        <Row id="myRowDetails">
          <Col md={4}>
            <a target="_blank" rel="noopener noreferrer" href={`https://github.com/ehanover/${thisProject.github}`}>
              {`github.com/ehanover/${thisProject.github}`}
            </a>
          </Col>
          <Col md={4}>
            <p>Made in {thisProject.date}</p>
          </Col>
          <Col md={4}>
            <p>{thisProject.technologies.join(', ')}</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <br />
      <div id="myReactMarkdown">
        <ReactMarkdown source={markdown} />
      </div>
    </div>
  );
}

export default Project;
