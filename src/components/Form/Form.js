import React, { useRef } from "react";
// import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ilxby1c",
        "template_zzu0tv8",
        form.current,
        "user_S0TMnhXi9IKSH4otWECuh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
export default Form; /* I installed react-hook-form */
