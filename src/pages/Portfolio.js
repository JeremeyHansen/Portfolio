import "../css/portfolio.css";
import BassBuddy from "./BassBuddy.js";
import BassBuddy2 from "./BassBuddy2.js";
import PortHome from "./PortHome.js";
import PQ from './PureQuality.js';
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
        onClick={() => ref.current.scrollTo(1)}
      >
        <PortHome />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        onClick={() => ref.current.scrollTo(1.6)}
        factor={1}
        speed={0.5}
        style={{
          backgroundColor: "#5cdb95",
          marginLeft: "160px",
          marginRight: "auto",
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
          marginLeft: "160px",
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
          backgroundImage: "linear-gradient(#edf5e1, #a887fb, #edf5e1 130%)",
          marginLeft: "100px",
        }}
      >
        <OnlyJams />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        factor={1}
        speed={0.8}
        onClick={() => ref.current.scrollTo(5)}
        style={{
          backgroundImage: "linear-gradient(#fb8787, #edf5e1)",
          marginLeft: "160px",
        }}
      >
        <PQ />
      </ParallaxLayer>
      <ParallaxLayer
        offset={5}
        speed={0.9}
        style={{ backgroundImage: "linear-gradient(#403F44, #1E1B32)" }}
        onClick={() => ref.current.scrollTo(6)}

      >
        <Flatify />
      </ParallaxLayer>
      <ParallaxLayer
        offset={6}
        speed={1}
        style={{ backgroundImage: "linear-gradient(black, 90%, #f4f277)" }}
        onClick={() => ref.current.scrollTo(7)}

      >
        <Noteful />
      </ParallaxLayer>
      <ParallaxLayer
        offset={7}
        speed={1.5}
        style={{ backgroundImage: "linear-gradient(#e1a3e7, #7435e1)" }}
        onClick={() => ref.current.scrollTo(0)}

      >
        <WeSearch />
      </ParallaxLayer>
    </Parallax>
  );
}
