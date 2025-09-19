import React from 'react';

export default function Contact() {
  return (
    <div className="container">
      <h1 className="section-title">Contact Us</h1>
      <form className="card" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" style={{ width: "100%", marginBottom: "10px", padding: "8px" }} />
        <label>Message:</label>
        <textarea placeholder="Your Message" style={{ width: "100%", marginBottom: "10px", padding: "8px" }}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
