import React, { Component } from "react";

import poster from "../img/poster.png";

class Unit4 extends Component {
  render() {
    return (
      <div className="unit-parent-container">
        <h1 className="unit-title">Digital Portfolio Project <span style={{color: 'rgba(6,57,84,1)'}}>- Unit 4</span> </h1>
        <div className="availability-box">
            <h2>Available October 27th, 2020</h2>
        </div>
        <div className="check-back-image-container">
            <img src={poster} alt="Digital Culture" className="project-screenshot"/>
        </div>
        <div className="check-back-message">
            <p>Hey there! You have come to the right place. In Unit 4, we will explore reflexive design and the symbol of sankofa. Unfortunately, Unit 4's Digital Portfolio project is still under way. Please make sure to check back on or after October 27th, 2020 to view the project and continue learning about digital culture.</p>
        </div>
      </div>
    );
  }
}
export default Unit4;