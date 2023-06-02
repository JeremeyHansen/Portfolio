import OnlyJamsVid from "../OnlyJams.mp4";
import { GoMarkGithub } from "react-icons/go";

export default function OnlyJams() {
  return (
    <div className="oj-container">
      <h1 className="port-title2">ONLY JAMS.</h1>
      <div className="port-video2">
        <div>
          <p className="oj-text">
            As a musician, I've realized the social media realm lacks a platform
            for users to share content solely based on music. OnlyJams is here
            to that solve problem by offering an application for users to send
            the music they love to their friends and the world. Key features:
            view, post, like, or save Jams, a friend searcher to add new
            friends, user authentication and authorization, and a built in
            messenger system.
          </p>
          <div className="oj-link">
          <a href="https://github.com/JeremeyHansen/BassBuddies">
            <GoMarkGithub />
          </a>
          </div>
        </div>
        <video src={OnlyJamsVid} loop autoPlay muted></video>
      </div>
    </div>
  );
}
