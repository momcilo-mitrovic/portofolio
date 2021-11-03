import './About.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function About() {
  return (
    <div className="About">
      <div className="About-header">
        <h1> Something about myself </h1>
        <p>
          Hello, my name is Momcilo Mitrovic and I’m a self-taught web designer full stack developer. I enjoy creating
          cool designs, writing code and finding simple solutions to problems. I reside in Serbia, Belgrade and i am 17
          years old.
        </p>
      </div>

      <div className="container">
        <h1> My Skills </h1>
        <p>
          My main skills and service offerings are Design Systems, Full stack development and you can read more about
          that on my Services page. I am also skilled in these other areas: Graphic design, photo editing, interface
          design and user experience design. Setting up version control with GitHub and working with package managers. I
          am good at Windows environments.
        </p>

        <h1> Technologies </h1>
        <p>I like and use technologies like SASS, Node.js, React.js, Webpack, Git and a lot more.</p>

        <h1> My tech stack</h1>
        <p> The tools i use for personal work:</p>

        <p> Coding </p>
        <ul>
          <li> My primary code editor is Visual Studio Code. I use the Everset theme. </li>
          <li> I use React as my primary library for building user interfaces. </li>
          <li>
            {' '}
            For Css, I like using SASS and Tailwind I have also used CSS Modules and Styled Components when it comes to
            styling React apps.{' '}
          </li>
          <li>
            {' '}
            If I’m making a web app, for the front-end I use the create-react-app boilerplate as it’s the official one
            from the team that made React, but I also add react-router-dom.{' '}
          </li>
          <li>
            {' '}
            I use Git bash as my terminal when I’m on Windows. To share code or find inspiration I like to use CodePen
            or CodeSandbox.
          </li>
        </ul>

        <p> Tools i use for design </p>

        <ul>
          <li>Figma for designing user interfaces</li>
          <li>Adobe Photoshop for editing pictures and photographs.</li>
        </ul>
      </div>
    </div>
  )
}

export default About
