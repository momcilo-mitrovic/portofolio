import './Form.css'
import React, { useRef } from 'react'
// import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com'

function Form() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ilxby1c', 'template_zzu0tv8', form.current, 'user_S0TMnhXi9IKSH4otWECuh').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      },
    )
  }

  return (
    <div className="Form">
      <form ref={form} onSubmit={sendEmail}>
        <label>
          <h1>Name</h1>
        </label>
        <input type="text" name="user_name" />
        <label>
          <h1>Email</h1>
        </label>
        <input type="email" name="user_email" />
        <label>
          <h1>Message</h1>
        </label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}
export default Form /* I installed react-hook-form */
