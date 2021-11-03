import "./Home.css";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Title />
      <Card />

      {/*

      <ServiceOfferings />

    */}
    </div>
  );
}

export default Home;
