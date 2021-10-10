import React from "react"
import { form, form__label, form__input, form__button } from "./form.module.css"
import { navigate } from "@reach/router"

export default ({ handleSubmit, handleUpdate }) => (
  <form
    className={form}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/app/profile`)
    }}
  >
    
    <input type="text" name="license" id="license" placeholder=" license no" />

    <input type="text" name="email" id="email" placeholder=" Email Address" />

    <input type="text" name=" password" id="password" placeholder=" Password" />

    <input type="submit" value="Login" />
  </form>
)
