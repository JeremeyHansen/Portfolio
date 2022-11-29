import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <p>
            <span>Email: </span> jeremeythansen@gmail.com
          </p>
        </li>
        <li>
          <p>
            <span>Phone:</span> (980)-422-5555
          </p>
        </li>
        </ul>
        <ul>
        <li>
          <a className="footer-logo" href="https://github.com/JeremeyHansen">
            <GoMarkGithub />
          </a>
        </li>
        <li>
          <a className="footer-logo" href="https://www.linkedin.com/in/jeremey-hansen-77979a10a/">
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
