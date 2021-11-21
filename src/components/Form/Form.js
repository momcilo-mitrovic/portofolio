import "./Form.scss";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function Form() {
  const [mailSent, setMailSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_ilxby1c",
        "template_zzu0tv8",
        form.current,
        "user_S0TMnhXi9IKSH4otWECuh",
        setLoading(true)
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
          setMailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();

  return (
    <div className="Form">
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h1>Name</h1>
        </label>
        <input {...register("firstName", { required: true })} />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        <label>
          <h1>Email</h1>
        </label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors?.email?.type === "required" && <p>This field is required</p>}
        {errors?.email?.type === "pattern" && <p>Not valid email.</p>}
        <label>
          <h1>Message</h1>
        </label>
        <textarea {...register("message", { required: true })} />
        {errors?.message?.type === "required" && <p>This field is required</p>}
        <input type="submit" value="Send" />
      </form>
      {isLoading && (
        <div>
          <h3>Sending message...</h3>
        </div>
      )}
      {mailSent && (
        <div>
          <h3>Message sent</h3>
        </div>
      )}
    </div>
  );
}
export default Form;
