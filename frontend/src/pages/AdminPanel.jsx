import React from 'react';
import './Pages.css';


const dashboardCards = [
  { title: "Manage Services", value: 12 },
  { title: "Manage Clients", value: 8 },
  { title: "Messages Received", value: 15 },
  { title: "Blog Posts", value: 5 }
];

export default function AdminPanel() {
  return (
    <div className="container">
      <h1 className="section-title">Admin Dashboard</h1>
      <div className="grid">
        {dashboardCards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
