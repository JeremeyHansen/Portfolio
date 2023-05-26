import WeSearchVid from "../wesearch.mp4";
import { GoMarkGithub } from "react-icons/go";

export default function WeSearch() {
  return (
    <div className="oj-container">
      <h1 className="flat-title">We Search.</h1>
      <div className="port-video2">
        <div>
          <p className="flat-text">
            We Search is an Atlanta based Yelp mock up. Users can sign up and
            add whatever places they like as well as leave reviews on previously
            listed places. Key features: backend REST API, JWT user
            authentication, full CRUD on two models.
          </p>
          <div className="flat-link">
            <a href="https://github.com/JeremeyHansen/We-Search---Frontend">
              <GoMarkGithub />
            </a>
          </div>
        </div>
        <video src={WeSearchVid} loop autoPlay muted></video>
      </div>
    </div>
  );
}
