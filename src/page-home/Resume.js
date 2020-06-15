import './Resume.css';
import React from 'react';
import CapitaloneLogo from '../images/capitalonelogo.png'
import UvaLogo from '../images/uvalogo.png';
import SaicLogo from '../images/saiclogo.jpeg';

function Resume(props) {

  const experiences = [
    {
      image: UvaLogo,
      date: "2019 - 2023 Expected",
      title: "University of Virginia",
      text: ["Bachelor of Science in Computer Science",
        "Latest GPA: 3.83"],
    },
    {
      image: SaicLogo,
      date: "June 2019",
      title: "SAIC",
      // text: ["Calculated and visualized satellite orbital mechanics using Python and Excel"],
      text: ["Learned concepts of satellite/optical imagery and orbital mechanics",
        "Created visualization models of orbital components using Python and Microsoft Excel"]
    },
    {
      image: CapitaloneLogo,
      date: "August 2020",
      title: "Capital One",
      text: ["TODO"],
    },
  ];

  return (
    <div className="Resume">
      <div className="ResumeBio">
        <p> Since middle school, I've loved experimenting with aspects of programming and computer science. 
        I love how computer science has abstraction or whatever. TODO.</p>
        
        <p>At UVA, I'm involved with the Mechatronics and Robotics club, where we build rovers to compete
        in an annual NASA-sponsored contest in Florida. The club is a great way for me to apply what I've been 
        learning in the classroom to a physical and fun platform. But every time the club meets I always learn
        something new about robotics and computer science. </p>

        <p>I've played trombone and euphonium for many years and I'm a member of the Cavalier Marching Band at UVA.
        Joining the marching band was one of the best decisions I've made in college. Not only is it fun and rewarding, 
        but I've also met so many great people.</p>
      </div>
      <br />
      <br />
      <div className="ResumeEntries">
        <h2 className="titleFont">Professional Experience</h2>
        {experiences.map((o, index) => (
          <div key={index} className="ResumeEntry">
            <img src={o.image} alt={o.title}/>
            <div className="ResumeEntryBody">
              <div className="ResumeEntryBodyTitle">
                <h3 className="titleFont">{o.title}</h3>
                <pre>  </pre>
                <h5>{o.date}</h5>
              </div>
              <ul>
                <p>
                  {o.text.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </p>
              </ul>
            </div>
          </div>
        ))}
        <h3 className="titleFont">For more information, <span></span>
          {/* <a target="_blank" rel="noopener noreferrer" href="">my resume</a> or <span></span> */}
          <span><s>take a look at my resume</s> or </span>
          <a target="_blank" rel="noopener noreferrer" href="mailto:ephanover@gmail.com">send me an email</a>.
        </h3>
      </div>

    </div>
  );
}

export default Resume;
