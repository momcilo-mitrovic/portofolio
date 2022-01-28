import "./Footer.scss";
import IconGithubSVG from "./IconGithub.js";
import IconLinkedInSVG from "./IconLinkedIn";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <footer className="Footer-footer">
          <p>
            <span>&copy; 2021</span>
            <a href="/">Momcilo Mitrovic</a>
          </p>
          <div className="social-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/momcilo-mitrovic-548849224/"
            >
              <span className="Iconlinktext">Linkedin link</span>
              <span>
                <IconLinkedInSVG />
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/momcilo-mitrovic"
            >
              <span className="Iconlinktext">Github link</span>
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
