import React from 'react'
import { useForm } from 'react-hook-form'
import * as emailjs from 'emailjs-com'

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register('Name', { required: true, maxLength: 80 })} />
      <input type="text" placeholder="Message" {...register('Message', {})} />
      <input type="email" placeholder="Email" {...register('Email', {})} />

      <input type="submit" />
    </form>
  )
}
export default Form /* I installed react-hook-form */
