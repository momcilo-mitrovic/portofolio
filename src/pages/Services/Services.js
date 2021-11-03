import "./Services.css";
import Header from "../../components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Services() {
  return (
    <div className="Services">
      <div className="Services-header-container">
        <div className="container Services-header">
          <h1> Something about myself </h1>
          <p>
            Hello, my name is Momcilo Mitrovic and I’m a self-taught web
            designer full stack developer. I enjoy creating cool designs,
            writing code and finding simple solutions to problems. I reside in
            Serbia, Belgrade and i am 17 years old.
          </p>
        </div>
      </div>

      <div className="container">
        <p>Services</p>
      </div>
    </div>
  );
}

export default Services;
