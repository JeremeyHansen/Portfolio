import Flatify from "../Flatiify.mp4";
import OnlyJams from "../OnlyJams.mp4";
import Noteful from "../Noteful.mp4";
import "../css/portfolio.css";
import OnlyJamsPopup from "./OnlyJams.js";
import FlatifyPopup from "./Flatify.js";
import WeSearchPopup from "./WeSearch.js";
import NotefulPopup from "./Noteful.js";
import { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import Brewery from "../brewery.jpg";
import WeSearch from "../wesearch.mp4";

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

  const handleOpenFlatify = () => {
    setOpenFlatify(true);
  };

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
          <video
            src={OnlyJams}
            alt="Only Jams"
            muted
            onClick={handleOpenOnlyJams}
          ></video>
          <h2>
            OnlyJams
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/onlyjams"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p onClick={() => setOnlyJamsTech(!onlyJamsTech)}>
            {onlyJamsTech
              ? "Technologies Used: React, Ruby, Rails, PostgreSql, CSS"
              : `As a musician, I've realized the social media realm lacks a platform
            for users to share content solely based on music. OnlyJams is here
            to that solve problem by offering an application for users to send
            the music they love to their friends and the world. Key features:
            view, post, like, or save Jams, a friend searcher to add new
            friends, user authentication and authorization, and a built in
            messenger system.`}
          </p>
          <p>Click image for video demo</p>
        </div>
        <div className="portfolio-cards">
          <video
            muted
            src={Noteful}
            alt="Noteful"
            onClick={handleOpenNoteful}
          ></video>
          <h2>
            Noteful
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/noteful"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p onClick={() => setNotefulTech(!notefulTech)}>
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
          <p className="video-demo">Click image for video demo</p>
        </div>
        <div className="portfolio-cards">
          <video
            src={Flatify}
            alt="Flatify"
            muted
            onClick={handleOpenFlatify}
          ></video>
          <h2>
            Flatify
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/flatify2"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p onClick={() => setFlatifyTech(!flatifyTech)}>
            {flatifyTech
              ? "Technologies Used: React, Spotify's API, REST Design, CSS"
              : `A Spotify-inspired music application created to simplify the process
            of finding music and creating playlists. Taking advantage of
            Spotify's API, we built a fully functional music streaming
            application to search music and create and edit playlists that will
            persist to your Spotify account. Flatify also has a built in audio
            player to play whatever music you desire.`}
          </p>
          <p className="video-demo">Click image for video demo</p>
        </div>
        <div className="portfolio-cards">
          <video
            muted
            src={WeSearch}
            alt="We Search."
            onClick={handleOpenWeSearch}
          ></video>
          <h2>
            We Search.
            <a
              className="git-logo"
              href="https://github.com/JeremeyHansen/front-end-project-3"
            >
              <GoMarkGithub />
            </a>
          </h2>
          <p onClick={() => setWeSearcTech(!weSearchTech)}>
            {weSearchTech
              ? "Technologies Used: React, Ruby, SQLite3, CSS"
              : `We Search is an Atlanta based Yelp mock up. Users can sign up and
            add whatever places they like as well as leave reviews on previously
            listed places. Key features: backend REST API, JWT user
            authentication, full CRUD on two models.`}
          </p>
          <p className="video-demo">Click image for video demo</p>
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
          <p onClick={() => setWhatsBrewinTech(!whatsBrewinTech)}>
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
    </div>
  );
}
