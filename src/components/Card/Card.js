import ImageAmazon from '../../amazon.png'
import ImageApple from '../../apple.png'
import ImageKurac from '../../kurac.png'
import './Card.css'

function Card() {
  return (
    <section className="languages">
      <div className="container flex">
        <div className="card">
          <img src={ImageApple} />
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe alias ducimus tenetur, ut aliquam
            veniam minus rerum nam voluptas eligendi, praesentium provident placeat a quibusdam culpa maiores illo
            neque?
          </h4>
        </div>
        <div className="card">
          <img src={ImageKurac} />
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe alias ducimus tenetur, ut aliquam
            veniam minus rerum nam voluptas eligendi, praesentium provident placeat a quibusdam culpa maiores illo
            neque?
          </h4>
        </div>
        <div className="card">
          <img src={ImageAmazon} />
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe alias ducimus tenetur, ut aliquam
            veniam minus rerum nam voluptas eligendi, praesentium provident placeat a quibusdam culpa maiores illo
            neque?
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Card
