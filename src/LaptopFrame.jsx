// src/CodeEditor.jsx
import React from "react";
import "./LaptopTextEditor.css";

const TextEditor = () => {
 

  return (
    <div className="editor-container">
      <div className="editor-box">
        <div className="editor-header">
          <div className="circle red"></div>
          <div className="circle yellow"></div>
          <div className="circle green"></div>
          <h1 className="upper-title">Text-Editor</h1>
        </div>

        <div className="editor-content">
          <section class="bg-gray-900 text-white  editor-main">
            <div class="container mx-auto px-6">
              <h1 class="text-4xl font-bold text-center mb-6">About Me</h1>
              <div class="text-lg leading-relaxed">
                <p class="mb-4">
                  Hello! My name is Adarsh, and I am an{" "}
                  <span class="text-blue-500">
                    AI/ML Research Intern at <b>SAG DRDO</b> 
                  </span>{" "}
                  with a passion for leveraging technology to solve real-world
                  problems. As the{" "}
                  <span class="text-blue-500">
                    Technical Team Lead of GDGC ADGITM
                  </span>
                  , I thrive on empowering communities and fostering innovation.
                </p>
                <p class="mb-4">
                  I have a strong foundation in web development, having learned
                  through{" "}
                  <span class="text-blue-500">
                    Apna College under the guidance of Sradha Khapra Ma'am
                  </span>
                  . My experience includes creating impactful projects such as{" "}
                  <span class="text-blue-500">Aashiyana</span>,{" "}
                  <span class="text-blue-500">CampusMitra</span>, and{" "}
                  <span class="text-blue-500">Daily Vibe</span>. My dedication
                  and problem-solving skills have also helped me win prestigious
                  hackathons like{" "}
                  <span class="text-blue-500">Hack with MAIT</span> and the{" "}
                  <span class="text-blue-500">BVCOE Hackathon</span>.
                </p>
                <p class="mb-4">
                  I have had the privilege of working at{" "}
                  <span class="text-blue-500">DRDO</span> and contributing to
                  projects aimed at improving{" "}
                  <span class="text-blue-500">women's safety</span> through
                  cutting-edge AI technologies. My current focus is on building
                  predictive models for{" "}
                  <span class="text-blue-500">court case outcomes</span>,
                  enhancing justice delivery systems, and creating solutions for
                  traffic decongestion using{" "}
                  <span class="text-blue-500">RNN</span> and{" "}
                  <span class="text-blue-500">LSTM</span> models.
                </p>
                <p class="mb-4">
                  Academically, I am pursuing{" "}
                  <span class="text-blue-500">BTech at GGSIPU</span>,
                  maintaining a{" "}
                  <span class="text-blue-500">
                    9.22 CGPA till the 3rd semester
                  </span>
                  . My educational journey began with achieving{" "}
                  <span class="text-blue-500">84% in my 10th grade (BSEB)</span>{" "}
                  and{" "}
                  <span class="text-blue-500">80% in my 12th grade (CBSE)</span>
                  . I am also diving deep into{" "}
                  <span class="text-blue-500">deep learning</span>, enhancing my
                  expertise in the field.
                </p>
                <p class="mb-4">
                  My goal is to create impactful technologies that drive
                  societal change, inspire innovation, and improve the world
                  around us. Let's connect and build something amazing together!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
