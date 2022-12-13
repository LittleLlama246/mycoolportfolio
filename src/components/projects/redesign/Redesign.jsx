import Navbar from "../../Navbar";
import "../../../styles/project.css"
import { useState, useEffect } from "react";

import wbold1 from "./rrphotos/wayland-bakery.png"
import wbold2 from "./rrphotos/wb2.png"
import wbold3 from "./rrphotos/wb-3.png"
import wbold4 from "./rrphotos/wb4.png"
import wbold5 from "./rrphotos/breads.png"
import wbold6 from "./rrphotos/pies.png"
import wbold7 from "./rrphotos/holiday.png"
import wbold8 from "./rrphotos/cakes.png"

import lowfi1 from "./rrphotos/lowFpage1.jpg"
import lowfi2 from "./rrphotos/lowFpage2.jpg"
import style from "./rrphotos/styleGuide.png"
import rr1 from "./rrphotos/HF1.jpg"
import rr2 from "./rrphotos/HF2.jpg"

import web1 from "./rrphotos/web1.png"
import web2 from "./rrphotos/web2.png"
import web3 from "./rrphotos/web3.png"
import ipad1 from "./rrphotos/ipad1.png"
import ipad2 from "./rrphotos/ipad2.png"
import ipad3 from "./rrphotos/ipad3.png"
import iphone1 from "./rrphotos/iphone1.png"
import iphone2 from "./rrphotos/iphone2.png"
import iphone3 from "./rrphotos/iphone3.png"

const Redesign = () => {
  const [rr, setRR] = useState(false);
  
  var top = document.getElementById("top1");
  var id = document.getElementById("part-1");
  var vid = document.getElementById("part-2");
  var res = document.getElementById("part-3");
  var take = document.getElementById("part-4");

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (window.scrollY <= 420) {
    } else if (window.scrollY >= 300) {
      setRR(true);
      this.setState({class: 'fixedElement'})
    }
  };

  return (
    <div class="page">
      <Navbar/>
      <h1 id="top1">Responsive Redesign</h1>
      <p id="top2">The goal of this assignment was to practice the workflow of redesigning a simple website. After choosing a website to recreate I identifying usability problems present, created sketches of my redesign and 
      then created a redesign in html/css. I made designs compatible for a web browser, ipad and iphone screen size.
      </p>
      <div id={rr ? "menu" : "stickymenu"} onScroll={handleNavigation}>
            <li class="nav"><a onClick={() => top.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>Home</a></li>
            <li class="nav"><a onClick={() => id.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>Identifying Usability Problems</a></li>
            <li class="nav"><a onClick={() => vid.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>Visual Redesign</a></li>
            <li class="nav"><a onClick={() => res.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>Responsive Redesign</a></li>
            <li class="nav"><a onClick={() => take.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })}>Takeaways</a></li>
      </div>

      <div id="intro">
        <p>For this assignment I choose to review and redesign the <a class="intxt" href="http://www.waylandbakery.com/">Wayland Bakery Website.</a>
            This website has one main page and a few subparts to display different Menus. I choose this page because right before this assignment was released 
            I was looking for a bakery to order a cake from and when I went to the Wayland Bakery website I was taken back by the unexpected design of this website.
        </p>

        <div class="gallery-container">
            <div class="row">
              <div class="column" id="grey">
                <h3>Main Page</h3>
                <div class="image"><img src={wbold1} alt="wayland bakery photo 1" width="400" height="250"/></div>
                <div class="image"><img src={wbold2} alt="wayland bakery photo 2" width="400" height="250"/></div>
                <div class="image"><img src={wbold3} alt="wayland bakery photo 3" width="400" height="250"/></div>
              <div class="image"><img src={wbold4} alt="wayland bakery photo 4" width="400" height="125"/></div>
              </div>
              <div class="column" id="grey">
                <h3>Menu Sub Pages</h3>
                <div class="image"><img src={wbold5} alt="wayland bakery breads" width="400" height="250"/></div>
                <div class="image"><img src={wbold6} alt="wayland bakery pies" width="400" height="250"/></div> 
                <div class="image"><img src={wbold7} alt="wayland bakery pies" width="400" height="250"/></div>     
                <div class="image"><img src={wbold8} alt="wayland bakery cakes" width="400" height="125"/></div>
              </div>       
            </div>
          </div>
          <br></br>
          <br></br>
      </div>

      <div id="part-1">
        <br></br>
        <h2 class="pTitle">Part 1: Identifying Usability Problems</h2>
        <p class="ptexplanation">First, I analyzed the current website to find problems. Overall this website is simple but has issues regarding ease of use and design. </p>

        <div class="red">
        <h3>Usability:</h3>
          <ul>
            <li>There is no way for the user to seamlessly navigate through the website, they must scroll through to find what they need. </li>
            <li>The text is small and the spacing is not great, decreasing readability.</li>
            <li>The information is presented in a unexpected order, which could be confusing for some users.</li>
            <li>There is no information under the "POSTS" header at the top of the page, and it is the first thing the user sees. This makes the website look unkept and could cause confustion.</li>
            <li>Address/map of bakery location shows up before the menus in the user flow; most users will use google maps to find address, not the website. Contact information and Bakery offerings should be easiest accessable. </li>
            <li>"Contact the sight administrator here" is confusing and links to the bakery email address. Clarifying is this email is used to report issues with the website or get in contafct with the bakery would be helpful.</li>
            <li>Consistency and Standards Issue <a href="https://www.nngroup.com/articles/ten-usability-heuristics/">(Heuristics #4): </a> 
              <ul>
                <li>The photos on the right side of the main page are not all the same size. The forth one down has a different width than the rest.</li>
                <li>When you click into each menu, the formatting of these pages are significantly different. For example, the cake page just contains photos of past cakes whereas the bread page 
                  contains a list of the different breads and their ingredients. 
                </li>
                <li>Users typically expect a header that helps them navigate through the website, which this webpage lacks.</li>
              </ul>
            </li>
            </ul>
        </div>

        <div class="red">
          <h3>Learnability:</h3>
                <ul>
                  <li> Recognition Rather than Recall: <a href="https://www.nngroup.com/articles/ten-usability-heuristics/">(Heuristics #6): </a> 
                    <ul>
                      <li> On the front page of the website there is a note that states to order a cake, dessert or other morsel you have to call the bakery. When navigating to those respective tabs, this is not shown so the user must racall it from earlier in the interface.</li>
                    </ul>
                    <li> This website does not do a good job of directing users attention. Users must search for what they need on this website. </li>
                    <li> This website is simple in design so learnability is not too much of an issue but the information could be provided in a more clear manner.</li>
                  </li>
                </ul>
        </div>

        <div class="red">
          <h3>Memorability:</h3>
              <ul>
                <li> This website does not provide much user functionality, so memorability doesn't pose as a large issue. However, a more consistent user flow would better aid users in creating a mental model of the website layout. </li>
              </ul>
        </div>

        <div class="red">
          <h3>Accessability</h3>
          <p>The WAVE sight detected 8 Errors, 2 Contrast Errors and 5 Alerts.</p>
          <div class="list">
          <ul>
            <li> First 4 errors: Some of the images imbedded in the website were missing alternative text descriptions. In the occasion that the image doesn't show up for the user, this helps eliminate confusion and communicate to the what is being communicated through the photo. </li>
            <li> Second 4 errors: These errors were cased by links in the website that contained no text. According to the WAVE website, If a link contains no text, the function or purpose of the link will not be presented to the user. This can introduce confusion for keyboard and screen reader users. Some of the images on the right side of the homepage linked to their respective item category. Until doing this, I was unaware of this functionality in the webpage.</li>
            <li> Contrast Warnings: Low contrast between text and images can cause readability issues especially for users with compromised vision. </li>
            <li> 1st Alert: The link to the bakery email linked in the "Contact the site administrator here" got flagged as a suspicious link.</li>
            <li> 4 Other Alters: These errors were caused by redundant links; each header on the homepage - information, hours, menu, and story - is a link that link back to the same information, opened in a new page. This does not help the user at all. </li>
          </ul>
          </div>  
        </div>
        <br></br>
      </div>
  
      
      <div id="part-2"> 
        <h2 class="pTitle">Part 2: Visual Design</h2>
        <p class="ptexplanation"> 
        Next, I created Low-Fidelity Wireframes for the redesigned version of the Wayland Bakery website. In these sketches I made sure to address the issues identified in part one.
        </p>
        <p> 
        Some notable additions I made to the website were a nav bar to help direct the users through the website, putting critical bakery information, like hours and phone number, front and center on the webpage, and a clear 'contact us' section with all the bakery information in one spot. 
        </p>
        <div class="gallery-container">
          <div class="row">
            <div class="column">
              <div class="image"><img src={lowfi1} alt="low Low-Fidelity Wireframe page 1" width="400" height="600"/></div>
            </div>
            <div class="column">
              <div class="image"><img src={lowfi2} alt="low Low-Fidelity Wireframe page 2/3" width="400" height="600"/></div>
            </div>       
          </div>
        </div> 

        <p class="ptexplanation">
        Next, I created a visual style guide which shows the color scheme and text choices that will be used in the redesign. I felt the pink and blue color helped brand Wayland bakery as 
        more of a boutique bakery and the grey text and icons helped to create a calm tone.</p>
        <div class="gallery-container">
            <div class="row">
              <div class="column">
                <div class="image" ><img src={style} alt="style guide" width="750" height="350"/></div>
              </div>
            </div>
        </div>

        <p class="ptexplanation">
          Lastly, I combined my low-fidelity wireframes and visual style guide into my high fidelity wireframes. These are a representation 
          of what the final design should look like. On the side of the sketches, specific coding comments are included, which helped speed up my final coding process. Personally, 
        </p>
        <div class="gallery-container">
            <div class="row">
              <div class="column">
                <div class="image"><img src={rr1} alt="high-fidelity-1" width="450" height="600"/></div>
              </div>
              <div class="column">
                <div class="image"><img src={rr2} alt="high-fidelity-2" width="450" height="600"/></div>
              </div>      
            </div>
          </div>
      </div>

      <div id="part-3">
        <br></br>
        <h2 class="pTitle">Part 3: Responsive Redesign</h2>
        <p class="ptexplanation"> Next, I turned my sketches into code! The final redesign was made with pure HTML/CSS. I made a few small changes to 
        the sketches in implementation. 
        </p>
        <p>Visit the redesigned site  <a href="https://littlellama246.github.io/wayland-bakery/"><button class="button-30" role="button">here!</button></a></p>
        <p>Visit the old site <a href="https://www.waylandbakery.com/"><button class="button-30" role="button">here!</button></a></p>
        <p class="tiny">Below are the page layouts for the Laptop, iPad and iPhone versions of this site.</p>
        <div class="gallery-container">
          <div class="row">
            <div class="column">
              <div class="image"><img src={web1} alt="website photo 1" width="400" height="250"/></div>
              <div class="image"><img src={web2} alt="website photo photo 2" width="400" height="250"/></div>
              <div class="image"><img src={web3} alt="website photo photo 3" width="400" height="125"/></div>
            </div>
            <div class="column">
              <div class="image"><img src={ipad1} alt="ipad website photo 1" width="200" height="266.6"/></div>
              <div class="image"><img src={ipad2} alt="ipad website photo 2" width="200" height="266.6"/></div> 
              <div class="image"><img src={ipad3} alt="ipad website photo 3" width="200" height="133.3"/></div>     
            </div>      
            <div class="column">
              <div class="image"><img src={iphone1}alt="iphone website photo 1" width="160" height="227.5"/></div>
              <div class="image"><img src={iphone2} alt="iphone website photo 2" width="160" height="227.5"/></div> 
              <div class="image"><img src={iphone3} alt="iphone website photo 3" width="160" height="113.75"/></div> 
            </div>   
          </div>
        </div>
      </div>

      <div id="part-4">
        <br></br>
        <h2 class="pTitle">Takeaways</h2>
        <p class="ptexplanation"> Overall, this project gave me some great experience with full scale web design. I found the planning portion - finding issues, and creating sketches and the style guide - to be the most time consuming part of the assignment; however, I found that this made the coding 
        MUCH easier in the end.</p>
      </div>
    </div>
  );
};
  
export default Redesign;
