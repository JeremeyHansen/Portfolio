import NotefulVid from "../Noteful.mp4";
import { GoMarkGithub } from "react-icons/go";
import "../css/flatify.css";

export default function Noteful() {
  return (
    <div className="oj-container">
      <h1 className="flat-title">Noteful.</h1>
      <div className="port-video2">
        <div>
          <p className="flat-text">
            Noteful was designed to help solve the problem of missing important
            information. Noteful grants users the ability to create and
            subscribe to groups where they can view notes from classmates,
            co-workers/colleagues or whomever else is sharing relative
            information. Noteful offers collaborative groups where you can pick
            up where others left off. Key features: user authentication and
            authorization, create and subscribe to groups, and to post, edit, or
            delete notes.
          </p>
          <div className="flat-link">
            <a href="https://github.com/JeremeyHansen/Noteful">
              <GoMarkGithub />
            </a>
          </div>
        </div>
        <video src={NotefulVid} loop autoPlay muted></video>
      </div>
    </div>
  );
}
