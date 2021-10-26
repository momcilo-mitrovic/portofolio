import "./About.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function About() {
  return (
    <Router>
      <div>
        <div className="About">
          <Header />
        </div>
        <p>About me text</p>
      </div>
    </Router>
  );
}

export default About;
