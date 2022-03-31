import './Header.scss'
import useDarkMode from 'use-dark-mode'
import IconGithubSVG from './IconGithub.js'
import IconLinkedInSVG from './IconLinkedIn'
import IconSunSVG from './IconSun'
import IconMoonSVG from './IconMoon'
import IconTwitterSVG from './IconTwitter'

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
              <label className="menu-icon" htmlFor="menu-btn">
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
            <a target="_blank" rel="noreferrer" href="https://twitter.com/s_franxx">
              <span className="Iconlinktext">Twitter link</span>
              <span>
                <IconTwitterSVG />
              </span>
            </a>
          </div>
          {/* <div className="theme-toggle">
            <button type="button" onClick={darkMode.disable}>
              ☀
            </button>
            <button type="button" onClick={darkMode.enable}>
              ☾
            </button>
          </div> */}
          <div className="theme-toggle">
            <IconSunSVG />
            <div class="theme-toggle-toggler">
              <input type="checkbox" id="switch" />
              <label htmlFor="switch" onClick={darkMode.toggle}>
                Toggle
              </label>
            </div>
            <IconMoonSVG />
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
