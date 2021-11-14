import "./Hero.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="Hero">
      <h1>Hi, I am Momcilo Mitrovic</h1>
      <h2> From Serbia, Belgrade </h2>
      <div className="Button-wrapper">
        <Button link="/about">About me</Button>
        <Button link="/contact">Contact me</Button>
      </div>
    </div>
  );
}

export default Hero;
