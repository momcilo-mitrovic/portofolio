import './Home.scss'
import Hero from '../../components/Hero/Hero'
import ServiceOfferings from '../../components/ServiceOfferings/ServiceOfferings'

function Home() {
  return (
    <div className="Home">
      <Hero />
      <ServiceOfferings />
    </div>
  )
}

export default Home
