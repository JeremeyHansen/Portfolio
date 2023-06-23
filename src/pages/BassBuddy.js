import BassBuddyVid from "../BassBuddyVid.mp4";
import Phone1 from "../bbpics/1.png";
import Phone2 from "../bbpics/2.png";
import Phone3 from "../bbpics/3.png";
import { GoMarkGithub } from "react-icons/go";

export default function BassBuddy() {
  return (
    <div className="c-card">
      <div className="card-c" style={{ position: "relative", zIndex: "2" }}>
        <h1 className="port-title">BASS BUDDY.</h1>
        <div className="port-buttons">
        <div className="github-link">
          <a href="https://github.com/JeremeyHansen/BassBuddies">
            <GoMarkGithub />
          </a>
        </div>
        <button className="bb-button">
          <a href="https://bassbuddy.xyz">bassbuddy.xyz</a>
        </button>
        </div>
        <div className="port-video">
          <div>
            <video src={BassBuddyVid} loop autoPlay playsInline muted></video>
          </div>
          <div>
            <p className="port-text">
              An end to end responsive application built and designed to give
              user's a fun experience to find local EDM concerts in their
              respective cities. User's have the ability to search through the
              database and find shows on the map within their city.
            </p>
          </div>
        </div>
      </div>
      <div className="phone-container">
        <div>
          <img className="phone1" alt="phone view" src={Phone1}></img>
        </div>
        <div>
          <img className="phone2" alt="phone view" src={Phone2}></img>
        </div>
        <div>
          <img className="phone3" alt="phone view" src={Phone3}></img>
        </div>
        <div>
          <p className="port-text2">
            Technologies used: React, Google Map's API, CSS
          </p>
        </div>
      </div>
    </div>
  );
}
