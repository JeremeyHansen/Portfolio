import WeSearchVid from "../wesearch.mp4";
import { GoMarkGithub } from "react-icons/go";

export default function WeSearch() {
  return (
    <div className="c-card">
    <div className="card-c" style={{ position: "relative", zIndex: "2" }}>
      <h1 className="port-title">WE SEARCH.</h1>
      <div className="github-link">
        <a href="https://github.com/JeremeyHansen/We-Search---Frontend">
          <GoMarkGithub />
        </a>
      </div>
      <div className="port-video">
        <div>
          <p className="port-text">
          We Search is an Atlanta based Yelp mock up. Users can sign up and
            add whatever places they like as well as leave reviews on previously
            listed places. Key features: backend REST API, JWT user
            authentication, full CRUD on two models.
          </p>
        </div>
        <video src={WeSearchVid} loop autoPlay muted></video>
      </div>
    </div>
  </div>
  );
}
