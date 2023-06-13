import Phone1 from '../pqpics/phone1pic.png'
import Phone2 from '../pqpics/phone2pic.png'
import Computer from '../pqpics/computerpic.png'
import '../css/pq.css'
import { GoMarkGithub } from "react-icons/go";

export default function PureQuality(){
    return (
      <div className="c-card">
      <div className="card-c" style={{ position: "relative", zIndex: "2" }}>
        <h1 className="port-title">PURE QUALITY.</h1>
        <div className="github-link">
          <a href="https://github.com/JeremeyHansen/PureQuality">
            <GoMarkGithub />
          </a>
        </div>
        <button className="bb-button">
        <a href="https://purequality.netlify.app">Visit Website</a>
        </button>        
      <div className="phone-container">
        <div>
          <img className="phone1" alt="phone view" src={Phone1}></img>
        </div>
        <div>
          <img className="phone2" alt="phone view" src={Phone2}></img>
        </div>
        <div>
          <img className="phone3" alt="phone view" src={Computer}></img>
        </div>
      </div>
          <div>
            <p className="port-text3">
            An application I built for a client and his pressure washing business.
            </p>
          </div>
      </div>
    </div>
    )
}