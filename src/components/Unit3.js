import React, { Component } from "react";

import poster from "../img/poster.png";

class Unit3 extends Component {
  render() {
    return (
      <div className="unit-parent-container">
        <h1 className="unit-title">Participatory Futures Project <span style={{color: 'rgba(6,57,84,1)'}}>- Unit 3</span> </h1>
        <div className="availability-box">
            <h2>Available October 13th, 2020</h2>
        </div>
        <div className="check-back-image-container">
            <img src={poster} alt="Digital Culture" className="project-screenshot"/>
        </div>
        <div className="check-back-message">
            <p>Hey there! You have come to the right place. In Unit 3, we will explore making change and public participation. Unfortunately, Unit 3's Participatory Futures project is still under way. Please make sure to check back on or after October 13th, 2020 to view the project and continue learning about digital culture.</p>
        </div>
      </div>
    );
  }
}
export default Unit3;