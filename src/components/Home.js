import React, { Component } from "react";

import poster from "../img/poster.png";

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

        </div>
      </div>
    );
  }
}
export default Home;