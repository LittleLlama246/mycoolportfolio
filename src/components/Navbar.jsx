import "../styles/navbar.css"

import hamburger from "../images/hamburger.png"
import laurenMcKeown from "../images/laurenmckeown.png"
import { useState } from "react";
import x from "../images/close.png"
import namehere from "../images/namehere.png"


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
      <img src={namehere} alt="name/logo" height="70px" width="auto"/>
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
            <a href="/designWork">Design Work</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}