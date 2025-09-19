import React, { useState } from 'react';
import API from '../api';
import './Pages.css';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    API.post('/contacts', form)
      .then(res => {
        alert('Message sent!');
        setForm({ name:'', email:'', message:'' });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required/>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required/>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required/>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
