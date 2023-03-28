import FlatifyImg from "../flatimage.JPG";
import OnlyJams from "../onlyjamsimg.JPG";
import Noteful from "../notefulimg.JPG";
import "../css/portfolio.css";
import OnlyJamsPopup from "./OnlyJams.js";
import FlatifyPopup from "./Flatify.js";
import WeSearchPopup from "./WeSearch.js";
import NotefulPopup from "./Noteful.js";
import { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import Brewery from "../brewery.jpg";
import WeSearch from "../wesearchimg.JPG";
import BassBuddyPopup from './BassBuddy.js'
import BassBuddy from '../BassBuddy.jpg';
import Ballooning from '../ballooning.png';

export default function Portfolio() {
  const [openFlatify, setOpenFlatify] = useState(false);
  const [openOnlyJams, setOpenOnlyJams] = useState(false);
  const [openNoteful, setOpenNoteful] = useState(false);
  const [openWeSearch, setOpenWeSearch] = useState(false);
  const [flatifyTech, setFlatifyTech] = useState(false);
  const [onlyJamsTech, setOnlyJamsTech] = useState(false);
  const [notefulTech, setNotefulTech] = useState(false);
  const [weSearchTech, setWeSearcTech] = useState(false);
  const [whatsBrewinTech, setWhatsBrewinTech] = useState(false);
  const [ openBassBuddy, setOpenBassBuddy ] = useState(false);
  const [ bassBuddyTech, setBassBuddyTech] = useState(false);

  const handleOpenFlatify = () => {
    setOpenFlatify(true);
  };

  const handleOpenBassBuddy = () => {
    setOpenBassBuddy(true);
  }

  const handleOpenOnlyJams = () => {
    setOpenOnlyJams(true);
  };

  const handleOpenNoteful = () => {
    setOpenNoteful(true);
  };

  const handleOpenWeSearch = () => {
    setOpenWeSearch(true);
  };

  return (
    <div>
      <div className="typewriter-container">
        <h2 class="animate__animated animate__rubberBand">Projects</h2>
      </div>
      <div className="card-container">
      <div className="portfolio-cards">
          <img
            src={BassBuddy}
            alt="Bass Buddy"
            // autoPlay
            // loop
            // webkit-playsinline 
            // playsinline
            // nofullscreen
            onClick={handleOpenBassBuddy}
          ></img>
          <h2>
            Bass Buddy
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/bassbuddy"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p className="description" onClick={() => setBassBuddyTech(!bassBuddyTech)}>
            {bassBuddyTech
              ? "Technologies Used: React, Google Map's API, CSS"
              : `An end to end responsive application built and designed to give user's a fun experience to find local EDM concerts in their respective cities. User's have the ability to search through the database and find shows on the map in their city.`}
            <p className="video-text">Click Image for Demo.</p>
          </p>
          <a href="https://bassbuddy.xyz" className="link">Bass Buddy Website</a>
        </div>
        <div className="portfolio-cards">
          <img
            src={Ballooning}
            alt="Ballooning"
          ></img>
          <h2>
            Ballooning
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/Ballooning"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p className="description">
              My first go at learning a new language and taking over PHP and Laravel. Enjoyed working with a new stack and building a login/logout with user authentication for features. Incorporated DOM manipulation along with multiple interactive elements to update the database.  
          </p>
        </div>
        <div className="portfolio-cards">
          <img
            src={OnlyJams}
            alt="Only Jams"
            // autoPlay
            // loop
            // webkit-playsinline 
            // playsinline
            // nofullscreen
            onClick={handleOpenOnlyJams}
          ></img>
          <h2>
            OnlyJams
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/onlyjams"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p className="description" onClick={() => setOnlyJamsTech(!onlyJamsTech)}>
            {onlyJamsTech
              ? "Technologies Used: React, Ruby, Rails, PostgreSql, CSS"
              : `As a musician, I've realized the social media realm lacks a platform
            for users to share content solely based on music. OnlyJams is here
            to that solve problem by offering an application for users to send
            the music they love to their friends and the world. Key features:
            view, post, like, or save Jams, a friend searcher to add new
            friends, user authentication and authorization, and a built in
            messenger system.`}
            <p className="video-text">Click Image for Demo.</p>
          </p>
        </div>
        <div className="portfolio-cards">
          <img
            // autoPlay          
            // loop
            // webkit-playsinline 
            // playsinline
            src={Noteful}
            alt="Noteful"
            onClick={handleOpenNoteful}
          ></img>
          <h2>
            Noteful
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/noteful"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p className="description" onClick={() => setNotefulTech(!notefulTech)}>
            {notefulTech
              ? "Technologies Used: React, Ruby, Rails, PostgreSql, CSS"
              : `Noteful was designed to help solve the problem of missing important
            information. Noteful grants users the ability to create and
            subscribe to groups where they can view notes from classmates,
            co-workers/colleagues or whomever else is sharing relative
            information. Noteful offers collaborative groups where you can pick
            up where others left off. Key features: user authentication and
            authorization, create and subscribe to groups, and to post, edit, or
            delete notes.`}
          </p>
          <p className="video-text">Click Image for Demo.</p>
        </div>
        <div className="portfolio-cards">
          <img
            src={FlatifyImg}
            alt="Flatify"
            // autoPlay
            // loop
            // webkit-playsinline 
            // playsinline
            onClick={handleOpenFlatify}
          ></img>
          <h2>
            Flatify
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/flatify2"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p className="description" onClick={() => setFlatifyTech(!flatifyTech)}>
            {flatifyTech
              ? "Technologies Used: React, Spotify's API, REST Design, CSS"
              : `A Spotify-inspired music application created to simplify the process
            of finding music and creating playlists. Taking advantage of
            Spotify's API, we built a fully functional music streaming
            application to search music and create and edit playlists that will
            persist to your Spotify account. Flatify also has a built in audio
            player to play whatever music you desire.`}
          </p>
          <p className="video-text">Click Image for Demo.</p>

        </div>
        <div className="portfolio-cards">
          <img
            // autoPlay
            // loop
            // webkit-playsinline 
            // playsinline
            src={WeSearch}
            alt="We Search."
            onClick={handleOpenWeSearch}
          ></img>
          <h2>
            We Search.
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/front-end-project-3"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p className="description" onClick={() => setWeSearcTech(!weSearchTech)}>
            {weSearchTech
              ? "Technologies Used: React, Ruby, SQLite3, CSS"
              : `We Search is an Atlanta based Yelp mock up. Users can sign up and
            add whatever places they like as well as leave reviews on previously
            listed places. Key features: backend REST API, JWT user
            authentication, full CRUD on two models.`}
          </p>
          <p className="video-text">Click Image for Demo.</p>

        </div>
        <div className="portfolio-cards">
          <img src={Brewery} alt="What's Brewin'?"></img>
          <h2>
            What's Brewin'?
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/whatsbrewin"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p className="description" onClick={() => setWhatsBrewinTech(!whatsBrewinTech)}>
            {whatsBrewinTech
              ? "Technologies used: Vanilla Javascript, HTML, CSS, Public API"
              : `What's Brewin'? is a single page application to search and find
            local breweries in your area. A user can input what city they're
            located in to get a list of breweries in their area. They also are
            granted the ability to comment on the breweries as well as delete
            ones that they don't like or have already been to.`}
          </p>
        </div>
      </div>
      {openOnlyJams && <OnlyJamsPopup setOpenOnlyJams={setOpenOnlyJams} />}
      {openNoteful && <NotefulPopup setOpenNoteful={setOpenNoteful} />}
      {openFlatify && <FlatifyPopup setOpenFlatify={setOpenFlatify} />}
      {openWeSearch && <WeSearchPopup setOpenWeSearch={setOpenWeSearch} />}
      {openBassBuddy && <BassBuddyPopup setOpenBassBuddy={setOpenBassBuddy} />}

    </div>
  );
}
