import './Home.css'
import ServiceOfferings from '../../components/ServiceOfferings/ServiceOfferings'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <Hero />
      <ServiceOfferings />
    </div>
  )
}

export default Home
