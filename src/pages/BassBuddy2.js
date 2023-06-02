import Phone1 from "../bbpics/1.png";
import Phone2 from "../bbpics/2.png";
import Phone3 from "../bbpics/3.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { GoMarkGithub } from "react-icons/go";

export default function BassBuddy() {
  return (
    <div className="phone-container">
      <Parallax pages={1} style={{ top: "0", left: "0", marginTop: '200px' }}>
        <ParallaxLayer speed={2.3}>
          {" "}
          <div>
          <img className="phone2" alt="phone view" src={Phone2}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={.6} offset={.1}>
          {" "}
          <img className="phone3" alt="phone view" src={Phone3}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={.1} speed={1.9}>
          {" "}
          <div>
          <img className="phone1" alt="phone view" src={Phone1}></img>
          </div>
        </ParallaxLayer>
      </Parallax>
      <div className="bb-link">
          <a href="https://github.com/JeremeyHansen/BassBuddies">
            <GoMarkGithub />
          </a>
        </div>
    </div>
  );
}
