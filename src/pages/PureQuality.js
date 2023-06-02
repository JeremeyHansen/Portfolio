import Phone1 from '../pqpics/phone1pic.png'
import Phone2 from '../pqpics/phone2pic.png'
import Computer from '../pqpics/computerpic.png'
import '../css/pq.css'
import { GoMarkGithub } from "react-icons/go";

export default function PureQuality(){
    return (
        <>
        <h1 className="pq-title">Pure Quality.</h1>
          <div>
          <p className="pq-text">
            An application I built for a client and his pressure washing business. 
          </p>
          <div className="pq-img-container">
            <img className="pq-phone2"src={Phone2} alt="phone view of website" />
            <img className="pq-computer" src={Computer} alt="computer view of website" />
            <img className="pq-phone1" src={Phone1} alt="phone view of website" />

          </div>
          <button className="bb-button">
            <a href="https://purequality.netlify.app">Visit Website</a></button>
          </div>
          <div className="pq-link">
          <a href="https://github.com/JeremeyHansen/BassBuddies">
            <GoMarkGithub />
          </a>
          </div>
      </>
    )
}