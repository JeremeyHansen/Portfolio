import "../css/home.css";
import { Link } from "react-router-dom";
import 'animate.css';

export default function Home() {
  return (
    <>
    <div className="home-container">
      <div className="home-contents">
      <h5>Hello, my name is</h5>
      <h1 class="animate__animated animate__rubberBand">Jeremey Hansen.</h1>
      <div className="home-text">
      <h3>I build things on the internet.</h3>
      <p>
        I am a full stack software engineer based out of Charlotte, North
        Carolina. I specialize in the planning, designing and building of exceptional
        websites, applications, and everything in between.
      </p>
      <Link to="/contact">
      <button className="contact-btn">Message Me</button>     
      </Link>
      </div>
      </div>
    </div>
    </>
  );
}
