import React, { Component } from "react";

import article1 from "../img/article1.png";

import supporting1 from "../img/supporting1.png";
import supporting2 from "../img/supporting1.png";

import contrast1 from "../img/contrast1.png";
import contrast2 from "../img/contrast2.png";

class Unit3 extends Component {
  render() {
    return (
      <div className="unit-parent-container-one">
        <div className="unit1-project-left-container">
            <div className="resources-content-container">
                <h1 className="resources-title">Reading Resources</h1>
                <h2 className="resources-section-header">Topic</h2>
                <p className="resources-section-content">In this unit, we took some time to explore the topic of critical digital consumption. In Nicholas Carr's article "Is Google Making Us Stupid?" in <span style={{fontStyle: 'italic'}}>The Atlantic</span>, he writes about the ways in which new technologies are affecting people's consumption of new information. In this project, we reflect upon Carr's ideas, present supporting and contrasting evidence, and draw a conclusion about how we can make critical consumption benefit us online.</p>
                <img src={article1} alt="Digital Culture" className="article-screenshot"/><br />
                <a href="https://www.theatlantic.com/magazine/archive/2008/07/is-google-making-us-stupid/306868/" target="_blank" className="resource-link">Click here to read the article.</a>
                
                <h2 className="resources-section-header">Questions to Consider</h2>
                <ul>
                    <li>Why is it important for us to understand the digital tools we use online and the effect they have on our well-being? </li>
                    <li>How do we evaluate the quality of the content that we consume online?</li>
                    <li>How is technology changing the ways in which we communicate with each other and how is it impacting those social interactions?</li>
                    <li>What are some ways in which educators can incorporate technology into their courses while ensuring the high  standard of the content students are exposed to?</li>
                    <li>How can we ensure that future generations grow up with the ability to read carefully and absorb quality information?</li>
                </ul>
                
                <h2 className="resources-section-header">Coggle Mind Map</h2>
                <p className="resources-section-content">To view more information about Unit 1 and explore other concepts about digital culture, please click on the Coggle link below.</p>                
                <a href="https://coggle.it/diagram/X1bGwr2x3ka7jkx7/t/capstone-project-map-critical-consumption/4cc0fcf3532e715c6cfc5e21090eb11f9324505bf7c111e7d61fce8f8e3544c8" target="_blank" className="resource-link">View Marco's Mind Map on Coggle</a>
                <h2 className="resources-section-header">Contact</h2>
                <p className="resources-section-content">Please make sure to contact me if you want to delve deeper into the topic of critical consumption. I am always happy to discuss new ideas!</p>
                <a href = "mailto: mriesgo@sas.upenn.edu" className="resource-link">mriesgo@sas.upenn.edu</a>
            </div>
        </div>





        <div className="unit1-project-right-container">
            <div className="project-right-heading">
                <h1 className="project-header">Software Development in Schools</h1>
                <h2>Participatory Futures Project <span style={{color: 'rgba(6,57,84,1)'}}>- Unit 3</span> </h2>
                <h3 className="project-date">October 13, 2020</h3>
            </div>
            <div className="project-right-content-container">
            <div className="content-box-container">
                    <h2 className="project-content-header">Podcast</h2>
                    <h3 className="coggle-intro">Software Development Education in The United States</h3>
                    <h3 className="coggle-intro">Hosted by Marco Riesgo Almonacid</h3>
            </div>
            <div className="content-box-container">
                    <h2 className="project-content-header">Podcast Transcript</h2>
                    <h3 className="coggle-intro">Software Development Education in The United States</h3>
                    <h3 className="coggle-intro">Transcript written by Marco Riesgo</h3>
            </div>
            <div className="content-box-container">
                <h2 className="project-content-header">Suggested Readings</h2>
                <div className="readings-top">
                    <h2>Supporting Articles</h2>
                    <div className="article-one">
                        <a href="https://fortune.com/2016/02/03/nicholas-carr-internet/" target="_blank" className="article-link">The Internet Makes Us Stupid and Here's Why</a> <br />
                        <p className="author-name">By Kabir Sehgal</p>
                        <img src={supporting1} alt="Digital Culture" className="readings-screenshot"/>
                    </div>
                    <div className="article-two">
                        <a href="https://hightechforum.org/the-internet-is-making-us-stupid/" target="_blank" className="article-link">The Internet is Making Us Stupid</a> <br />
                        <p className="author-name">By Richard Bennett</p>
                        <img src={supporting2} alt="Digital Culture" className="readings-screenshot"/>
                    </div>
                </div>
                <div className="readings-bottom">
                    <h2>Contrasting Articles</h2>
                    <div className="article-one">
                        <a href="https://www.discovermagazine.com/mind/how-google-is-making-us-smarter" target="_blank" className="article-link">How Google Is Making Us Smarter</a> <br />
                        <p className="author-name">By Carl Zimmer</p>
                        <img src={contrast1} alt="Digital Culture" className="readings-screenshot"/>
                    </div>
                    <div className="article-two">
                        <a href="https://www.pbs.org/newshour/science/will-google-make-us-smarter-internet-experts-say-yes-in-some-ways" target="_blank" className="article-link">Will Google Make Us Smarter? Internet Experts Say Yes, but With Caveats</a> <br />
                        <p className="author-name">By an anonymous author.</p>
                        <img src={contrast2} alt="Digital Culture" className="readings-screenshot"/>
                    </div>
                    </div>
                </div>
                
                <div className="content-box-container">
                    <h2 className="project-content-header">Coggle Mind Map</h2>
                    <h3 className="coggle-intro">The following is a the Coggle Mind Map I used to guide me in the process of exploring the impact of digital consumption. Take a look and feel free to use it as a starting point for future research!</h3>
                    <iframe width='75%' height='75%' src='https://embed.coggle.it/diagram/X1bGwr2x3ka7jkx7/4cc0fcf3532e715c6cfc5e21090eb11f9324505bf7c111e7d61fce8f8e3544c8' frameborder='0' className="coggle-frame" allowfullscreen></iframe>
                </div>
            </div>


        </div>
      </div>
    );
  }
}
export default Unit3;