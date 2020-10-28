import React, { Component } from "react";

import poster from "../img/poster.png";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-content-container">
          <h1 className="home">Digital Literacy and Cultural Change</h1>
          <h3>By Marco Riesgo</h3>
          <div className="home-image-container">
              <img src={poster} alt="Digital Culture" className="project-screenshot"/>
          </div>
          <div className="content-box-container">
            <h2 className="project-content-header">Letter from the Editor</h2>
                   
          </div>
        </div>
      </div>
    );
  }
}
export default Home;