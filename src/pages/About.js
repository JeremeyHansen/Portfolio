import "../css/about.css";
import "animate.css";
import Me from "../memoji2.png";
import Bubble from "../quote-bubby.png";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header-container">
          <div class="animate__animated animate__bounceInDown">
            <img className="profile-pic" src={Me} alt="Jeremey Hansen"></img>
          </div>
          <div class="animate__animated animate__bounceInRight">
            <div className="quote-container">
              <img className="quote" src={Bubble} alt="quote bubble"></img>
              <h2 className="quote-text">Hello Everyone!</h2>
            </div>
          </div>
        </div>
        <div class="animate__animated animate__fadeInRightBig">
          <div className="about-section">
            <h1 class="animate__animated animate__rubberBand">
              Jeremey Hansen.
            </h1>
            <p>
              I am a dedicated musician and an avid outdoor enthusiast currently
              residing in San Diego, California! I have a passion for building
              things, and love the intellectual challenges required in the tech
              field. I am currently building full-stack web applications using
              JavaScript, HTML/CSS, React, SQL, Ruby, PHP, Python, Laravel,
              Native, Swift and Ruby on Rails. I've obtained strong
              problem-solving, communication, and collaboration skills through
              learning web development, plus previous experience in marketing,
              event coordination, music, and management. My inbox is always
              open! I love hearing about new opportunities, big or small.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
