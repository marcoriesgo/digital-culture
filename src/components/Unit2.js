import React, { Component } from "react";

import educationImage from "../img/educationImage.jpg";

class Unit2 extends Component {
  render() {
    return (
      <div className="unit-parent-container-one">


        <div className="unit1-project-left-container">
            <div className="resources-content-container">
                <h1 className="resources-title">Podcast Resources</h1>

                <h2 className="resources-section-header">Topic</h2>
                <p className="resources-section-content">In unit 2, we took some time to explore the concept of positive obsessions. In this podcast, I will be discussing my positive obsession with the United States' education system and its achievement gap, and will offer suggestions for how this problem could be solved.</p>
                <img src={educationImage} alt="Digital Culture" className="article-screenshot"/><br />
                
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
                <h2>Positive Obsession Project <span style={{color: 'rgba(6,57,84,1)'}}>- Unit 2</span> </h2>
                <h3 className="project-date">October 6, 2020</h3>
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