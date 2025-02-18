 

import "./App.css";

const events = [
  {
    date: "August 2024 - Sep 2024",
    title: "Aashiyana: Room, PG, and Mess Finder",
    description:
      "A MERN stack-based platform designed to help college students effortlessly find accommodations like rooms, PGs, and mess services near their institutions.",
    image: "Ashiyana.png",
    Github: "https://github.com/jhadarsh/Aashiyana.git",
    Website: "https://aashiyana-1.onrender.com/listings?",
    details:
      "Features: Includes a community-driven review system for authentic feedback, AI-powered price predictions for cost optimization, a user-friendly interface for seamless navigation, and real-time availability updates to simplify decision-making. Aashiyana bridges the gap between students and verified service providers, creating a trusted ecosystem.",
  },

  {
    date: "September 2024",
    title: "Blogify",
    description:
      "Your go-to platform for insightful articles on personal growth, technology, and sustainable living.",
    image: "Blogofy.png",
    Github: "https://github.com/jhadarsh/Blogify.git",
    Website: "https://blogify-p6e0.onrender.com/",
    details:
      "Features: A seamless and user-friendly blogging platform offering a curated selection of content to inspire, educate, and inform readers. Categories include self-help, tech trends, and eco-friendly practices.",
  },
  {
    date: "July 2024",
    title: "Simon Says",
    description:
      "A fun and interactive memory game where players replicate sequences of colors and sounds.",
    image: "simonsays.png",
    Github: "https://github.com/jhadarsh/Simonsaysgame.git",
    Website: "https://jhadarsh.github.io/Simonsaysgame/",
    details:
      "Features: Built with HTML, CSS, and JavaScript. Challenge your memory and reaction skills as the game progresses to increasingly complex levels. Visual and audio feedback ensures an engaging user experience. 🟢🔴🟡🔵",
  },
  {
    date: "July 2024",
    title: "DailyVibe",
    description:
      "An all-in-one web platform providing real-time weather updates, news, movie/TV recommendations, fun facts, jokes, and recipes.",
    image: "dailyvibe.png",
    Github: "https://github.com/jhadarsh/Dailyvibe.git",
    Website: "https://jhadarsh.github.io/Dailyvibe/",
    details:
      "Features: Built using HTML, CSS, JavaScript, Node.js, Express.js, and OpenAI API. Ensures a seamless, engaging, and multi-functional user experience. 🌟✨",
  },
  {
    date: "March 2024",
    title: "To-Do List",
    description:
      "A web application designed to help users efficiently organize and manage their tasks with ease.",
    image: "todo.png",
    Github: "https://github.com/jhadarsh/ToDoList.git",
    Website: "https://jhadarsh.github.io/ToDoList/",
    details:
      "Features: Built with HTML, CSS, and JavaScript. Allows users to create, edit, and track tasks with a minimalist and intuitive interface. Boosts productivity by simplifying task management. ✅📝",
  },
  {
    date: "December 2024",
    title: "CIFAR-10 Classification",
    description:
      "A CNN-based approach for classifying the CIFAR-10 dataset, exploring deep learning concepts through image classification.",
    image: " cifar10.png",
    Github:
      "https://github.com/jhadarsh/CIFAR-10-Classification-with-Convolutional-Neural-Networks-CNN-.git",
    Website: "/",
    details:
      "Features: Includes preprocessing, model design, training, and evaluation using TensorFlow or PyTorch. Offers insights into convolutional neural networks with visualizations and performance metrics. Ideal for beginners and experts in deep learning.",
  },
  {
    date: "January 2024 - Present",
    title: "Suspicious Activity Detection System",
    description:
      "A real-time AI model using YOLO for detecting suspicious behavior in public spaces and workplaces.",
    image: " models.jpeg",
    Github:
      "https://github.com/jhadarsh/Suspicious-Activity-Detection-System-YOLO-powered-.git",
    Website: "/",
    details:
      "Features: High-accuracy detection, real-time inference, and alert integration for enhanced safety. Useful for law enforcement, surveillance, and smart city applications. Ensures public safety by leveraging advanced AI technology.",
  },
];
import React, { useRef , useState } from "react";
import BottomNavbar from "./BottomNavbar";
import AudioPlayer from "./AudioPlayer";
import BhagavadGita from "./gita";
import HeroSection from "./HeroSection";
import About from "./About";
import SelectActionCard from "./Skills";
import Ach from "./Ach";
import Timeline from "./Timeline";

function App() {
  // ✅ Create refs for each section
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const achRef = useRef(null);
  const timelineRef = useRef(null);
  const gitaRef = useRef(null);
  const heroRef = useRef(null);

  // ✅ Function to scroll smoothly to a section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-container">
      {/* ✅ Fixed Audio Player (Header) */}
      <AudioPlayer />

      {/* ✅ Page Sections */}
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><SelectActionCard /></div>
      <div ref={achRef}><Ach /></div>
      <div ref={timelineRef}><Timeline events={events} /></div>
      <div ref={gitaRef}><BhagavadGita /></div>
      <div ref={heroRef}><HeroSection /></div>

      {/* ✅ Fixed Bottom Navbar (Scrolls to Sections) */}
      <BottomNavbar
        scrollToSection={scrollToSection}
        refs={{ aboutRef, skillsRef, achRef, timelineRef, gitaRef, heroRef }}
      />
    </div>
  );
}

export default App;
 