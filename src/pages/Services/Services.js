import "./Services.scss";
import Card from "../../components/Card/Card";
import IconDev from "../../components/Card/IconDev";
import IconDesign from "../../components/Card/IconDesign";
import IconApps from "../../components/Card/IconApps";

function Services() {
  return (
    <div className="Services">
      <div className="Services-header-container">
        <div className="container Services-header">
          <h1> Services </h1>
        </div>
      </div>
      <div className="Services-cards">
        <Card>
          <IconDesign />
          <h3>Web Design</h3>
          <p>
            Colors, fonts, typography, components... all in one place,
            documented and easy to access.
          </p>
        </Card>
        <Card>
          <IconDev />
          <h3> Full Stack Development </h3>
          <p>
            Cutting-edge and mobile responsive HTML5, CSS and React
            applications. I've got you covered.
          </p>
        </Card>
        <Card>
          <IconApps />
          <h3> Single-page Apps </h3>
          <p>
            {" "}
            Modern React apps that are super fast and setup with no
            configuration.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Services;
