import './Project.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import MyCarousel from '../components/MyCarousel';
import ReactMarkdown from 'react-markdown/with-html';
import Row from 'react-bootstrap/Row';

function Project(props) {

  const thisProject = props.projectList.projects.find((other) => other.github === props.match.params.github);
  // TODO if the user manually navigates to a project that doesn't exist, this page crashes
  const [markdown, setMarkdown] = useState('\n*Loading...*');

  window.scrollTo(0, 0);
  document.title = `Ethan Hanover - ${thisProject.title}`;

  const url = `https://raw.githubusercontent.com/ehanover/ehanover.github.io-content/master/${thisProject.github}/README.md`
  const imageUrls = [...Array(thisProject.imageNum).keys()].map((i) => // Weird syntax to mimic Python's "range(imageNum)"
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
      <div id="myCarouselContainer">
        <MyCarousel id="myCarousel" urls={imageUrls} captions={imageCaptions} shuffle={false}/>
      </div>

      {/* TODO make links in the markdown source open in new tabs */}
      <ReactMarkdown source={markdown} escapeHtml={false}/>

      <span id="myProjectSpacer"></span>

    </div>
  );
}

export default Project;
