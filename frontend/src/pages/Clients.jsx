import React, { useEffect, useState } from 'react';
import API from '../api';
import './Pages.css';

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    API.get('/clients')
      .then(res => setClients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="page-container">
      <h2 className="page-title">Our Clients</h2>
      <div className="card-container">
        {clients.map(client => (
          <div className="card" key={client._id}>
            <h3>{client.name}</h3>
            <p>"{client.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
