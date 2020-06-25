import './Project.css';
import React, { useState } from 'react';
import { Link } from '@reach/router';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import MyCarousel from '../components/MyCarousel';
import ReactMarkdown from 'react-markdown/with-html';
import Row from 'react-bootstrap/Row';

function Project(props) {
  const thisProject = props.projectList.projects.find((other) => other.github === props.github);

  document.title = `Ethan Hanover - ${thisProject.title}`;
  const [markdown, setMarkdown] = useState('\n*Loading...*');

  // const url = `https://raw.githubusercontent.com/ehanover/${thisProject.github}/master/README.md`; // Gets README from the actual repository
  const url = `https://raw.githubusercontent.com/ehanover/ehanover.github.io-content/master/${thisProject.github}/README.md`
  const imageUrls = [...Array(thisProject.imageNum).keys()].map((i) =>
    // Weird syntax to mimic Python's "range(imageNum)"
    `https://raw.githubusercontent.com/ehanover/ehanover.github.io-content/master/${thisProject.github}/img${i+1}.jpg`
  );
  const imageCaptions = thisProject.imageCaptions;

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
      <div>
        <MyCarousel urls={imageUrls} captions={imageCaptions} shuffle={false}/>
      </div>

      <div id="myReactMarkdown">
        <ReactMarkdown source={markdown} escapeHtml={false}/>
      </div>
      <br /> {/* Add a bunch of line breaks so you can scroll? */}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Project;
