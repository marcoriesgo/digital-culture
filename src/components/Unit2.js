import React, { Component } from "react";

import educationImage from "../img/educationImage.jpg";

import educationPodcast from "../img/educationPodcast.mp3";

class Unit2 extends Component {
  render() {
    return (
      <div className="unit-parent-container-one">


        <div className="unit1-project-left-container">
            <div className="resources-content-container">
                <h1 className="resources-title">Podcast Resources</h1>

                <h2 className="resources-section-header">Topic</h2>
                <p className="resources-section-content">In unit 2, we took some time to explore the concept of positive obsessions. In this podcast, I will be discussing my positive obsession of trying to narrow the achievement gap and discussing the current state of the United States' education system.</p>
                <img src={educationImage} alt="Digital Culture" className="article-screenshot"/><br />
                
                <h2 className="resources-section-header">Coggle Mind Map</h2>
                <p className="resources-section-content">To learn more information about Unit 2 and explore other ideas about the education gap in the United States, please click on the Coggle link below.</p>                
                <a href="https://coggle.it/diagram/X1bGwr2x3ka7jkx7/t/capstone-project-map-critical-consumption/4cc0fcf3532e715c6cfc5e21090eb11f9324505bf7c111e7d61fce8f8e3544c8" target="_blank" className="resource-link">View Marco's Mind Map on Coggle</a>
                
                <h2 className="resources-section-header">Contact</h2>
                <p className="resources-section-content">Interested in learning even more about the education gap in the United States? I am always happy to discuss ideas about the improvement of the education system. Feel free to reach out to me at the link below!</p>
                <a href = "mailto: mriesgo@sas.upenn.edu" className="resource-link">mriesgo@sas.upenn.edu</a>
                
            </div>
        </div>

        <div className="unit1-project-right-container">
            <div className="project-right-heading">
                <h1 className="project-header">The USA's Education System and its Achievement Gap</h1>
                <h2>Positive Obsession Project <span style={{color: 'rgba(6,57,84,1)'}}>- Unit 2</span> </h2>
                <h3 className="project-date">October 6, 2020</h3>
            </div>
            <div className="project-right-content-container">
            <div className="content-box-container">
                    <h2 className="project-content-header">Podcast</h2>
                    <audio controls>
                      <source src={educationPodcast} type="audio/mpeg"/>
                    </audio>
            </div>
            <div className="content-box-container">
                    <h2 className="project-content-header">Podcast Transcript</h2>
                    <p className="personal-reflection-content">
                      Hello everyone and welcome to this podcast. Today, we are going to be discussing the concept of positive obsessions. Then, I will dive deeper into my own personal positive obsession and passion for education equity in the United States. As Octavia Butler describes it, a positive obsession is an uncontrollable passion one feels towards a mission. Unlike a normal hobby one might have, we feel as though we are unable to control it. Oftentimes, our positive obsession is a major part of our identity. In a way, our positive obsession guides the way for us to build our identity as we build connections and learn more about the topics we are passionate about.
                    </p>
                    <p className="personal-reflection-content">
                      For me, my positive obsession has focused around improving educational equity around the world. This is something that I have been obsessed with for many years now. Unlike my other interests and hobbies, I am always striving to do something that will improve educational equity. Looking back, I believe this obsession began early in elementary school. At 7 years old, my family moved from Spain to England, but I did not know how to speak English. Because of this, I personally had to live through the disadvantages that exist in education systems. Over the course of my schooling years, I attended 7 different schools in 5 different cities around the world. I believe these constant changes during my schooling years led me to develop a passion for lowering the number of disadvantages that students are exposed to.
                    </p>
                    <p className="personal-reflection-content">
                      Throughout the past few years, I have spent very long amounts of time researching and learning about global education systems. I have volunteered for multiple education organizations around the world and am passionate about making student achievement in the United States possible for undeserved students. Additionally, I began a nonprofit organization called The Hidden Children of India, which helps support almost 60 orphan’s educational costs in the slums of Jaipur. 
                    </p>
                    <p className="personal-reflection-content">
                      Evidently, my positive obsession has completely shaped my identity by defining the people that I surround myself and the types of activities I engage in. Positive obsessions can help us reflect about our own identity, and I invite you to explore the following: what is your positive obsession? How do you think it has influenced who you are today?
                    </p>
                    <p className="personal-reflection-content">
                      Now, I would like to dive deeper into my positive obsession of educational equity. I am going to be discussing the current state of United States education, comparing our system to other nations’ education systems, and exploring the topic of how to solve the achievement gap in education. I believe that the United States still has work to complete in their efforts to become a leading nation in education. 
                    </p>
                    <p className="personal-reflection-content">
                      According to the <a href="https://edpolicy.stanford.edu/library/blog/295" target="_blank" className="stats-link">Stanford Center for Opportunity</a>, currently, the United States has the highest child poverty rate of any industrialized country. This causes children from low-income backgrounds to suffer poorer performance, as they are unable to concentrate on their schoolwork. 
                    </p>
                    <p className="personal-reflection-content">
                      Furthermore, according to the <a href="https://ncee.org/what-we-do/center-on-international-education-benchmarking/top-performing-countries/" target="_blank" className="stats-link">National Center On Education</a>, the United States is not one of the Top 10 best performing education systems in the world, despite having the world’s largest economy. Other countries that perform better are countries including Canada, Finland, Japan, and China, which tops international rankings. 
                    </p>
                    <p className="personal-reflection-content">
                      Evidently, the United States is not doing a very good job at ensuring that all children in the country have equal opportunities to achieve educational success. In his TED speech, Anindya Kundu does a good job of painting the picture of what it is like for underserved communities to achieve in education. Additionally, Kundu explains the potential effects of becoming a more educationally active country. 
                    </p>
                    <iframe width="50%" height="auto" src="https://www.youtube.com/embed/wRG5_-9eE4w?start=159" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="gap-video"></iframe>
                    <p className="personal-reflection-content">
                      As Kundu explains, impoverished communities are unable to see their children have educational success. Because of this, the United States needs to put more funding into education. The students that the government invests in today will be the successful students of tomorrow. Additionally, by doing this, we will ensure that future generations grow up with a stronger sense of who they are and what their purpose is. Currently, China is catching up to become the strongest economy in the world, partly due to their investments in education. In order to help the United States, remain in the lead, we must concentrate on investing in our youth. 
                    </p>
                    <p className="personal-reflection-content">
                      And that is my positive obsession. It is a very defining part of who I am and something I am proud to have spent many efforts in. Now, I invite you to explore your own positive obsession. Thank you very much for listening. I hope this leaves you with something to think about and inspires you to get involved.
                    </p>
            </div>
            
            </div>
        </div>

      

      </div>
    );
  }
}
export default Unit2;