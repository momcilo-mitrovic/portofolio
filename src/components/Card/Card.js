import "./Card.css";

function Card(props) {
  return <section className="Card">{props.children}</section>;
}

export default Card;
