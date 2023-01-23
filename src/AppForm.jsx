import React, { useState } from 'react'

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" name="name" onChange={handleChange}></input>
      <input placeholder="email" name="email" onChange={handleChange}></input>
      <button>Submit</button>
    </form>
  )
}
