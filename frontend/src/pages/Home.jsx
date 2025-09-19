import React from 'react';
import './Pages.css';


export default function Home() {
  return (
    <div className="container">
      <h1 className="section-title">Welcome to Audit Company</h1>
      <p>We provide professional audit, advisory, and financial services to clients all over Sri Lanka.</p>
      <div className="grid">
        <div className="card">
          <h3>Professional Audit</h3>
          <p>High-quality auditing to ensure compliance and trust for your business.</p>
        </div>
        <div className="card">
          <h3>Financial Advisory</h3>
          <p>Expert advice on finance management, tax planning, and risk assessment.</p>
        </div>
        <div className="card">
          <h3>Client Support</h3>
          <p>Dedicated client support to answer queries and assist with reports.</p>
        </div>
      </div>
    </div>
  );
}
