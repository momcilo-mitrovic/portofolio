import './Button.scss'

function Button(props) {
  return (
    <div className="Button">
      <a href={props.link}>{props.children}</a>
    </div>
  )
}

export default Button
