import React, { Component } from "react";



class Unit1 extends Component {
  render() {
    return (
      <div className="unit-parent-container-one">
        <div className="unit1-project-left-container">
            <div className="resources-content-container">
                <h1 className="resources-title">Reading Resources</h1>
                <h2 className="resources-section-header">Topic</h2>
                <p className="resources-section-content">Topic</p>
                
                <h2 className="resources-section-header">Supporting Articles</h2>
                <p className="resources-section-content">Topic</p>
                
                <h2 className="resources-section-header">Contrasting Articles</h2>
                <p className="resources-section-content">Topic</p>
                
                <h2 className="resources-section-header">Questions to Consider</h2>
                <p className="resources-section-content">Topic</p>
                
                <h2 className="resources-section-header">Coggle Mind Map</h2>
                <p className="resources-section-content">To view more information about Unit 1 and explore other concepts about digital culture, please click on the Coggle link below.</p>                
                <a href="https://coggle.it/diagram/X1bGwr2x3ka7jkx7/t/capstone-project-map-critical-consumption/4cc0fcf3532e715c6cfc5e21090eb11f9324505bf7c111e7d61fce8f8e3544c8" target="_blank" className="resources-section-content">View Marco's Mind Map on Coggle</a>
                <h2 className="resources-section-header">Contact</h2>
                <p className="resources-section-content">Please make sure to contact me if you want to delve deeper into the topic of critical consumption. I am always happy to discuss new ideas!</p>
                <a href = "mailto: mriesgo@sas.upenn.edu" className="resources-section-content">mriesgo@sas.upenn.edu</a>
            </div>
        </div>
        <div className="unit1-project-right-container">
            <h1>Critical Consumption</h1>
            <h2 className="">Blended Response Project <span style={{color: 'rgba(6,57,84,1)'}}>- Unit 1</span> </h2>
            <h3 className="project-date">September 15, 2020</h3>
        </div>
      </div>
    );
  }
}
export default Unit1;