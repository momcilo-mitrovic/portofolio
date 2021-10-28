import './Header.css'
import useDarkMode from 'use-dark-mode'
import Toggle from '../../components/Toggle/Toggle'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        </header>
      </div>
    </div>
  )
}

export default Header
