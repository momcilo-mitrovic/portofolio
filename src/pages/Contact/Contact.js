import './Contact.scss'
import Form from '../../components/Form/Form'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <div className="Contact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Momcilo Mitrovic Portofolio Contact</title>
      </Helmet>
      <div className="Contact-header-container">
        <div className="container Contact-header">
          <h1>Contact me</h1>
        </div>
      </div>
      <div className="container flex">
        <Form />
      </div>
    </div>
  )
}

export default Contact
