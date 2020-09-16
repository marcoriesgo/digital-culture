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
                <p className="resources-section-content">Topic</p>
                
                <h2 className="resources-section-header">Contact</h2>
                <p className="resources-section-content">Please make sure to contact me if you want to delve deeper into the topic of critical consumption. I am always happy to discuss new ideas!</p>
                <a href = "mailto: marco.riesgo.almonacid@live.com" className="resources-section-content">marco.riesgo.almonacid@live.com</a>
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