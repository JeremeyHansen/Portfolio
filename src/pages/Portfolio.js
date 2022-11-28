import Typewriter from "typewriter-effect";
import Flatify from "../Flatiify.mp4";
import OnlyJams from "../OnlyJams.mp4";
import Noteful from "../Noteful.mp4";
import "../css/portfolio.css";
import OnlyJamsPopup from "./OnlyJams.js";
import FlatifyPopup from "./Flatify.js";
import NotefulPopup from "./Noteful.js";
import { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import Brewery from "../brewery.jpg";

export default function Portfolio() {
  const [openFlatify, setOpenFlatify] = useState(false);
  const [openOnlyJams, setOpenOnlyJams] = useState(false);
  const [openNoteful, setOpenNoteful] = useState(false);

  const handleOpenFlatify = () => {
    setOpenFlatify(true);
  };

  const handleOpenOnlyJams = () => {
    setOpenOnlyJams(true);
  };

  const handleOpenNoteful = () => {
    setOpenNoteful(true);
  };

  return (
    <div>
      <div className="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Portfolio").start();
          }}
        />
      </div>
      <div className="card-container">
        <div className="portfolio-cards">
          <video
            src={OnlyJams}
            
            
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
          <p>
            As a musician, I've realized the social media realm lacks a platform
            for users to share content solely based on music. OnlyJams is here
            to that solve problem by offering an application for users to send
            the music they love to their friends and the world. Key features:
            view, post, like, or save Jams, a friend searcher to add new
            friends, user authentication and authorization, and a built in
            messenger system.
          </p>
        </div>
        <div className="portfolio-cards">
          <video
            src={Noteful}
            
            
            muted
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
          <p>
            Noteful was designed to help solve the problem of missing important
            information. Noteful grants users the ability to create and
            subscribe to groups where they can view notes from classmates,
            co-workers/colleagues or whomever else is sharing relative
            information. Noteful offers collaborative groups where you can pick
            up where others left off. Key features: user authentication and
            authorization, create and subscribe to groups, and to post, edit, or
            delete notes.
          </p>
        </div>
        <div className="portfolio-cards">
          <video
            src={Flatify}
            
            
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
          <p>
            A Spotify-inspired music application created to simplify the process
            of finding music and creating playlists. Taking advantage of
            Spotify's API, we built a fully functional music streaming
            application to search music and create and edit playlists that will
            persist to your Spotify account. Flatify also has a built in audio
            player to play whatever music you desire.{" "}
          </p>
        </div>
        <div className="portfolio-cards"></div>
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
          <p>
            What's Brewin'? is a single page application to search and find
            local breweries in your area. A user can input what city they're
            located in to get a list of breweries in their area. They also are
            granted the ability to comment on the breweries as well as delete
            ones that they don't like or have already been to.
          </p>
        </div>
      </div>
      {openOnlyJams && <OnlyJamsPopup setOpenOnlyJams={setOpenOnlyJams} />}
      {openNoteful && <NotefulPopup setOpenNoteful={setOpenNoteful} />}
      {openFlatify && <FlatifyPopup setOpenFlatify={setOpenFlatify} />}
    </div>
  );
}
