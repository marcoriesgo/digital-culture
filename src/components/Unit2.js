import React, { Component } from "react";

import codeImage from "../img/codeimage.jpg";

import codingpic1 from "../img/codingpic1.png";
import codingpic2 from "../img/codingpic2.png";
import codingpic3 from "../img/codingpic3.png";
import codingpic4 from "../img/codingpic4.png";


class Unit2 extends Component {
  render() {
    return (
      <div className="unit-parent-container-one">


        <div className="unit1-project-left-container">
            <div className="resources-content-container">
                <h1 className="resources-title">Podcast Resources</h1>

                <h2 className="resources-section-header">Topic</h2>
                <p className="resources-section-content">In unit 3, we took some time to explore the conceepts of making change, active participation in digital social change, and inclusion of minorities. For this participatory futures project, I will be exploring the one thing that I would change about humanity to ensure our future thriving. Therefore, I propose that world countries, specifically the United States, begins to require their school systems to teach software development. To clearly share my vision, I will be exploring the technology that could help us realize this change, the potential consequences, and the strategy for implementing this change. Feel free to explore more resources available on this page and visit all the resources in order to learn more about software development in schools. Hope you enjoy!</p>
                <img src={codeImage} alt="Digital Culture" className="article-screenshot"/><br />
                
                <h2 className="resources-section-header">Coggle Mind Map</h2>
                <p className="resources-section-content">To learn more information about Unit 2 and explore other ideas about the education gap in the United States, please click on the Coggle link below.</p>                
                <a href="https://coggle.it/diagram/X1bGwr2x3ka7jkx7/t/capstone-project-map-critical-consumption/4cc0fcf3532e715c6cfc5e21090eb11f9324505bf7c111e7d61fce8f8e3544c8" target="_blank" className="resource-link">View Marco's Mind Map on Coggle</a>
                
                <h2 className="resources-section-header">Contact</h2>
                <p className="resources-section-content">Interested in learning even more about the education gap in the United States? I am always happy to discuss ideas about the improvement of the education system. Feel free to reach out to me at the link below!</p>
                <a href = "mailto: mriesgo@sas.upenn.edu" className="resource-link">mriesgo@sas.upenn.edu</a>
                
            </div>
        </div>

        <div className="unit1-project-right-container">
            <div className="project-right-heading">
                <h1 className="project-header">The USA's Education System and its Achievement Gap</h1>
                <h2>Participatory Futures Project <span style={{color: 'rgba(6,57,84,1)'}}>- Unit 3</span> </h2>
                <h3 className="project-date">October 13, 2020</h3>
            </div>
            <div className="project-right-content-container">
            <div className="content-box-container">
                    <h2 className="project-content-header">Podcast</h2>
                    <h3 className="coggle-intro">Achievement Gap in the United States Podcast.</h3>
                    <h3 className="coggle-intro">Hosted by Marco Riesgo Almonacid</h3>
            </div>
            <div className="content-box-container">
                    <h2 className="project-content-header">Podcast Transcript</h2>
                    <h3 className="coggle-intro">Achievement Gap in the United States Podcast.</h3>
                    <h3 className="coggle-intro">Transcript written by Marco Riesgo</h3>
            </div>
            
            </div>
        </div>

      

      </div>
    );
  }
}
export default Unit2;