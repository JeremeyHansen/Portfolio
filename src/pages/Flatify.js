import FlatifyVid from "../Flatiify.mp4";
import { GoMarkGithub } from "react-icons/go";
import '../css/flatify.css'

export default function Flatify() {
  return (
    <div className="oj-container">
      <h1 className="flat-title">Flatify.</h1>
      <div className="port-video2">
        <div>
          <p className="flat-text">
            A Spotify-inspired music application created to simplify the process
            of finding music and creating playlists. Taking advantage of
            Spotify's API, I built a fully functional music streaming
            application to search music and create and edit playlists that will
            persist to your Spotify account. Flatify also has a built in audio
            player to play whatever music you desire. 
          </p>
          <div className="flat-link">
            <a href="https://github.com/JeremeyHansen/Flatify-P2">
              <GoMarkGithub />
            </a>
          </div>
        </div>
        <video src={FlatifyVid} loop autoPlay muted></video>
      </div>
    </div>
  );
}
