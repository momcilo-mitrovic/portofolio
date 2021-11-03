import './Header.css'
import useDarkMode from 'use-dark-mode'
import Toggle from '../../components/Toggle/Toggle'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import IconGithubSVG from './IconGithub.js'
import IconLinkedInSVG from './IconLinkedIn'

function Header() {
  const darkMode = useDarkMode(false)

  return (
    <div className="Header">
      <div className="container">
        <header className="Header-header">
          <h1>
            <Link to="/">Momcilo Mitrovic</Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="social-links">
            <a target="_blank" href="https://www.linkedin.com/in/momcilo-mitrovic-548849224/">
              <span>
                <IconLinkedInSVG />
              </span>
            </a>
            <a target="_blank" href="https://github.com/momcilo-mitrovic">
              <span>
                <IconGithubSVG />
              </span>
            </a>
          </div>
        </header>
      </div>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  )
}

export default Header
