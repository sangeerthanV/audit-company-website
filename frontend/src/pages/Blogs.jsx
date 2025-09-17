import { useEffect, useState } from 'react';
import axios from 'axios';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.map(s => <li key={s._id}>{s.title}: {s.description}</li>)}
      </ul>
    </div>
  );
}

export default Services;
