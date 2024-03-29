import "../css/about.css";
import image from "../profile.JPG";
import 'animate.css';

export default function About() {
  return (
    <div className="about-page">
      <h2 class="animate__animated animate__rubberBand">About Me</h2>
      <div className="about-container">
        <img className="profile-pic" src={image} alt="Jeremey Hansen"></img>
        <div className="about-section">
          <h1>Jeremey Hansen.</h1>
          <p>
            Hello everyone! My name is Jeremey Hansen. I am a dedicated musician
            and an avid outdoor enthusiast currently residing in San Diego,
            California! I have a passion for building things, and love the
            intellectual challenges required in the tech field. I am currently
            building full-stack web applications using JavaScript, HTML/CSS,
            React, SQL, Ruby, PHP, Python, Laravel, Native, Swift and Ruby on Rails. I've obtained strong
            problem-solving, communication, and collaboration skills through
            learning web development, plus previous experience in marketing,
            event coordination, music, and management. My inbox is always open!
            I love hearing about new opportunities, big or small. Whether you
            have a question or just want to say hi, I'll try my best to get back
            to you!
          </p>
        </div>
      </div>
    </div>
  );
}
