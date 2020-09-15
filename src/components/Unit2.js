import React, { Component } from "react";

import poster from "../img/poster.png";

class Unit2 extends Component {
  render() {
    return (
      <div className="unit-parent-container">
        <h1 className="unit-title">Positive Obsession Podcast Unit <span style={{color: 'rgba(6,57,84,1)'}}>- Unit 2</span> </h1>
        <div className="availability-box">
            <h2>Available September 29th, 2020</h2>
        </div>
        <div className="check-back-image-container">
            <img src={poster} alt="Digital Culture" className="project-screenshot"/>
        </div>
        <div className="check-back-message">
            <p>Hey there! You have come to the right place. In Unit 2, we will explore being heard, worldbuilding, and critical networks. Unfortunately, Unit 2's Positive Obsession podcast is still under way. Please make sure to check back on or after September 29th, 2020 to view the project and continue learning about digital culture.</p>
        </div>
      </div>
    );
  }
}
export default Unit2;