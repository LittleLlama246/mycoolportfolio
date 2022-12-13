import Navbar from "../../Navbar";
import "../../../styles/project.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import fc from "./photos/Screen Shot 2022-11-05 at 11.51.59 AM.png"
import one1 from "./photos/sketch1-1.jpg"
import one2 from "./photos/sketch1-2.jpg"
import one3 from "./photos/sketch1-3.jpg"
import N1 from "./photos/Nathan_design1.jpg"
import N2 from "./photos/Nathan_design2.jpg"
import N3 from "./photos/Nathan_design3.jpg"
import N4 from "./photos/Nathan_design4.jpg"
import two from "./photos/sketch2.png"
import three from "./photos/sketch3.PNG"

import login from "./photos/LoginLF.png"
import home from "./photos/HomeLF.png"
import search from "./photos/SearchLF.png"
import resturant from "./photos/ResturantLf.png"
import cart from "./photos/CartLF.png"

import loginhf from "./photos/LoginPageHF.png"
import searchhf from "./photos/SearchHF.png"
import homehf from "./photos/HomeHF.png"
import resturanthf from "./photos/ResturantHF.png"
import carthf from "./photos/CartHF.png"
import mov from "./photos/Screen Recording 2022-11-05 at 2.12.47 PM.mov"

import loginnew from "./photos/LoginNEW.png"
import homenew from "./photos/HomeNEW.png"
import searchnew from "./photos/SearchNEW.png"
import resturantnew from "./photos/ResturantNEW.png"
import cartnew from "./photos/CartNEW.png"

const Iterative = () => {
  const [id, setID ] = useState(false);
  
  var home = document.getElementById("top1");
  var sketch = document.getElementById("part-1");
  var mock = document.getElementById("part-2");
  var critique = document.getElementById("part-3");
  var test = document.getElementById("part-4");
  var takeaway = document.getElementById("final");

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (window.scrollY <= 420) {
    } else if (window.scrollY >= 300) {
      setID(true);
      this.setState({class: 'fixedElement'})
    }
  };

  return (
    <div class="page">
      <Navbar/>
      <h1 id="top1">Iterative Design</h1>
      <p id="top2">For this assignment, I worked with a group to create an interactive design for an emerging start up. 
        We choose a company and made an interactive flow to represent their idea. Emphasis was put on responding to user interactions and 
        creating a clear, constructive user flow.
      </p>
      <div id={id ? "menu" : "stickymenu"} onScroll={handleNavigation}>
            <li class="nav"><a onClick={() => home.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>Home</a></li>
            <li class="nav"><a onClick={() => sketch.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})}>Sketching & Wireframing</a></li>
            <li class="nav"><a onClick={() => mock.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})}>Mockups</a></li>
            <li class="nav"><a onClick={() => critique.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})}>User Critique</a></li>
            <li class="nav"><a onClick={() => test.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})}>User Testing</a></li>
            <li class="nav"><a onClick={() => takeaway.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})}>Takeaways</a></li>
      </div>

      <div id="intro">
        <p>We got to choose our groups for this assignment, so I worked with my classmates @capybara, @snake and @chicken. My group and I choose to create an interface design for the startup <a class="intxt" href="https://getfoodcourt.com/">Food Court</a>. Food Court is an African start up who is 
        essentially trying to create a successful version of SnackPass for Africa. 
        There are many unique problems in the African on-demand/food delivery market and Food Court is working to 
        create a seamless solution. </p>
      </div>

      <div id="part-1">
        <br></br>
        <h1 class="pTitle">Part 1: Sketching & Wireframing</h1>
        <p class="ptexplanation"> As part of our pre-design thinking we have decided to create a mobile app for our interface. Because of the on-demand nature of the app, 
          we feel that a mobile app will provide the most flexibility and convenance to the users. The target audience for this app will be the adult population who have a mobile device; 
          specifically targeting young adults.
        </p>
        <p>Next, each member of the group created our own individual sketches with ideas on how we would design the Food Court Application. </p>

        <div class="gallery-container">
          <div class="row">
          <p>@capybara's sketches</p>
            <div class="column">
              <div class="image"><img src={one1} alt="sketch1-1" width="400" height="450"/></div>
            </div>
            <div class="column">
              <div class="image"><img src={one3} alt="sketch1-2" width="400" height="450"/></div>
            </div>      
            <div class="column">
              <div class="image"><img src={one2} alt="sketch1-3" width="400" height="450"/></div> 
            </div>   
          </div>
          <div class="gallery-container">
          <p>@snake's sketches</p>
          <div class="row">
            <div class="column">
              <div class="image"><img src={N1} alt="sketchN-1" width="200" height="400"/></div>
            </div>
            <div class="column">
              <div class="image"><img src={N2} alt="sketchN-2" width="200" height="400"/></div>
            </div>      
            <div class="column">
              <div class="image"><img src={N3} alt="sketchN-3" width="200" height="400"/></div> 
            </div> 
            <div class="column">
              <div class="image"><img src={N4} alt="sketchN-3" width="200" height="400"/></div> 
            </div> 
          </div>
        </div>
      
        <br/>
        <p>@chicken's sketches</p>
        <p><img src={two} alt="Sketch 3" width="800" height="450"/></p>
        <p>@my sketches</p>
        <p><img src={three} alt="Sketch 4" width="500" height="700"/></p>
        <br/>

        <p>Next we came together as a group to combine our sketches into one final wireframe. We discussed which features and pages were most important to have in out final wireframe. Most of our sketches had similar ideas,
        all including some kind of search page, a home page and a restaurant page. Our final high fidelity wireframe had 5 total pages; a login page, a home page, a search page, a restaurant page and a 
        checkout page. Below is an image of our final sketches. 
        </p>

        <div class="gallery-container">
          <div class="row">
            <div class="column">
              <div class="image"><img class="no-round" src={login} alt="LFW-1" width="200" height="400"/></div>
            </div>
            <div class="column">
              <div class="image"><img class="no-round" src={home} alt="LFW-2" width="200" height="400"/></div>
            </div>      
            <div class="column">
              <div class="image"><img class="no-round" src={search} alt="LFW-3" width="200" height="400"/></div> 
            </div> 
          </div>
        </div>
  
        <div class="gallery-container">
          <div class="row">
            <div class="column">
              <div class="image"><img class="no-round" src={resturant} alt="LFW-1" width="200" height="400"/></div>
            </div>
            <div class="column">
              <div class="image"><img class="no-round" src={cart} alt="LFW-1" width="200" height="400"/></div>
            </div>      
          </div>
        </div>
      </div>
      
      <div id="part-2">
        <br></br>
        <h2 class="pTitle">Part 2: Mockups</h2>

        <p class="ptexplanation">In this section, we used our sketches to make a real, interactive design. To do this, we created interactive high fidelity mock ups 
          in figma. 
        </p>
      
        <div class="gallery-container">
        <div class="row">
          <div class="column">
            <div class="image"><img src={loginhf} alt="HFW-1" width="200" height="400"/></div>
          </div>
          <div class="column">
            <div class="image"><img src={homehf} alt="HFW-2" width="200" height="400"/></div>
          </div>      
          <div class="column">
            <div class="image"><img src={searchhf} alt="HFW-3" width="200" height="400"/></div> 
          </div> 
        </div>
      </div>

        <div class="gallery-container">
          <div class="row">
            <div class="column">
              <div class="image"><img src={resturanthf} alt="HFW-1" width="200" height="400"/></div>
            </div>
            <div class="column">
              <div class="image"><img src={carthf} alt="HFW-1" width="200" height="400"/></div>
            </div>      
          </div>
        </div>

        <p>The user flow of our interface is shown in the video below.</p>
        <div class="image">
          <video controls width="300" height="500">Your browser does not support the &lt;video&gt; tag.
            <source src={mov}/>
          </video>
        </div>
        <p><br></br></p>
      </div>

      <div id="part-3">
        <h1 class="pTitle">Part 3: User Critique</h1>
        <p class="ptexplanation"> After our designs were created, we conducted some user testing and made some final changes to our design.
        In studio, we presented our design to a group of our classmates. After giving them time to use the interface, we were given 10 minutes of critiques about our design. </p>

        <div class="red">
          <h3>Here's what we found ... </h3>
          <ul>
            <li> SEARCH BAR on Search page: there was no easy way to navigate out of the search screen without clicking on a restaurant first. This caused some confusion and frustration for users.</li>
            <li> HOURS on Restaurant page: on the restaurant page, someone noted that the hours section was not as clear as they wanted it to be. They suggested to add an "open now" & "closed" banner to more clearly indicate to the user if the restaurant is open or closed.</li>
            <li> HOURS on Search page: Several users were confused by the "hours" placeholder on the search page in out design. They were expecting to see the actual store hours or be able to click on hours to have them show up.</li>
            <li> REVIEWS on Restaurant page: we have review ratings for each restaurant in our designs, but several users mentioned that they would have liked to see the number of reviews for each restaurant to help them determine the accuracy of the rating. </li>
            <li> NOTES section on Cart page: overall we got great reviews on the cart; one user mentioned that the contrast of the "notes" text could be improved to increase readability. </li>
            <li> DELETE on Cart page: there is a red delete button in the cart that allows users to take an item out of the cart. Some users felt that the red button with "delete" text wasn't clear and that a 
              trash can icon would be more clear to the user</li> 
          </ul>
        </div>

        <p>After the critique scission, we made a few small changes to our design. The changes include changing the delete button in the cart to a trash icon,
          setting the notes text to black, adding a navigation footer to the search page, replacing the hours placeholder text with an open/closed indicator and 
          adding the number of reviews next to the star rating on the restaurant page. These changes were small, but will make a big difference in terms of usability. Our final designs can be 
          seen below.
        </p>
        <br></br>
        <h4>Final Designs</h4>
        <div class="gallery-container">
          <div class="row">
            <div class="column">
              <div class="image"><img class="no-round" src={loginnew} alt="new-login" width="200" height="400"/></div>
            </div>
            <div class="column">
              <div class="image"><img class="no-round" src={homenew} alt="new-home" width="200" height="400"/></div>
            </div>      
            <div class="column">
              <div class="image"><img class="no-round" src={searchnew} alt="new-search" width="200" height="400"/></div> 
            </div> 
          </div>
        </div>

        <div class="gallery-container">
          <div class="row">
            <div class="column">
              <div class="image"><img class="no-round" src={resturantnew} alt="new-restaurant" width="200" height="400"/></div>
            </div>
            <div class="column">
              <div class="image"><img class="no-round" src={cartnew} alt="new-cart" width="200" height="400"/></div>
            </div>      
          </div>
        </div>
      </div>

      <div id="part-4">
        <br></br>
        <h1 class="pTitle">Part 4: User Testing</h1>
        <p class="ptexplanation">
          To user test our finalized application, we conducted a usability test on UserTesting.com. 
        </p>
        <p>
          First, we defined a task for the user to do during our task. In order to test the flow of the app, we decided to have each user order chicken tacos from
          Deddeh's Kitchen. This way, the users are mimicking a possible scenario that occurs when using
          the app on a regular basis. When users first open the app, they will encounter the login screen.
          Once they login, they'll be led to the home screen where they can navigate to the Deddeh's Kitchen
          page. From here, they'll be able to order the chicken tacos and proceed to the checkout. The specific
          instructions used for user testing are in the following section.
        </p>

        <div class="red">
          <h3>Introduction/Task Instructions for User Testing</h3>
          <p class="small">
          Imagine you're hungry and there are no restaurants around, so you decide to order delivery. You decide
          you want chicken tacos from your favorite restaurant Deddeh's Kitchen. Navigate through the app to Deddeh's
          Kitchen, and add the chicken tacos to your cart. Then, press the checkout button. Please think aloud when
          you navigate through the site as it helps us buils a better understanding of the user's thought process.
          Additionally, this is not a real app but instead an interactive mockup built using the prototyping software
          Figma.
          </p>
        </div>

        <div class="red">
          <h3>Task for User Testing</h3>
          <ol>
            <li>Without leaving the homepage, in your own words, describe what you think you can do on this app? Please,
            be specific.</li>
            <li>Without leaving the homepage, describe what you would select first. **Do not select anything yet.** If
            you would leave without clicking anywhere, please explain why.</li>
          </ol>
        </div>

        <div class="red">
          <h3>Questions for User Testing</h3>
          <ol>
            <li>What frustrated you most about the site?</li>
            <li>If you had a magic wand, how would you improve this site?</li>
            <li>What did you like about the site.</li>
          </ol>
        </div>

        <p>Two people reviewed and left comments on out design flow. The results are summarized below. All users were successfully able to access Deddeh’s
            kitchen from the main screen, with relative ease and understanding. One user notes the logical
            layout of the application. It was surprising that some users found difficulty finding a way to
            checkout (need to open cart). Users otherwise had little to no issues completing the tasks.
        </p>
       
        <div class="red">
          <h3>Other Notes</h3>
          <ul>
            <li>On the main screen, users pressed the open indicator to access the next page. The initial purpose of
            the 'open' box was to indicate whether the restaurant was currently open or closed. While the box is
            still functionally doing its job, this was not its intended purpose.</li>
            <li>One user struggled to find out what to do after the item was in the cart.</li>
            <li>Another user noted the confusion surrounding the navigation bar. They mentioned that putting the
            navigation bar at the top of the page rather than the bottom would be more intuitive and recommended
            that we use icons rather then the word for each navigation button.</li>
            <li>Another user noted the that having a few highlighted reviews on the details page rather than having
            to open another window to read all the reviews would be helpful.</li>
          </ul>
        </div>

        <div class="red">
          <h3>Potential interface changes</h3>
          <ul>
            <li>Add a label to indicate that the open/close indicator is a status indicator, not a button.</li>
            <li>Add an animation that shows that if the user wants to checkout, they press the cart button
            in the bottom right.</li>
            <li>Change the navigation bar to icons, and make it a fixed position over everything. It can
            remain at the button, but keeping it fixed helps visibility. We believe that moving it to
            the top could clutter content.</li>
            <li>Add some “top” reviews to the restaurant details page, to help users decide on restaurants.</li>
          </ul>
        </div>
        <p><br></br></p>
      </div>

      <div id="final">
        <h1 class="pTitle">Takeaways</h1>
        <p class="ptexplanation">I enjoyed the group aspect of this project. Everyone has such a unique design preference, so it was intreating to work with others to create one final design with all of our design ideas integrated. My biggest take away form this project is the importance of doing design reviews. Each user testing secession gave us several great ideas on how to help us improve our designs, helping us launch a better product for the users.   </p>
      </div>

    </div>
    </div>
  );
};
  
export default Iterative;
