import "../css/about.css";
import image from "../profile.JPG";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <>
      <div className="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("About Me").start();
          }}
        />
      </div>
      <div className="about-container">
        <div className="about-section">
          <h1>Jeremey Hansen.</h1>
          <p>
            Hello everyone! My name is Jeremey Hansen. I am a dedicated musician and
            an avid outdoor enthusiast currently residing in Charlotte, North
            Carolina! I have a passion for building things, and love the intellectual
            challenges required in the tech field. I am currently building
            full-stack web applications using JavaScript, HTML/CSS, React, SQL,
            Ruby, and Ruby on Rails. I've obtained strong problem-solving,
            communication, and collaboration skills through learning web
            development, plus previous experience in marketing, event
            coordination, music, and management. Feel free to shoot me a message if you have any questions
            or just want to say hi! 
          </p>
        </div>
          <img className="profile-pic" src={image} alt="Jeremey Hansen"></img>
      </div>
    </>
  );
}
