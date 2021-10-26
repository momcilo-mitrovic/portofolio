import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Title from './components/Title/Title'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './Home'

function App() {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  )
}

export default App
