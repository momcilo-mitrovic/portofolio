import "./Button.scss";
import { BrowserRouter as Link } from "react-router-dom";

function Button(props) {
  return (
    <div className="Button">
      <a href={props.link}>{props.children}</a>
    </div>
  );
}

export default Button;
