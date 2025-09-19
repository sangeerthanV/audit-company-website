import React, { useEffect, useState } from 'react';
import API from '../api';
import './Pages.css';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    API.get('/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <h2 className="page-title">Our Audit Services</h2>
      <p className="page-subtitle">
        We provide a wide range of professional audit services to help your business stay compliant and grow.
      </p>
      <div className="card-container">
        {services.length === 0 && (
          <>
            <div className="card">
              <h3>Financial Audit</h3>
              <p>Comprehensive review of your financial statements to ensure accuracy and compliance.</p>
            </div>
            <div className="card">
              <h3>Internal Audit</h3>
              <p>Evaluate internal processes, risk management, and operational efficiency.</p>
            </div>
            <div className="card">
              <h3>Compliance Audit</h3>
              <p>Ensure your business follows legal regulations and standards effectively.</p>
            </div>
          </>
        )}
        {services.map(service => (
          <div className="card" key={service._id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
