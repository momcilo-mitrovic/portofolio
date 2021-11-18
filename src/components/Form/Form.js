import './Form.scss'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const form = useRef()

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_ilxby1c",
  //       "template_zzu0tv8",
  //       form.current,
  //       "user_S0TMnhXi9IKSH4otWECuh"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="Form">
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h1>Name</h1>
        </label>
        <input {...register('firstName', { required: true, maxLength: 20 })} />
        {errors?.firstName?.type === 'required' && <p>This field is required</p>}
        {errors?.firstName?.type === 'maxLength' && <p>First name cannot exceed 20 characters</p>}
        <label>
          <h1>Email</h1>
        </label>
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors?.email?.type === 'required' && <p>This field is required</p>}
        {errors?.email?.type === 'pattern' && <p>Not valid email.</p>}
        <label>
          <h1>Message</h1>
        </label>
        <textarea {...register('message', { required: true, maxLength: 100 })} />
        {errors?.message?.type === 'required' && <p>This field is required</p>}
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}
export default Form
