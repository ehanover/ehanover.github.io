import './Resume.css';
import React from 'react';
import CapitaloneLogo from '../images/capitalonelogo.png'
import MicrosoftLogo from '../images/microsoftlogo.png';
import UvaLogo from '../images/uvalogo.png';
import SaicLogo from '../images/saiclogo.png';

function Resume(props) {

  const experiences = [
    {
      image: UvaLogo,
      date: "2019 - 2023",
      title: "University of Virginia",
      text: ["BS in Computer Science, Minor in Data Science"], // "Latest GPA: 3.XX"
    },
    {
      image: SaicLogo,
      date: "June 2019",
      title: "SAIC Mini-Internship",
      text: ["Created visualizations of satellite/optical imagery data using Python and Excel"],
    },
    {
      image: CapitaloneLogo,
      date: "August 2020",
      title: "Capital One Summit",
      text: ["Developed machine learning, hardware, and mobile app prototypes in the context of commercial banking",
        "Won first place in event hackathon"],
    },
    {
      image: CapitaloneLogo,
      date: "June - August 2021",
      title: "Capital One Summer Internship",
      text: ["Designed and developed RESTful API to inform customers of nearby banking services",
        "Leveraged AWS Lambdas for real-time data processing and DynamoDB for scalable storage",
        "Deployed API to production AWS environment through internal DevOps pipeline"],
    },
    {
      image: MicrosoftLogo,
      date: "May - August 2022",
      title: "Microsoft Summer Internship",
      text: ["Coming soon"],
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
              <div className="ResumeEntryBodyHeaderDiv">
                <h4 className="ResumeEntryBodyHeaderTitle titleFont">{o.title}</h4>
                <h6>{o.date}</h6>
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
          <span> <s>take a look at my full resume</s> or </span>
          <a target="_blank" rel="noopener noreferrer" href="mailto:ephanover@gmail.com">send me an email</a>.
        </h4>
      </div>
    </div>
  );
}

export default Resume;
