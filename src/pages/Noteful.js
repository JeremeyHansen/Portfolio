import NotefulVid from "../Noteful.mp4";
import { GoMarkGithub } from "react-icons/go";
import "../css/flatify.css";

export default function Noteful() {
  return (
    <div className="c-card">
    <div className="card-c" style={{ position: "relative", zIndex: "2" }}>
      <h1 className="port-title">NOTEFUL.</h1>
      <div className="github-link">
        <a href="https://github.com/JeremeyHansen/Noteful">
          <GoMarkGithub />
        </a>
      </div>
      <div className="port-video">
        <div>
          <p className="port-text">
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
        <video src={NotefulVid} loop autoPlay playsInline muted></video>
      </div>
    </div>
    </div>
  );
}
