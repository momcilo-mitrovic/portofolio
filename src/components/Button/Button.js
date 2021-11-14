import './Button.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Button(props) {
  return (
    <div className="Button">
      <Link to={props.link}>{props.children}</Link>
    </div>
  )
}

export default Button
