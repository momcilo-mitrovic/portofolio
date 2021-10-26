import "./Card.css";
import ImageApple from "../../apple.png";
import ImageAmazon from "../../amazon.png";
import ImageKurac from "../../kurac.png";

import IconDesign from "./IconDesign";
import IconDev from "./IconDev";
import IconApps from "./IconApps";

function Card() {
  return (
    <section className="languages">
      <div className="container flex">
        <div className="card">
          <IconDesign />
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            saepe alias ducimus tenetur, ut aliquam veniam minus rerum nam
            voluptas eligendi, praesentium provident placeat a quibusdam culpa
            maiores illo neque?
          </h4>
        </div>
        <div className="card">
          <IconDev />
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            saepe alias ducimus tenetur, ut aliquam veniam minus rerum nam
            voluptas eligendi, praesentium provident placeat a quibusdam culpa
            maiores illo neque?
          </h4>
        </div>
        <div className="card">
          <IconApps />
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            saepe alias ducimus tenetur, ut aliquam veniam minus rerum nam
            voluptas eligendi, praesentium provident placeat a quibusdam culpa
            maiores illo neque?
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Card;
