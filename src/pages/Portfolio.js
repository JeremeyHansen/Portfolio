import "../css/portfolio.css";
import BassBuddy from "./BassBuddy.js";
import BassBuddy2 from "./BassBuddy2.js";
import PortHome from "./PortHome.js";
import PQ from "./PureQuality.js";
import { useRef } from "react";
import OnlyJams from "./OnlyJams.js";
import Flatify from "./Flatify.js";
import Noteful from "./Noteful.js";
import WeSearch from "./WeSearch.js";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Portfolio() {
  const ref = useRef();

  return (
    <Parallax
      pages={8}
      ref={ref}
      style={{
        top: "0",
        left: "0",
        backgroundColor: "#edf5e1",
      }}
    >
      <ParallaxLayer
        offset={0}
        speed={1.5}
        style={{ backgroundColor: "#edf5e1" }}
        onClick={() => ref.current.scrollTo(0.97)}
      >
        <PortHome />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        onClick={() => ref.current.scrollTo(1.62)}
        factor={1}
        speed={0.5}
        style={{
          backgroundColor: "#5cdb95",
          marginLeft: "260px",
          marginRight: "auto",
          borderRadius: "35px",
          width: '80%',
          borderStyle: 'solid',
          borderWidth: '5px 5px 0px 5px',
          borderColor: 'white'


        }}
      >
        <BassBuddy />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.9}
        factor={1}
        speed={0.6}
        style={{
          backgroundImage: "linear-gradient(#5cdb95, #edf5e1)",
          marginLeft: "260px",
          width: '80%',
          borderStyle: 'solid',
          borderWidth: '0px 5px 5px 5px',
          borderColor: 'white',
          borderRadius: "0 0 35px 35px"
        }}
        onClick={() => ref.current.scrollTo(2.4)}
      >
        <div className="" bb2-container>
          <BassBuddy2 />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.9}
        factor={0.9}
        speed={1.2}
        onClick={() => ref.current.scrollTo(3)}
        style={{
          backgroundImage: "linear-gradient(#6b87b2, #0c254a, 90%, #edf5e1)",
          marginLeft: "120px",
          borderRadius: "35px",
          width: '88%',
          borderStyle: 'solid',
          borderWidth: '5px',
          borderColor: 'white',

        }}
      >
        <OnlyJams />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.05}
        factor={0.9}
        speed={0.8}
        onClick={() => ref.current.scrollTo(4)}
        style={{
          backgroundImage: "linear-gradient(white, 30%, #76bbff, 95%, black)",
          marginLeft: "178px",
          borderRadius: "35px",
          width: '86%',
          borderStyle: 'solid',
          borderWidth: '5px',
          borderColor: 'white',

        }}
      >
        <PQ />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.05}
        speed={0.9}
        factor={0.8}
        style={{
          backgroundImage: "linear-gradient(#403F44, #1E1B32)",
          borderRadius: "35px",
          right: '0',
          marginLeft: '110px',
          width: '80%',
          borderStyle: 'solid',
          borderWidth: '5px',
          borderColor: 'white',
        }}
        onClick={() => ref.current.scrollTo(5)}
      >
        <Flatify />
      </ParallaxLayer>
      <ParallaxLayer
        offset={5.05}
        speed={1}
        factor={0.9}
        style={{ backgroundImage: "linear-gradient(black, 90%, #f4f277)" }}
        onClick={() => ref.current.scrollTo(6)}
      >
        <Noteful />
      </ParallaxLayer>
      <ParallaxLayer
        offset={6}
        speed={1.5}
        style={{ backgroundImage: "linear-gradient(#e1a3e7, #7435e1)" }}
        onClick={() => ref.current.scrollTo(0)}
      >
        <WeSearch />
      </ParallaxLayer>
    </Parallax>
  );
}
