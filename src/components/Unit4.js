import React, { Component } from "react";

import serendipityImage from "../img/serendipityImage.png";


class Unit4 extends Component {
  render() {
    return (
      <div className="unit-parent-container-one">


      <div className="unit1-project-left-container">
          <div className="resources-content-container">
              <h1 className="resources-title">Presentation Resources</h1>

              <h2 className="resources-section-header">Topic</h2>
              <p className="resources-section-content">In unit 4, I took some time to personaly go down an internet rabbit hole to learn more about a new topic I am intersted in. In this quick presentation, I will be talking about Rivian, an upcoming electric truck startup, and its plans to compete with Tesla. I also take some time to explore why Tesla has been so successful. I hope you enjoy this topic and learn something new about the current vehicle innovation space.</p>
              <img src={serendipityImage} alt="Digital Culture" className="article-screenshot"/><br />
              
              <h2 className="resources-section-header">Coggle Mind Map</h2>
              <p className="resources-section-content">To learn more information about Unit 4 and explore other ideas about serendipity and design thinking, feel free to explore my Coggle mind map linked below.</p>                
              <a href="https://coggle.it/diagram/X1bGwr2x3ka7jkx7/t/capstone-project-map-critical-consumption/4cc0fcf3532e715c6cfc5e21090eb11f9324505bf7c111e7d61fce8f8e3544c8" target="_blank" className="resource-link">View Marco's Mind Map on Coggle</a>
              
              <h2 className="resources-section-header">Contact</h2>
              <p className="resources-section-content">Interested in talking more about this topic? I am always happy to discuss this and other new ideas. Feel free to reach out to me using my below!</p>
              <a href = "mailto: mriesgo@sas.upenn.edu" className="resource-link">mriesgo@sas.upenn.edu</a>
              
          </div>
      </div>

      <div className="unit1-project-right-container">
          <div className="project-right-heading">
              <h1 className="project-header">Serendipity Presentation</h1>
              <h2><span style={{color: 'rgba(6,57,84,1)'}}>Unit 4</span></h2>
              <h3 className="project-date">October 27, 2020</h3>
          </div>
        <div className="project-right-content-container">
          
          <div className="content-box-container">
                  <h2 className="project-content-header">Presentation with Marco</h2>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/qnq_TfdSPpo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="content-box-container">
                  <h2 className="project-content-header">Podcast Transcript</h2>
                  <p className="personal-reflection-content">
                  Hello everyone and welcome to my serendipity presentation! I am very passionate about new products and upcoming companies, so this week I decided to go down the rabbit hole of learning about electric truck startup Rivian, their upcoming products, and learning a little bit more about what gives Tesla an advantage over its competitors. This is something that could be very interesting for other students who are interested in product development and learning new technologies. Also, I think that these topics are of great interest to people working on improving energy consumption or even those thinking of buying an electric vehicle.                  
                  </p>
                  <p className="personal-reflection-content">
                  So to learn more about Rivian and their products, I watched the CEO, RJ Scaringe, deliver the company’s first major product launch in which they announced the production of two new Rivian trucks. The company has also recently signed a contract with Amazon to produce 100,000 of Amazon’s future electric delivery trucks. The company has also received over 5 billion dollars in venture capital funding and deals with other top automakers including Ford.                  
                  </p>
                  <p className="personal-reflection-content">
                  With these metrics and achievements in mind, it is safe to say that Rivian is preparing a very competitive battle with Elon Musk’s Tesla, which is the automaker with the highest market capital. This brought me to ask myself the following question: what gives Tesla an advantage over other new electric vehicle companies? Why has Tesla been the most successful one?                  
                  </p>
                  <p className="personal-reflection-content">
                  On the surface, it seems like Tesla’s competitors have the technology, employees, and economic resources to produce an electric vehicle that could adequately compete with Tesla’s products. However, no other startup has been capable of doing this. From reading the comments posted on Rivian’s product presentation, I learned that people wanted the company to implement a network of chargers similar to Tesla. Tesla’s current supercharger network ensures that Tesla owners will almost always have a “Supercharger” nearby for them to recharge their car in a very short time. Tesla figured out early on that in order to break through people’s fear of running out of charge on long drives, the company had to make sure that customers would always have a charger nearby. Therefore, throughout the years, Tesla has spent a lot of efforts on establishing a good network of Superchargers all around the world.                   
                  </p>
                  <p className="personal-reflection-content">
                  Ultimately, it has been Tesla’s emphasis on the availability of their chargers that has enabled the company to thrive beyond its competitors. From this point, it will be very interesting to see how new electric vehicle companies adapt their product lines to offer more charging stations around the world. I think that the creation of this infrastructure will enable the car industry to make a much smoother transition into the production of electric vehicles.
                  </p>
                  <p className="personal-reflection-content">
                  Throughout my exploration of these companies, I used YouTube’s comments section as the guide for me to learn about what people like about the companies. I also spent time reading about the companies’ products on their website, which is usually the common medium for companies to show their products.                   
                  </p>
                  <p className="personal-reflection-content">
                  In this process, it was quite fun to see how YouTube’s comments section can inspire learning further about topics. I think using this was a great way for me to explore online communication, corporate communications, and other topics we have talked about in the course. This work allowed me to really put the things we have talked about to use in learning new things online and exploring different mediums. I definitely suggest that other students try it out and go on the comments section on YouTube videos/ It seems like it is an excellent way for people to learn more about the topic. In what ways do you use YouTube comments to help you learn more about topics?
                  </p>   
          </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Unit4;