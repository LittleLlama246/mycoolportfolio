import Navbar from "./Navbar";
import "../styles/about.css"
import me from "../images/IMG_0026.jpg"
import mehidden from "../images/IMG_0759.jpg"

//icons
import email from "../images/email.png"
import linkedin from "../images/linkedIn.png"

const About = () => {
  return (
    <div>
      <Navbar/>
      <div class="container">
        <div class="photos">
          <img src={mehidden} alt="lauren in hawaii" width="600"/>
        </div>
        <div class="text">
          <h1>Hey Y'all!</h1>
          <p class="des">My name is [☮] and I am an aspiring Software Engineer. I currently attend Brown University where I study computer science, with
            an emphasis on software systems and artificial intelligence. I am interested in creating applications that can have a transformative impact 
            on business solutions. I love to solve problems and collaborate with others. This summer I will be joining [☮]. 
            {/* Accenture as a Technology Consulting Intern */}

            <br></br>
            <br></br>

            At Brown, I am on the [☮] and proudly compete [☮] for the bears. In my personal time I love to explore the outdoors and 
            especially enjoy wake surfing, snow skiing and swimming. 
            {/* D1 gymnastics team */}
            {/* Uneven Bars and Balance Beam */}

            <br></br>
            <br></br>

            <hr></hr>

            <h2>Let's Chat</h2>
            <div class="contect">

            <a href="mailto:vn35scqa6vvewgt5@gmail.com" target="_blank" aria-label="vn35scqa6vvewgt5@gmail.com"><img src={email} alt="email-icon"height={52}/></a>
            <a href="https://www.instagram.com/alpacaloversinsta/?igshid=YTY2NzY3YTc%3D" target="_blank" aria-label="https://www.instagram.com/alpacaloversinsta/?igshid=YTY2NzY3YTc%3D"><img src={linkedin} alt="linkedin-icon" height={52}/></a>

            </div>
            
          </p>
        </div>
      </div>
    </div>
  );
};
  
export default About;
