import './Resume.css';
import React from 'react';
import CapitaloneLogo from '../images/capitalonelogo.png'
import UvaLogo from '../images/uvalogo.png';
import SaicLogo from '../images/saiclogo.png';

function Resume(props) {

  const experiences = [
    {
      image: UvaLogo,
      date: "2019 - 2023",
      title: "University of Virginia",
      text: ["BS Computer Science"], //, "Latest GPA: 3.83"], // 3.85?
    },
    {
      image: SaicLogo,
      date: "June 2019",
      title: "SAIC",
      text: ["Created visualizations of satellite/optical imagery data using Python and Excel"],
    },
    {
      image: CapitaloneLogo,
      date: "August 2020",
      title: "Capital One Summer Summit",
      text: ["Developed machine learning, hardware, and mobile app prototypes in the context of commercial banking",
        "Won first place in event hackathon"],
    },
    {
      image: CapitaloneLogo,
      date: "June - August 2021",
      title: "Capital One Internship",
      text: ["Coming Soon"], // TODO update capital one info
    },
  ];

  return (
    <div className="Resume">

      <h1 className="ResumeTitle titleFont">My Experience</h1>
      <div className="ResumeEntries">
        {experiences.map((o, index) => (
          <div key={index} className="ResumeEntry">
            <img src={o.image} alt={o.title}/>
            <div className="ResumeEntryBody">
              <div className="ResumeEntryBodyHeader">
                <h4 className="ResumeEntryBodyHeaderTitle titleFont">{o.title}</h4>
                <h5>{o.date}</h5>
              </div>
              <ul>
                {o.text.map((t, i) => (<li key={i}>{t}</li>))}
              </ul>
            </div>
          </div>
        ))}
        <br />
        <h4 className="titleFont">For more information,
          {/* <a target="_blank" rel="noopener noreferrer" href="">my resume</a> or <span></span> */}
          <span> <s>take a look at my resume</s> or </span>
          <a target="_blank" rel="noopener noreferrer" href="mailto:ephanover@gmail.com">send me an email</a>.
        </h4>
      </div>
    </div>
  );
}

export default Resume;
