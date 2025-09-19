import React from 'react';
import './Pages.css';

export default function About() {
  return (
    <div className="page-container">
      <h2 className="page-title">About Our Company</h2>
      <p className="page-subtitle">
        Oncode Audit Solutions is a leading audit and consulting firm in Sri Lanka. We are committed to delivering high-quality services and building lasting relationships with our clients.
      </p>
      <div className="about-cards">
        <div className="card">
          <h3>Our Mission</h3>
          <p>To provide transparent, reliable, and professional audit services to help businesses thrive.</p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>Be the most trusted audit partner in the region, known for excellence and integrity.</p>
        </div>
        <div className="card">
          <h3>Our Values</h3>
          <p>Integrity, professionalism, accuracy, and client satisfaction guide everything we do.</p>
        </div>
      </div>
    </div>
  );
}
