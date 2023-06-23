import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { FaRegTimesCircle } from "react-icons/fa";
import Zen from './zen.png'

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpenBurger = () => {
    setOpen(!open);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title" onClick={() => setOpen(false)}>
        <span className="site-title-lit">JH</span>
        <span className="title-period">.</span>
      </Link>
      <ul className="page-link">
        <CustomLink to="/about">
          <span className="nav-numbers">01.</span> About
        </CustomLink>
        <CustomLink to="/portfolio">
          <span className="nav-numbers">02.</span>Portfolio
        </CustomLink>
        <CustomLink to="/contact">
          <span className="nav-numbers">03.</span>Contact
        </CustomLink>
        <div className="link-icons">
          <a href="https://github.com/JeremeyHansen">
            <GoMarkGithub />
          </a>
        </div>
        <div className="link-icons">
          <a href="https://www.linkedin.com/in/jeremey-hansen-77979a10a/">
            <BsLinkedin />
          </a>
        </div>
      </ul>
      <div className="ham-container">
        {open ? 
         <button
         className="navbar-toggler"
         id="hamburger-btn"
         type="button"
         onClick={handleOpenBurger}
       >
         <FaRegTimesCircle />
       </button>
        : 
        <button
        className="navbar-toggler"
        id="hamburger-btn"
        type="button"
        onClick={handleOpenBurger}
      >
        <FiMenu />
      </button>}
      {open && (
        <div className="hamburger-nav">
          <div className="inner-ham">
            <ul className="navbar-ul">
              <div className="ham-item">
                <Link
                  eventKey="1"
                  smooth={true}
                  to="/"
                  isDynamic={true}
                  offset={-110}
                  className="nav-link smooth"
                  onClick={handleOpenBurger}
                >
                  <p>Home</p>
                </Link>
              </div>
              <div className="ham-item">
                <Link
                  eventKey="2"
                  smooth={true}
                  to="/about"
                  offset={-105}
                  className="nav-link"
                  onClick={handleOpenBurger}
                >
                  <p>About</p>
                </Link>
              </div>
              <div className="ham-item">
                <Link
                  eventKey="4"
                  smooth={true}
                  to="/portfolio"
                  offset={-108}
                  className="nav-link"
                  onClick={handleOpenBurger}
                >
                  <p>Projects</p>
                </Link>
              </div>
              <div className="ham-item">
                <Link
                  eventKey="5"
                  smooth={true}
                  to="/contact"
                  offset={-107}
                  className="nav-link"
                  onClick={handleOpenBurger}
                >
                  <p>Contact</p>
                </Link>
              </div>
            </ul>
              <div className="ham-item1">
                <div className="nav-icons">
                <a className="nav-icon" href="https://github.com/JeremeyHansen">
                  <GoMarkGithub />
                </a>
                <a
                  className="nav-icon"
                  href="https://www.linkedin.com/in/jeremey-hansen-77979a10a/"
                >
                  <BsLinkedin />
                </a>
                </div>
              </div>
              <img src={Zen} alt="me being a yogi" className="zen"></img>
          
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : "hvr-underline-from-right"}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
