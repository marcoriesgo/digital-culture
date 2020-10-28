import React, { Component } from "react";

import poster from "../img/poster.png";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-content-container">
          <h1>Digital Literacy and Cultural Change</h1>
          <h3>By Marco Riesgo</h3>
          <div className="home-image-container">
              <img src={poster} alt="Digital Culture" className="project-screenshot"/>
          </div>
          <div className="check-back-message">
              <p>Hello and welcome to Digital Literacy and Cultural Change. Through a series of four unit projects, we will be exploring the tools and content that we use to consume information online. We will be using several different communication tools to help us learn more about how technology is changing the way we communicate by looking at things such as genre, rhetoric, and purpose. Click on the  projects above to explore digital communication and how it affects us as a society.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;