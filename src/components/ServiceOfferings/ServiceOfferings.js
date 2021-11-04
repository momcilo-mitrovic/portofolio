import './ServiceOfferings.css'
import Card from '../Card/Card'
import IconDesign from '../Card/IconDesign'
import IconDev from '../Card/IconDev'
import IconApps from '../Card/IconApps'

function ServiceOfferings() {
  return (
    <div className="ServiceOfferings">
      <h2>What I can Offer</h2>
      <div className="container flex">
        <Card>
          <IconDesign />
          <h3>Web Design</h3>
          <p>Colors, fonts, typography, components... all in one place, documented and easy to access.</p>
        </Card>
        <Card>
          <IconDev />
          <h3> Full Stack Development </h3>
          <p>Cutting-edge and mobile responsive HTML5, CSS and React applications. I've got you covered.</p>
        </Card>
        <Card>
          <IconApps />
          <h3> App Development </h3>
          <p>With more than 10 years of WordPress experience I can show you what works and what does not.</p>
        </Card>
      </div>
    </div>
  )
}

export default ServiceOfferings
