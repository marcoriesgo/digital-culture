import React, { Component } from "react";

import article1 from "../img/article1.png";

import codingpic1 from "../img/codingpic1.png";
import codingpic2 from "../img/codingpic2.png";
import codingpic3 from "../img/codingpic3.png";
import codingpic4 from "../img/codingpic4.png";


class Unit3 extends Component {
  render() {
    return (
      <div className="unit-parent-container-one">
        





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
                        <a href="https://www.edutopia.org/article/future-coding-schools" target="_blank" className="article-link">The Future of Coding in Schools</a> <br />
                        <p className="author-name">By Stephen Merrill</p>
                        <img src={codingpic1} alt="Digital Culture" className="readings-screenshot"/>
                    </div>
                    <div className="article-two">
                        <a href="https://time.com/2881453/programming-in-schools/" target="_blank" className="article-link">Why Basic Coding Should Be a Mandatory Class in Junior High</a> <br />
                        <p className="author-name">By Tim Bajarin</p>
                        <img src={codingpic2} alt="Digital Culture" className="readings-screenshot"/>
                    </div>
                </div>
                <div className="readings-bottom">
                    <h2>Why Schools Have Not Yet Adapted</h2>
                    <div className="article-one">
                        <a href="https://www.edsurge.com/news/2018-12-15-3-reasons-students-aren-t-into-computer-science-yet" target="_blank" className="article-link">3 Reasons Students Aren’t Into Computer Science—Yet</a> <br />
                        <p className="author-name">By Jaime Perez</p>
                        <img src={codingpic3} alt="Digital Culture" className="readings-screenshot"/>
                    </div>
                    <div className="article-two">
                        <a href="https://www.seattletimes.com/opinion/why-we-need-to-teach-all-students-computer-science-skills/" target="_blank" className="article-link">Why doesn’t every school offer computer science classes?</a> <br />
                        <p className="author-name">By Hadi Partovi</p>
                        <img src={codingpic4} alt="Digital Culture" className="readings-screenshot"/>
                    </div>
                    </div>
                </div>
                
                <div className="content-box-container">
                    <h2 className="project-content-header">Coggle Mind Map</h2>
                    <h3 className="coggle-intro">The following is the Coggle Mind Map I used to guide me in the process of exploring the current state of coding education in the United States. Navigate to "Capstone Project 3 - Participatory Futures" to use it as a starting point for future research!</h3>
                    <iframe width='75%' height='75%' src='https://embed.coggle.it/diagram/X1bGwr2x3ka7jkx7/4cc0fcf3532e715c6cfc5e21090eb11f9324505bf7c111e7d61fce8f8e3544c8' frameborder='0' className="coggle-frame" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div className="unit1-project-left-container">
            <div className="resources-content-container">
                <h1 className="resources-title">Reading Resources</h1>
                <h2 className="resources-section-header">Topic</h2>
                <p className="resources-section-content">In unit 3, we took some time to explore the topic of critical digital consumption. In Nicholas Carr's article "Is Google Making Us Stupid?" in <span style={{fontStyle: 'italic'}}>The Atlantic</span>, he writes about the ways in which new technologies are affecting people's consumption of new information. In this project, we reflect upon Carr's ideas, present supporting and contrasting evidence, and draw a conclusion about how we can make critical consumption benefit us online.</p>
                <img src={article1} alt="Digital Culture" className="article-screenshot"/><br />
                <a href="https://www.theatlantic.com/magazine/archive/2008/07/is-google-making-us-stupid/306868/" target="_blank" className="resource-link">Click here to read the article.</a>
                
                <h2 className="resources-section-header">The Book of Martha</h2>
                <p className="resources-section-content">In <span style={{fontStyle: 'italic'}}><a href = "http://web.archive.org/web/20070312043050/www.scifi.com/scifiction/originals/originals_archive/butler2/butler21.html" target="_blank" className="strategyLink">The Book of Martha</a></span>, Octavia Butler details the challenges faced when trying to build a perfect world. In particular, Butler places great emphasis on the nature of actions and consequences. As the passage explains, everything we do has positive and negative consequences. Therefore, it is very important to explore both the negative and positive consequences of implementing coding education in American school systems. Additionally, it is important to explore the reasons why many schools have not yet adapted to development education. Perhaps, more software education would suppress other interests children may have. I invite you to think about your own potential consequences from realizing my proposal of rquiring schools to teach coding. As you explore the consequences this could have on society, refer to the reflection questions below to guide you.</p>                


                <h2 className="resources-section-header">Emergent Strategy</h2>
                <p className="resources-section-content">In <span style={{fontStyle: 'italic'}}><a href = "https://static1.squarespace.com/static/5ad0d247af209613040b9ceb/t/5db5a44b0e6ba42da976cce7/1572185168567/brown+2017-Emergent+Strategy+full+book.pdf" target="_blank" className="strategyLink">Emergent Strategy</a></span>, Adrienne Maree Brown details several strategies through which groups and individuals can plan and cause societal change. I have suggested making programming a requirement in schools, which is a very complex goal to achieve. Therefore, I believe that the element of emergent strategy that would best fit my proposal would be "non-linear and iterative". the process of achieving this goal would be extremely iterative, as the educational process would need to be fine-tuned and the courses would have to be updated regularly to stay up-to-date with technology innovation. The process would be very unpredictable and would need to be worked on for a long time, making it "non-linear and iterative".</p>                
                

                <h2 className="resources-section-header">Questions to Consider</h2>
                <ul>
                    <li>Why is it important for us to evaluate current software development education in American school systems? </li>
                    <li>In what ways can coding education encourage minority inclusion and give a voice to the disadvantaged?</li>
                    <li>Why is it important for future gnerations to have a great foundation in technological tools as they become adults?</li>
                    <li>In what ways would making coding education a school rquirement positively affect society? What would the negative effects be?</li>
                    <li>How will current and future technology enable us to make a smooth transition into software deevelopment education?</li>
                    <li>In what ways can governments ensure that corporations do not take advantage of an educational transition into further technology education?</li>
                </ul>

                
                <h2 className="resources-section-header">Coggle Mind Map</h2>
                <p className="resources-section-content">To learn more information about Unit 3 and explore other ideas about software development education in the United States, please click on the Coggle link below.</p>                
                <a href="https://coggle.it/diagram/X1bGwr2x3ka7jkx7/t/capstone-project-map-critical-consumption/4cc0fcf3532e715c6cfc5e21090eb11f9324505bf7c111e7d61fce8f8e3544c8" target="_blank" className="resource-link">View Marco's Mind Map on Coggle</a>
                
                <h2 className="resources-section-header">Apps for Learning to Code </h2>
                <p className="resources-section-content">If you are interested in learning to code, check out these awesome applications:</p>
                <ul>
                <li>
                    <a href = "https://www.udacity.com/" target="_blank" className="app-link">Udacity</a> <br />
                </li>
                <li>
                    <a href = "https://www.udemy.com/" target="_blank" className="app-link">Udemy</a><br />
                </li>
                <li>
                    <a href = "https://codehubplatform.github.io/" target="_blank" className="app-link">Codehub</a><br />
                </li>
                <li>
                    <a href = "https://www.programming-hero.com/" target="_blank" className="app-link">Programming Hero</a><br />
                </li>
                <li>
                    <a href = "https://www.sololearn.com/" target="_blank" className="app-link">Sololearn</a>
                
                </li>
                </ul>                
                
                
                <h2 className="resources-section-header">Contact</h2>
                <p className="resources-section-content">Interested in learning even more about the current state of coding education? I am always happy to discuss new ideas about the future of coding education. Feel free to reach out to me at the link below!</p>
                <a href = "mailto: mriesgo@sas.upenn.edu" className="resource-link">mriesgo@sas.upenn.edu</a>

                
            </div>
        </div>



      </div>
    );
  }
}
export default Unit3;