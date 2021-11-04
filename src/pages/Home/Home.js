import "./Home.css";
import Hero from "../../components/Hero/Hero";
import ServiceOfferings from "../../components/ServiceOfferings/ServiceOfferings";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <ServiceOfferings />
    </div>
  );
}

export default Home;
