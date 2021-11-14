import './Button.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Button() {
  return (
    <div className="button">
      <Link to="/about"></Link>
    </div>
  )
}

export default Button
