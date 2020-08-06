import './MyCarousel.css';
import { Link } from 'react-router-dom';
import ButtonImage from '../images/carouselarrow.png';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function MyCarousel(props) {

  // function shuffle(array) { 
  //   // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array#6274398
  //   let counter = array.length;
  //   // While there are elements in the array
  //   while (counter > 0) {
  //       // Pick a random index
  //       let index = Math.floor(Math.random() * counter);
  //       // Decrease counter by 1
  //       counter--;
  //       // And swap the last element with it
  //       let temp = array[counter];
  //       array[counter] = array[index];
  //       array[index] = temp;
  //   }
  //   return array;
  // }

  function emptyStringFilter(e) {
    return e != null && e.length > 0;
  }

  // const urls = props.shuffle ? shuffle(props.urls) : props.urls;
  // const captions = props.shuffle ? shuffle(props.captions) : props.captions;
  const urls = props.urls.filter(emptyStringFilter);
  // const captions = props.captions.filter(emptyStringFilter);
  const captions = props.captions;

  const links = props.links ? props.links.filter(emptyStringFilter) : null; // Links may not always be passed

  let captionElements;
  if(links) {
    captionElements = captions.map((c, i) => <p className="bodyFont"><Link to={links[i]}>{c}</Link></p>);
  } else {
    captionElements = captions.map((c) => <p className="bodyFont">{c + "​"}</p>); // There's an invisible zero-width character here to 
                                                                                  // prevent the caption box from changing height
  }

  if(urls.length > 0) {
    return (
      <div className="MyCarousel">
        <Carousel
          nextIcon={<img src={ButtonImage} className="MyCarouselNextIcon" alt="Carousel View Next"/>} 
          prevIcon={<img src={ButtonImage} className="MyCarouselPrevIcon" alt="Carousel View Previous"/>} >
          {urls.map((url, i) =>
            <Carousel.Item key={i}>
              <img src={url} alt={captions[i]} className="MyCarouselImage"/>
              <Carousel.Caption className="MyCarouselCaption">
                {/* <p id="MyCarouselCaptionText" className="bodyFont"><span>{captions[i]}</span></p> */}
                {captionElements[i]}
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
        <br />
      </div>
    );
  } else {
    return null;
  }
}

export default MyCarousel;
