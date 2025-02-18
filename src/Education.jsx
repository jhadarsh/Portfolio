import React from "react";
import "./Education.css";

const timelineData = [
  {
    year: "2020",
    title: "Matriculation Examination",
    description:
      "I completed my 10th-grade matriculation under the Bihar School Examination Board (BSEB) with an impressive score of 84%",
  },
  {
    year: "2022",
    title: "Intermediate Examination",
    description:
      "I completed my intermediate education under the Central Board of Secondary Education (CBSE) with a score of 80%",
  },
  {
    year: "2023 - Present",
    title: "Btech (IT)",
    description:
      "I am currently pursuing a BTech degree at Guru Gobind Singh Indraprastha University (GGSIPU) and have maintained a strong CGPA of 9.22 till my 3rd semester ",
  },
];

const Education = () => {
  return (
    <>
      <h2 className="eduheading"> Educations </h2>
      <div className="timeline">
        {timelineData.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="dot"></div>
            <div className="line"></div>
            <div className="content">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p> 
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
