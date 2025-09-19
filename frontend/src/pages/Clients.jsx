import React from 'react';

const clientsData = [
  { name: "ABC Ltd", feedback: "Excellent audit and timely reports." },
  { name: "XYZ PLC", feedback: "Professional and reliable service." },
  { name: "Global Tech", feedback: "Highly recommended audit company." }
];

export default function Clients() {
  return (
    <div className="container">
      <h1 className="section-title">Our Clients</h1>
      <div className="grid">
        {clientsData.map((c, index) => (
          <div className="card" key={index}>
            <h3>{c.name}</h3>
            <p>"{c.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
