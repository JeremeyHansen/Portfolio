import "../css/porthome.css";
import { BsArrowDown } from "react-icons/bs";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function PortHome() {
  return (
    <div className="porthome-container">
      <div className="arrow-container">
      <div class="arrow bounce2">
        <FaAngleDoubleDown />
      </div>
      <div class="arrow bounce arrow2">
        <BsArrowDown className="arrow2"/>
      </div>
      <div class="arrow bounce2">
        <FaAngleDoubleDown />
      </div>
      </div>
      <div className="smile"></div>
      <h4 className="porthome-bottom">click anywhere to scroll.</h4>
    </div>
  );
}
