import "../css/home.css";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <>
    <div className="home-container">
      <div className="home-contents">
      <h5>Hello, my name is</h5>
      <h1>Jeremey Hansen.</h1>
      <div className="home-text">
      <h3>I like to build things on the internet.</h3>
      <p>
        I am a full stack software engineer based out of Charlotte, North
        Carolina. I specialize in planning, building and designing exceptional
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
