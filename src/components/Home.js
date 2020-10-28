import React, { Component } from "react";

import poster from "../img/poster.png";

import narrativePodcast from "../img/narrativePodcast.mp3";


class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-content-container">
 
          <div className="home-image-container">
              <img src={poster} alt="Digital Culture" className="project-screenshot"/>
          </div>
          
          <div className="right-home-top-container">
            <h1>Digital Literacy and Cultural Change</h1>
            <h3>By Marco Riesgo</h3>
          </div>

          <div className="content-box-container-home">
            <h2 className="project-content-header">Letter From the Editor</h2>
            <p className="personal-reflection-content">
              Dear reader,
            </p>
            <p className="personal-reflection-content">
              Thank you for visiting my digital portfolio website. Over the past eight weeks, I have had the opportunity to explore some of the ideas and concepts that govern current online communication norms and behaviors. Through extensive peer reviews and collaboration, these projects have become the basis for my exploration of online culture. In this portfolio, I will walk you through the different projects that I have created and delve deep into ideas and concepts regarding this topic. To learn about my portfolio, I first recommend that one begins with the brief podcast below titled “Digital Literacy (Meta)Narrative” and moves on to visit the different tabbed projects. In the podcast, I talk generally about the different things that have most stuck out to me in my exploration of digital spaces. 
            </p>  
            <p className="personal-reflection-content">
              In this modern era, we must continuously evaluate whether the information that we consume is reliable. Therefore, the first project we will look at in the “Critical Consumption” tab will implore us to explore how the internet is affecting human intellect and I ask you to think deeply about the ways in which you consume content online, and whether you are doing so responsibly. Then, in the “Positive Obsession” section, we will explore Octavia Butler’s concept of Positive Obsession and I will tell you about my passion for working on education equity. This critical element of digital culture drives online human interactions. and I hope it will help you reflect on the ways that you use online content to express your passions.
            </p>  
            <p className="personal-reflection-content">
              Furthermore, in the section “Participatory Future,” I will be telling you about how requiring coding education in education systems could improve our workforce and I’ll explore the ways in which coding education could help us achieve a better future. In this important section, I also ask that you think of your vision of the perfect future world and how current and future technology can help us achieve it. And finally, in the “Serendipity” section, we will explore an online rabbit hole that I explored regarding vehicle startups, and I will ask you to do the same and allow yourself to delve into a topic you are interested in.
            </p>  
            <p className="personal-reflection-content">
              Throughout the past eight weeks, I have repeatedly edited and modified this website to be the best representation of my learnings in digital culture. The extensive use of Coggle mind maps has also helped me ideate and iterate throughout the process. I hope that my portfolio can help guide the way for your own personal exploration of digital culture and social change.
            </p>  
            <p className="personal-reflection-content">
              Sincerely,
            </p>
            <p className="personal-reflection-content">
              Marco Riesgo Almonacid
            </p>                     
          </div>

          <div className="content-box-container-home">
            <h2 className="project-content-header">Digital Literacy (Meta)Narrative</h2>
            <audio controls>
              <source src={narrativePodcast} type="audio/mpeg"/>
            </audio>  
          </div>

        </div>
      </div>
    );
  }
}
export default Home;