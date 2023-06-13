import "../css/portfolio.css";
import BassBuddy from "./BassBuddy.js";
import PortHome from "./PortHome.js";
import PQ from "./PureQuality.js";
import OnlyJams from "./OnlyJams.js";
import Flatify from "./Flatify.js";
import Noteful from "./Noteful.js";
import WeSearch from "./WeSearch.js";

export default function Portfolio() {

  return (
    <div className="porto-containo">
    <div>
      <div>
      <PortHome />
      </div>    
    </div>
    <div className="outer-port-container">
      <BassBuddy />
    </div>
    <div className="outer-port-container">
      <div className="inner-port-container">
      <OnlyJams />
      </div>    
    </div>
    <div className="outer-port-container">
      <div className="inner-port-container">
      <PQ />
      </div>    
    </div>
    <div className="outer-port-container">
      <div className="inner-port-container">
      <Flatify />
      </div>    
    </div>
    <div className="outer-port-container">
      <div className="inner-port-container">
      <Noteful />
      </div>    
    </div>
    <div className="outer-port-container">
      <div className="inner-port-container">
      <WeSearch />
      </div>    
    </div>
    </div>
  );
}
