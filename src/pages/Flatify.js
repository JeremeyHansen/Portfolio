import FlatifyVid from "../Flatiify.mp4";
import { GoMarkGithub } from "react-icons/go";
import '../css/flatify.css'

export default function Flatify() {
  return (
    <div className="c-card">
    <div className="card-c" style={{ position: "relative", zIndex: "2" }}>
      <h1 className="port-title">FLATIFY.</h1>
      <div className="github-link">
        <a href="https://github.com/JeremeyHansen/Flatify-P2">
          <GoMarkGithub />
        </a>
      </div>
      <div className="port-video">
        <video src={FlatifyVid} loop autoPlay playsInline muted></video>
        <div>
          <p className="port-text">
          A Spotify-inspired music application created to simplify the process
            of finding music and creating playlists. Taking advantage of
            Spotify's API, I built a fully functional music streaming
            application to search music and create and edit playlists that will
            persist to your Spotify account. Flatify also has a built in audio
            player to play whatever music you desire. 
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
