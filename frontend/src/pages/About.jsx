import React from 'react';

export default function About() {
  return (
    <div className="container">
      <h1 className="section-title">About Us</h1>
      <p>Audit Company has been providing professional audit and financial services for over 10 years. Our team of experts ensures accuracy, compliance, and trust for all clients.</p>
      <div className="grid">
        <div className="card">
          <h3>Our Vision</h3>
          <p>To be the leading audit and advisory firm in Sri Lanka.</p>
        </div>
        <div className="card">
          <h3>Our Mission</h3>
          <p>Deliver professional, reliable, and client-focused services.</p>
        </div>
      </div>
    </div>
  );
}
