import './Header.scss'
import useDarkMode from 'use-dark-mode'
import Toggle from '../../components/Toggle/Toggle'
import IconGithubSVG from './IconGithub.js'
import IconLinkedInSVG from './IconLinkedIn'

function Header() {
  const darkMode = useDarkMode(false)

  return (
    <div className="Header">
      <div className="container">
        <header className="Header-header">
          <h1>
            <a href="/">Momcilo Mitrovic</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="menu-mobile-container">
            <nav className="menu-mobile">
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" for="menu-btn">
                <span className="navicon"></span>
              </label>
              <ul className="menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="social-links">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/momcilo-mitrovic-548849224/">
              <span className="Iconlinktext">Linkedin link</span>
              <span>
                <IconLinkedInSVG />
              </span>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/momcilo-mitrovic">
              <span className="Iconlinktext">Github link</span>
              <span>
                <IconGithubSVG />
              </span>
            </a>
          </div>
          <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        </header>
      </div>
    </div>
  )
}

export default Header
