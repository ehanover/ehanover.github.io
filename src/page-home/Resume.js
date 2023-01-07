import './Resume.css';
import React from 'react';
import CapitaloneLogo from '../images/capitalonelogo.png';
import MicrosoftLogo from '../images/microsoftlogo.png';
import UvaLogo from '../images/uvalogo.png';
import SaicLogo from '../images/saiclogo.png';

function Resume() {
  const experiences = [
    {
      image: UvaLogo,
      date: '2019 - 2023',
      title: 'University of Virginia',
      text: ['BS in Computer Science, Minor in Data Science'], // "Latest GPA: 3.XX"
    },
    {
      image: SaicLogo,
      date: 'June 2019',
      title: 'SAIC Mini-Internship',
      text: ['Created visualizations of satellite/optical imagery data using Python and Excel'],
    },
    {
      image: CapitaloneLogo,
      date: 'August 2020',
      title: 'Capital One Summit',
      text: ['Developed machine learning, hardware, and mobile app prototypes for banking applications',
        'Won first place in event hackathon'],
    },
    {
      image: CapitaloneLogo,
      date: 'June - August 2021',
      title: 'Capital One Summer Internship',
      text: ['Developed RESTful API to show customers nearby banking services',
        'Utilized AWS Lambdas for real-time updates, AWS DynamoDB for scalable storage, and a DevOps pipeline for deployment'],
    },
    {
      image: MicrosoftLogo,
      date: 'May - August 2022',
      title: 'Microsoft Summer Internship',
      text: ['Migrated internal microservice-based application to use Docker and Kubernetes',
        'Deployed application to production environment using Azure DevOps pipeline'],
    },
    {
      image: MicrosoftLogo,
      date: 'August 2023',
      title: 'Microsoft Software Engineer',
      text: [],
    },
  ];

  return (
    <div className="Resume">

      <h1 className="ResumeTitle titleFont">My Experience</h1>
      <div className="ResumeEntries">
        {experiences.map((o, index) => (
          <div key={index} className="ResumeEntry">
            <img src={o.image} alt={o.title} />
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
        {/* <h4 className="titleFont">For more information,
          <span> <s>take a look at my full resume</s> or </span>
          <a target="_blank" rel="noopener noreferrer" href="mailto:ephanover@gmail.com">send me an email</a>.
        </h4> */}
        {/* <a target="_blank" rel="noopener noreferrer" href="">my resume</a> or <span></span> */}
      </div>
    </div>
  );
}

export default Resume;
