import './Card.css'
import IconApps from './IconApps'
import IconDesign from './IconDesign'
import IconDev from './IconDev'

function Card() {
  return (
    <section className="languages">
      <div className="container flex">
        <div className="card">
          <IconDesign />
          <h1> Web Design </h1>
          <h4>Colors, fonts, typography, components... all in one place, documented and easy to access.</h4>
        </div>
        <div className="card">
          <IconDev />
          <h1> Full Stack Development </h1>
          <h4> Cutting-edge and mobile responsive HTML5, CSS and React applications. I've got you covered. </h4>
        </div>
        <div className="card">
          <IconApps />
          <h1> App Development </h1>
          <h4> With more than 10 years of WordPress experience I can show you what works and what does not. </h4>
        </div>
      </div>
    </section>
  )
}

export default Card
