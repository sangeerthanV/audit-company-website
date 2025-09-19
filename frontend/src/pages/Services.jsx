import React from 'react';

const servicesData = [
  { title: "Audit Services", description: "Full audit for small and medium enterprises." },
  { title: "Tax Consulting", description: "Accurate tax filing and advisory services." },
  { title: "Financial Planning", description: "Strategic financial planning for businesses." },
  { title: "Internal Control", description: "Improve business operations and risk management." }
];

export default function Services() {
  return (
    <div className="container">
      <h1 className="section-title">Our Services</h1>
      <div className="grid">
        {servicesData.map((s, index) => (
          <div className="card" key={index}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
