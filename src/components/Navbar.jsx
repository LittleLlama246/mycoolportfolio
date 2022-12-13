import "../styles/navbar.css"

import hamburger from "../images/hamburger.png"
import { useState } from "react";
import x from "../images/close.png"
import namehere from "../images/namehere.png"
import LittleLlama from "../images/llama.png"
import { Link } from "react-router-dom";



export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
      <Link to="/about"><img src={llama} alt="name/logo" height="70px" width="auto"/></Link>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <img src={isNavExpanded ? x : hamburger} alt="hamburger"/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a><Link to="/about">About</Link></a>
          </li>
          <li>
            <a><Link to="/designWork">Design Work</Link></a>
          </li>
          <li>
            <a><Link to="/resume">Resume</Link></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
