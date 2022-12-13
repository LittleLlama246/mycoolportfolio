import Navbar from "../../Navbar";
import "../../../styles/project.css"


import { useState, useEffect } from "react";

import travel_buddy from "./images/travel_buddy.png"
import cm1 from "./images/CM1.png"
import cm2 from "./images/CM2.png"
import cm3 from "./images/CM3.png"
import vid from "./images/travel_buddy.mp4"
import eyealg from "./images/eyealg.png"
import yawn from "./images/yawn.png"
import tilt from "./images/tilt.png"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import arrow from "./images/right-arrow.png";

const Ford = () => {
  const [ps, setPS ] = useState(false);
  
  var top = document.getElementById("top1");
  var problem = document.getElementById("part-1");
  var currentmethods = document.getElementById("part-2");
  var solution = document.getElementById("part-3");
  var takeaways = document.getElementById("part-4");

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (window.scrollY <= 420) {
    } else if (window.scrollY >= 300) {
      setPS(true);
      this.setState({class: 'fixedElement'})
    }
  };
  
  const componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount();

  return (
    <div class="page">
      <Navbar/>
      <h1 id="top1">Ford Intern Hackathon</h1>
      <p id="top2">During the Summer of 2022 I interned at Ford Motor Company. I was working on an individual project within the artificial intelligence/machine learning 
      team and wanted to meet other interns so I enrolled in the intern hackathon!</p>
      <div id={ps ? "menu" : "stickymenu"} onScroll={handleNavigation}>
            <li class="nav"><HashLink to="#top">Home</HashLink></li>
            <li class="nav"><HashLink to="#part-1">The Problem</HashLink></li>
            <li class="nav"><HashLink to="#part-2">Current Methodologies</HashLink></li>
            <li class="nav"><HashLink to="#part-3">Our Solution</HashLink></li>
            <li class="nav"><HashLink to="#part-4">Takeaways</HashLink></li>
      </div>

      <div id="overview">
         <p>For this hackathon, we were given the challenge to develop a distinguishing product for Ford that leverages connectivity, data and sensing to foster an “always-on” relationship with the customer. </p>
         <p>My teammates, @miti, @Ian, @nyrica and I choose to focus on the topic of monitoring driver health. We proposed a product called TravelBuddy that leverages computer vision and artificial intelligence technology to detect drowsiness in a driver.
         We worked on our implementation and business case for two days and put together a strong presentation to show the judges. Our mentor @Ali was a great help to our team, guiding us in the right direction and providing extremely helpful project critiques.</p>
          <img src={travel_buddy} height="400"/>
      </div>

      <div id="part-1">
        <br></br>
        <h2 class="pTitle">The Problem</h2>
        <p class="ptexplanation">Ultimately, the problem is that drowsy drivers are a threat to the safety of themselves and those on the road.</p>
        <div class="gallery-container">
          <div class="circle">
            <p class="textford">Each year approximately 1 million crashes are caused by drowsy driving.</p>
          </div>
          <div class="circle">
            <p class="textford">40-60% of all crashes result from drift off.</p>
          </div>
          <div class="circle">
            <p class="textford">More than a third of American adults are not getting enough sleep on a regular basis, putting them at risk for drowsy driving.</p>
          </div>
        </div>
        <p>
          <br></br>
        </p>
      </div>

      <div id="part-2">
        <br></br>
        <h2 class="pTitle">Current Methodologies</h2>
        <p class="ptexplanation">Currently, ford monitors driver fatigue through a lane detection system and infrared camera technology to track the drivers eye positioning.</p>
        <div class="gallery-container">
          <img class="img-row" src={cm3} width="250"/>
          <img class="img-row" src={cm2}/>
          <img class="img-row" src={cm1} width="300"/>
        </div>
        <p>
          <br></br>
        </p>
      </div>
      <div id="part-3">
      <br></br>
      <h2 class="pTitle">Our Solution</h2>
      <p class="ptexplanation">Drowsy driving has universal physical signs that can be easily recognized. Constant yawning, blinking and constant head nodding can demonstrate 
      that a driver is dozing off and is unsafe to drive.</p>

      <p>Our solution is Travel Buddy, a wake-up alarm in your car that monitors your face and body movements to detect driver fatigue. This features has user warnings and an autonomous take over feature to provide a safer driver experience. </p>
      <img src={travel_buddy} width="600"/>
      <h4>How Does Travel Buddy work?</h4>
      <div class="gallery-container">
          <div class="box1">
            <p class="textford">Get driver's video from the dashboard camera.</p>
          </div>
          <img src={arrow} width="640" height="640" class="arrow"/>
          <div class="box1">
            <p class="textford">Extract and Analyze drivers facial features.</p>
          </div>
          <img src={arrow} width="640" height="640" class="arrow"/>
          <div class="box1">
            <p class="textford">Detect if driver is fatigued.</p>
          </div>
      </div>
      <br></br>
      <p>After the driver is identified to be fatigued, they are alerted through a increased light on the dashboard and a sound alert. If the user continues to show dozy driving conditions, a popup will ask the driver if they want to switch to hands free driving mode. If no if chosen, the driver will be continually monitored and if yes is chosen the autonomous driving feaute will take over for the driver. </p>
      
      <h4>The Face Detection Algorithm</h4>
      <p>Our face detection algorithm detects drowsiness using three metrics; percent eye closure, yawn detection and counter, and how much the head tilts or rotates. Below is a short video of the working implementation.</p>
      <div class="image">
          <video controls width="700" height="400">Your browser does not support the &lt;video&gt; tag.
            <source src={vid}/>
          </video>
      </div>

      <div class="ford-blue">
        <h4>1. Percent Eye Closure</h4>
    
        <h3>Significance</h3>
        <ul>
          <li>Studies show that measuring eye movement can provide 83% accuracy in determining drowsiness</li>
        </ul>
        <br></br>
        <h3>Algorithm Details</h3>
        <ul>
          <li>Calculate ratio between vertical eye length and horizontal eye length</li>
          <li>Alert if ratio below threshold</li>
        </ul>
        <div class="gallery-container">
          <img class="ptexplanation" src={eyealg}/>
        </div>
        <h3>Possible Problems</h3>
        <ul>
          <li>People have different measurements for eye closure</li>
          <li>Eyeware might change how the algorithm works</li>
        </ul>
      </div>

      <div class="ford-blue">
      <h4>2. Yawn Detection</h4>

        <h3>Significance</h3>
        <ul>
          <li>One of the first indications a person is sleepy is that they yawn</li>
        </ul>
        <br></br>
        <h3>Algorithm Details</h3>
        <ul>
          <li>Checks if distance between top and bottom lip exceeds threshold</li>
          <li>Counts the number of times the person yawns in 60 seconds and if it is greater than 3 then alerts driver</li>
        </ul>
        <div class="gallery-container">
          <img class="ptexplanation" src={yawn}/>
        </div>
        <h3>Possible Problems</h3>
        <ul>
          <li>Differentiating between yawning and talking</li>
          <li>Masks make detecting facial landmarks more difficult</li>
        </ul>
      </div>

      <div class="ford-blue">
        <h4>3. Head Tilt Detection</h4>

        <h3>Significance</h3>
        <ul>
          <li>Studies show people who are sleepy tend to move their heads more often and to a larger extent when compared with people who are alert.</li>
        </ul>
        <br></br>
        <h3>Algorithm Details</h3>
        <ul>
          <li>Calculate roll, pitch, and yaw with PnP algorithm</li>
          <li>If the head tilts past a threshold, then alert driver</li>
        </ul>
        <div class="gallery-container">
          <img class="ptexplanation" src={tilt}/>
        </div>
        <h3>Possible Problems</h3>
        <ul>
          <li>Head tilt could be due to checking mirrors or looking around the corner for turning</li>
        </ul>
        </div>
        <p>
          <br></br>
        </p>
      </div>

      <div id="part-4">
        <h2 class="pTitle">Takeaways</h2>

        <h4>Business Value to Ford</h4>
        <div class="gallery-container">
            <div class="box1">
              <p class="textford">Improve Ford's Safety Score</p>
            </div>
            <div class="box1">
              <p class="textford">Distinguish Ford from their competitors</p>
            </div>
            <div class="box1">
              <p class="textford">Attract more customers who prioritize safety</p>
            </div>
            <div class="box1">
              <p class="textford">Improve safety on the roads for everyone</p>
            </div>
          </div>
          <br></br>

        <h4>Competition Success!</h4>
        <p class="ptexplanation">My team and I ended up winning first overall in the hackathon with our idea and presentation. We were awarded $100 of Ford Swag (!!) and the 
        opportunity to present our idea to both Jim Buczkowski, Ford's CTO, and the Core AI-ML team at Ford. </p>

        <h4>Conclusion</h4>
        <p class="ptexplanation">Overall, this hackathon was a huge success. I got to meet and work with a great group of interns and mentors. I took courses in both artificial intelligence and 
          computer vision the year leading up to this internship, so working on an industry applicable project that leverages such technologies was a great experience.
        </p>
      </div>
  
    </div>
  );
};
  
export default Ford;
