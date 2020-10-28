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

          <div className="content-box-container-home">
                    <h2 className="project-content-header">Letter From the Editor</h2>
                    <p className="personal-reflection-content">
                      Hello everyone and welcome to this podcast. Today, we are going to be discussing the concept of positive obsessions. Then, I will dive deeper into my own personal positive obsession and passion for education equity in the United States. As Octavia Butler describes it, a positive obsession is an uncontrollable passion one feels towards a mission. Unlike a normal hobby one might have, we feel as though we are unable to control it. Oftentimes, our positive obsession is a major part of our identity. In a way, our positive obsession guides the way for us to build our identity as we build connections and learn more about the topics we are passionate about.
                    </p>
                    
            </div>

        </div>
      </div>
    );
  }
}
export default Home;