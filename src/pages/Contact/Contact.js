import "./Contact.css";
import Form from "../../components/Form/Form";

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact-header-container">
        <div className="container Contact-header">
          <h1>Contact me</h1>
        </div>
      </div>
      <div className="container flex">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
