import React, { Component } from "react";

import codeImage from "../img/codeimage.jpg";

import codingpic1 from "../img/codingpic1.png";
import codingpic2 from "../img/codingpic2.png";
import codingpic3 from "../img/codingpic3.png";
import codingpic4 from "../img/codingpic4.png";

import codingPodcast from "../img/codingPodcast.mp3"

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
                    <audio controls>
                      <source src={codingPodcast} type="audio/mpeg"/>
                    </audio>
            </div>
            <div className="content-box-container">
                    <h2 className="project-content-header">Podcast Transcript</h2>
                    <p className="personal-reflection-content">
                        Hello everyone and welcome to this podcast. In this episode, we are going to be exploring the topic of participatory futures and making changes. Throughout unit three, we spent time learning about Octavia Butler’s piece “The Book of Martha”. In her story, Martha is given the power to realize one fundamental change to humanity. Through this work, Butler explores the topic of consequences and places great emphasis on choosing what we want carefully.
                    </p>
                    <p className="personal-reflection-content">
                        If I could change one thing about humanity that would ensure that we all survive and thrive in the future, I would have countries make software development education in public education systems a requirement. This is because of the incredibly large amount of new technologies that are currently coming out and will become the professional tools of future generations. I believe that making this change in education systems will completely change the ways in which students are prepared for the professional environment and will empower many more students to innovate and speak their voice.
                    </p>
                    <p className="personal-reflection-content">
                        In order to realize this vision, I believe that every country with the economic ability to do so must help young students begin learning software technologies and development since primary school. Additionally, companies and governments would have to work together to determine the best technologies to teach children and agree on how to implement it into the classroom. Perhaps every student should be given a device to help them learn and develop their skills. 
                    </p>
                    <p className="personal-reflection-content">
                        Currently, thousands of new technological tools are being released for people to learn how to code. In fact, a transition into software development education has never been easier. Every day, new tools are being developed for students to learn to code. Additionally, I imagine that in the future, more and more technological tools will be released for students to learn. I believe that this wide variety of technological tools will help realize this change by enabling schools to make a smooth transition in the coming years. 
                    </p>
                    <p className="personal-reflection-content">
                        Up to this point, the available research and experts in the field are extremely in favor of making software development a requirement in schools. Below, you will find articles that give great insight into this potential change. Evidently a transition into more coding education would be an expensive and time-consuming measure to take. As Stephen Merrill explains in his article “The Future of Coding in Schools”, this change will require many current educational structural barriers to be broken down. Because of this available research, I believe that countries would need to adopt a non-linear and iterative emergence strategy as described by Adrienne Maree Brown. This new adoption would require schools to continually adopt new processes and repeatedly iterate.   
                    </p>
                    <p className="personal-reflection-content">
                        I have been learning software development for a long time and currently work at a software company that helps clients implement new technologies into their applications. I started learning about software at a very young age, and I think that this knowledge has paved a very unique path for me and shaped my passions. I continue to help clients with technology needs every day and hope that in the future I can help young students continue learning code.  
                    </p>
                    <p className="personal-reflection-content">
                        As with all new changes, challenges will come. I believe that requiring coding education in schools would give more students to speak their voice through technological innovation. In order to grapple with the potential challenges to this vision, education systems will have to work very hard to figure out new ways in which to teach students coding skills. I believe current coding education organizations will play a major role in helping education systems deal with the challenges that could arise along the way. 
                    </p>
                    <p className="personal-reflection-content">
                        Now, I invite you to read more about coding education through the suggested readings linked on this page. I hope that this may spark a new interest and perhaps even a new positive obsession to pursue. I have also linked several great organizations that can help you develop your software skills in the reading resources section. I hope this encourages you to learn new skills and think deeper about participatory futures.
                    </p>
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
                <p className="resources-section-content">In unit 3, we took some time to explore the concepts of making change, active participation in digital social change, and inclusion of minorities. For this participatory futures project, I will be exploring the one thing that I would change about humanity to ensure our future thriving. Therefore, I propose that world countries, specifically the United States, begins to require their school systems to teach software development. To clearly share my vision, I will be exploring the technology that could help us realize this change, the potential consequences, and the strategy for implementing this change. Feel free to explore all of the resources in order to learn more about software development in schools. Hope you enjoy!</p>
                <img src={codeImage} alt="Digital Culture" className="article-screenshot"/><br />
                
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
                <p className="resources-section-content">If you are interested in learning to code, check out these awesome applications. Maybe you will find your own new positive obsession!</p>
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