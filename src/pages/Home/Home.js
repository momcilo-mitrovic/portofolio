import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import ServiceOfferings from "../../components/ServiceOfferings/ServiceOfferings";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="Home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Momcilo Mitrovic Portofolio</title>
      </Helmet>
      <Hero />
      <ServiceOfferings />
    </div>
  );
}

export default Home;
