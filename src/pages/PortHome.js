import "../css/porthome.css";
import { BsArrowDown } from "react-icons/bs";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function PortHome() {
  return (
    <div className="porthome-container">
      <div className="arrow-container">
      <div class="arrow bounce2">
        <FaAngleDoubleDown />
        <a class="fa fa-arrow-down fa-2x arrow-class" href="#"></a>
      </div>
      <div class="arrow bounce arrow2">
        <BsArrowDown className="arrow2"/>
        <a class="fa fa-arrow-down fa-2x  arrow-class" href="#"></a>
      </div>
      <div class="arrow bounce2">
        <FaAngleDoubleDown />
        <a class="fa fa-arrow-down fa-2x arrow-class" href="#"></a>
      </div>
      </div>
      <div className="smile"></div>
      <h4 className="porthome-bottom">click anywhere to scroll.</h4>
    </div>
  );
}
