import './Projects.scss'
import { Helmet } from 'react-helmet'

function Projects() {
  return (
    <div className="Project">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Momcilo Mitrovic Portofolio Projects</title>
      </Helmet>
      <div className="Project-header-container">
        <div className="container Project-header">
          <h1> Projects </h1>
          <p>Here are some projects i have made</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
