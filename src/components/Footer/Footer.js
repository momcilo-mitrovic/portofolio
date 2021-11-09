import "./Footer.css";
import { BrowserRouter as Link } from "react-router-dom";
import IconGithubSVG from "./IconGithub.js";
import IconLinkedInSVG from "./IconLinkedIn";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <footer className="Footer-footer">
          <p>
            <span>&copy; 2021</span>
            <Link to="/">Momcilo Mitrovic</Link>
          </p>
          <div className="social-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/momcilo-mitrovic-548849224/"
            >
              <span>
                <IconLinkedInSVG />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/momcilo-mitrovic"
            >
              <span>
                <IconGithubSVG />
              </span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
