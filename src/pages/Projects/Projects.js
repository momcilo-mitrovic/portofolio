import './Projects.scss'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'

function requestUserRepos(userName) {
  // Create new XMLHttpRequest object
  const xhr = new XMLHttpRequest()

  // GitHub endpoint, dynamically passing in specified username
  const url = `https://api.github.com/users/${userName}/repos`

  // Open a new connection, using a GET request via URL endpoint
  // Providing 3 arguments (GET/POST, The URL, Async True/False)
  xhr.open('GET', url, true)

  // When request is received
  // Process it here
  xhr.onload = function () {
    // Parse API data into JSON
    const data = JSON.parse(this.response)

    // Log the response
    console.log(data)
  }

  // Send the request to the server
  xhr.send()
}

function Projects() {
  return (
    <div className="Projects">
      {requestUserRepos('facebook')}

      <Helmet>
        <meta charSet="utf-8" />
        <title>Momcilo Mitrovic Portofolio Projects</title>
      </Helmet>
      <div className="Projects-header-container">
        <div className="container Projects-header">
          <h1> Projects </h1>
          <p>Here are some projects i have made</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
