import "../styles/designwork.css"
import pink from "../images/pink.png"
import personas from "../images/personas.png"
import pastries from "../images/pastries.png"
import dog from "../images/dog.png"
import ford from "../images/ford.png"
import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const DesignWork = () => {
  const [isBlue, setBlue] = useState(false);
  const [isPurple, setPurple] = useState(false);
  const [isPink, setPink] = useState(false);
  const [isGreen, setGreen] = useState(false);

  return (
    <div>
      <Navbar/>
      <div class="content">
        <h1>Check out my work!</h1>
        <h2>Here are some of my recent projects.</h2>
      </div> 
      <div class="projects"> 
      <div class="project box green hvr-trim">
        <Link to="/ford">
          <div class="container" onMouseEnter={() => setGreen(true)} onMouseLeave={() => setGreen(false)}>
            
              <div class="center">
                <img src={ford} height="200"/>
                <h5 class="fave-label">{isGreen ? "Ford Summer Hackathon Submission 2022" : "Travel Buddy"}</h5>
              </div>
          </div>
          </Link>
          </div>
          <div class="project box purple hvr-trim">
          <Link to="/redesign">
           <div class="container" onMouseEnter={() => setPurple(true)} onMouseLeave={() => setPurple(false)}>
              <div class="center">
                <img src={pastries} height="200" />
                <h5 class="fave-label">{isPurple ? "Responsive Redesign" : "Revamping Wayland Bakery"}</h5>
              </div>
            </div>
          </Link>
          </div>
          <div class="project box pink hvr-trim">
            <Link to="/iterative">
            <div class="container" onMouseEnter={() => setPink(true)} onMouseLeave={() => setPink(false)}>
                <div class="center">
                  <img src={pink} height="200"/>
                  <h5 class="fave-label">{isPink ? "Iterative Design" : "The Food Court App"}</h5>
                </div>
            </div>
            </Link>
          </div>
           <div class="project box blue hvr-trim">
          <Link to="/personas">
            <div class="container" onMouseEnter={() => setBlue(true)} onMouseLeave={() => setBlue(false)}>
              <div class="center">
                <img src={personas} height="200" />
                <h5 class="fave-label">{isBlue ? "Personas & Storyboarding" : "Stepping into the Users Shoes"}</h5>
              </div>
            </div>
            </Link>
         </div>
        </div>
    </div>
  );
};
  
export default DesignWork;
