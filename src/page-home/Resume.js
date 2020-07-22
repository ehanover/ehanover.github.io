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
      text: ["Bachelor of Science in Computer Science", "Latest GPA: 3.83"],
    },
    {
      image: SaicLogo,
      date: "June 2019",
      title: "SAIC",
      text: ["Studied concepts of orbital mechanics and satellite/optical imagery",
        "Created visualization models of orbital components using Python and Microsoft Excel"]
    },
    {
      image: CapitaloneLogo,
      date: "August 2020",
      title: "Capital One",
      text: ["Coming Soon"],
    },
  ];

  return (
    <div className="Resume">
      <div className="ResumeBio">
        <p>I first started programming with an Arduino board in middle school. Ever since then, the elegance and 
        power of computer science has interested me. Now, I like to practice a wide variety of coding skills in my 
        projects on this site. </p>

        <p>At UVA, I'm involved with the Mechatronics and Robotics club where we build autonomous rovers to compete
        at an annual contest in Florida held by NASA. The club is a great way for me to apply what I've been 
        learning in the classroom to a platform that's exciting and engaging. Every time the club meets I 
        always learn something new about computer science and robotics. </p>

        <p>I've played trombone and euphonium for many years and I'm a member of the Cavalier Marching Band at UVA.
        Joining the marching band was one of the best decisions I've made in college. I've also met so many great 
        people through band and the performances always lead to exciting and memorable experiences. </p>
      </div>
      <br />

      <div className="ResumeEntries">
        <h2 className="titleFont">Professional Experience</h2>
        {experiences.map((o, index) => (
          <div key={index} className="ResumeEntry">
            <img className="ResumeEntryImage" src={o.image} alt={o.title}/>
            <div className="ResumeEntryBody">
              <div className="ResumeEntryBodyHeader">
                {/* <pre> </pre> */}
                <h3 className="ResumeEntryBodyHeaderTitle titleFont">{o.title}</h3>
                {/* <pre>  </pre> */}
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
        <br />
        <h3 className="titleFont">For more information, <span></span>
          {/* <a target="_blank" rel="noopener noreferrer" href="">my resume</a> or <span></span> */}
          <span><s>take a look at my resume</s> or </span>
          <a target="_blank" rel="noopener noreferrer" href="mailto:ephanover@gmail.com">send me an email</a>.
        </h3>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Resume;
