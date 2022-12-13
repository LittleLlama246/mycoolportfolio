import Navbar from "../../Navbar";
import "../../../styles/project.css"
import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

//images 
import mailroom from "./personasPhotos/mailroom.jpg";
import interface1 from "./personasPhotos/interfcaceS1.jpg"
import interface2 from "./personasPhotos/interfaceInstructions.jpg"
import interface3 from "./personasPhotos/havepackages.jpg"

import sketch from "./personasPhotos/part1.jpg"
import observations from "./personasPhotos/part2.jpg"
import sally from "./personasPhotos/part3.jpg"
import hank from "./personasPhotos/hankPersona.jpg"
import sb1 from "./personasPhotos/personaspt1.jpg"
import sb2 from "./personasPhotos/personaspt2.jpg"
import sb3 from "./personasPhotos/personaspt3.jpg"
import sb4 from "./personasPhotos/personaspt4.jpg"
import sb5 from "./personasPhotos/personaspt5.jpg"

const Personas = () => {
  const [ps, setPS ] = useState(false);
  
  var home = document.getElementById("top1");
  var prep = document.getElementById("part-1");
  var obs = document.getElementById("part-2");
  var pers = document.getElementById("part-3");
  var story = document.getElementById("part-4");  
  var take = document.getElementById("part-5");

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
      <h1 id="top1">Personas & Storyboarding</h1>
      <p id="top2">The goal of this assignment was to step into a users shoes by observing users interacting with an interface, interviewing users about their experiences and illustrating a storyboard for one of my user personas.</p>
      <div id={ps ? "menu" : "stickymenu"} onScroll={handleNavigation}>
            <li class="nav"><HashLink to="#top">Home</HashLink></li>
            <li class="nav"><HashLink to="#part-1">Preparation</HashLink></li>
            <li class="nav"><HashLink to="#part-2">Recording Observations</HashLink></li>
            <li class="nav"><HashLink to="#part-3">Personas</HashLink></li>
            <li class="nav"><HashLink to="#part-4">Storyboards</HashLink></li>
            <li class="nav"><HashLink to="#part-5">Takeaways</HashLink></li>
      </div>

      <div id="intro">
        <p>I choose to focus on the Brown University Mail Room Interface for this project.</p>
        <div class="image"><img src={mailroom} alt="mailroom" width="750" height="500"/></div>

        <div class="gallery-container">
          <div class="image"><img src={interface1} alt="screen1" width="310" height="210"/></div>
          <div class="image"><img src={interface2} alt="instructions" width="310" height="210"/></div>
          <div class="image"><img src={interface3} alt="screen2" width="310" height="210"/></div>
        </div>
      </div>

      <div id="part-1">
        <br></br>
        <h2 class="pTitle">Part 1: Preparation</h2>
        <p class="ptexplanation">In part one, I selected an accessible interface - the Brown University Mail Room Interface, created a sketch and a breif description of the interface and 
          prepared some questions for users regarding their experiences with my chosen interface.
        </p>
        <div class="image"><img src={sketch} alt="part one image" width="600" height="500"/></div>
        <br></br>
      </div>

      <div id="part-2">
        <h2 class="pTitle">Part 2: Recording Observations</h2>

        <p class="ptexplanation">In part two, I observed users interacting with the Brown Mail Room Interface and asked users questions about their 
          experiences with this interface. </p>

        <div class="observations">
          <div class="red">
            <h3>
              Key Observations: 
            </h3>
            <ul>
              <li>Users spent a total of around 6/12 seconds at the interface - clicked through quickly</li>
              <li>Some users had to swipe their card more than once before getting their card number to register - there users appeared frustrated 
                or confused
              </li>
              <li>All users appeared to fine these interfaces without struggle, the two interfaces outside the mail room were the only ones I saw users use during 
                my observation (as noted in the description there is one outside the mail room as well)</li>
            </ul>
          </div>
          <div class="red">
            <h3>Questions:</h3>
            <ol>
              <li>The mail room interface is easy/efficient to use. </li>
              Strongly Disagree -- Disagree -- Neutral -- Agree -- Strongly Agree 
              <li>Think back to freshman year when you had to get mail for the first time. Were these interfaces placed in an intuitive spot 
                or were you confused about how to get into the mail queue?
              </li>
              <li>Name one thing you enjoy about this interface and one thing you think this interface could do better.</li>
              <li>Design a feature missing from this interface that would improve your experience getting mail?</li>
              <li>What emotions do you often experience during your trips to the mail room</li>
            </ol>
          </div>
          <div class="red">
            <h3>Answers:</h3>
            <ul>
              <li>Most interviewees agreed that the interface was easy/efficient to use with the exception of the card reader not working as expected, one user noted that the interface 
                "told you everything you needed in a clear way".
              </li>
              <li>Respondents mentioned that they followed others lead when learning how to get into the mail queue for the first time - there were no obvious signs, no obvious "pick up mail or get into queue here" interface, and you 
                wouldn't walk straight into the interfaces if you didn't know they were there.</li>
              <li>Users like the ability to swipe their card to enter ID and the ability to see the number of packages they have; users dislike the low numbers of interfaces outside the mail room, especially during peak hours.</li>
              <li>New features students passionately suggested were the ability to view spot in queue and approximate wait tim.</li>
              <li>Respondents mentioned the emotions excited, annoyed, confused (abt what they were receiving), bored and in a rush.</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="part-3">
        <br></br>
        <h2 class="pTitle">Part 3: Personas</h2>

        <p class="ptexplanation">In part three, I used the info I received from speaking with users to create two personas for my interface. I found that some people were very passionate about this interface and used it a lot while others rarely visited the mail room and didn't care. My two personas reflect this observation.
        </p>

        <h4>Persona 1: Shopper Sally</h4>
        <div class="image"> <img src={sally} alt="shopper sally photo" width="800" height="400"/></div>
        <div class="red p">
          <p class="small"> Shopper Sally is a Junior at Brown University. She lives off campus but her address doesn't exist so she still uses her Brown mailbox. She gets mail frequently because of her shopping addiction so she makes frequent 
            trips to the mail room. Sally is always in a rush and gets frustrated that she does not know how long she will be waiting in line for her packages.
          </p>
        </div>
        
        <h4>Persona 2: Hippie Hank</h4>
        <div class="image"><img src={hank} alt="hippie hank photo" width="800" height="400"/></div>
        <div class="red">
          <p class="small"> Hippie Hank is a freshman at Brown University. Unlike Sally, Hank doesn't visit the mail room often. Hank gets mail once, maybe twice a semester but never really knows who sent it. He finds the mail room system easy to navigate on his rare visits to pick up mail but wishes he could see who the package came form so he knew if it was worth waiting in line for. </p>
        </div>
        <br></br>
        </div>

        <div id="part-4">
          <h2 class="pTitle">Part 4: Storyboards</h2>

          <p class="ptexplanation">In part four, I created a storyboard to depict a users experience with the Brown U Mailroom Interface. This storyboard follows one of Shopper Sally's interactions with the Mail Room interface.</p>

          <div class="gallery-container">
            <div class="image">
              <img src={sb1} alt="storyboard pt1" width="800" height="400"/>
              <br></br>
              <br></br>
              
              <img src={sb2} alt="storyboard pt2" width="800" height="400"/>
              <br></br>
              <br></br>

              <img src={sb3} alt="storyboard pt3" width="800" height="400"/>
              <br></br>
              <br></br>

              <img src={sb4} alt="storyboard pt4" width="800" height="400"/>
              <br></br>
              <br></br>

              <img src={sb5} alt="storyboard pt5" width="800" height="400"/>
              </div>
          </div>
        </div>
      <div id="part-5">
        <br></br>
        <h2 class="pTitle">Takeaways</h2>
        <p class="ptexplanation">I really enjoyed this assignment. It made me aware of the many factors designers must take into account when designing an interface. Good interfaces should be seamless for the user and often take more effort to design than most would think. </p>
        <p class="ptexplanation">Furthermore, I choose a fun interface to review as many people I talked to were super passionate about the interface changes they suggested. I had several people ask if I could talk to the mail room staff and get these interface changes implemented.</p>
      </div>

    </div>
  );
};
  
export default Personas;
