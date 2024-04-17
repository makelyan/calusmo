import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Services.css';
const Services = () => {
  
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (service) => {
    setActiveService(activeService === service ? null : service);
  };

  const [services, setServices] = useState([
    { id: 1, title: 'Service 1', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Service 2', info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Service 3', info: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, title: 'Service 4', info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, title: 'Service 5', info: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 6, title: 'Service 6', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ]);

  const [flipped, setFlipped] = useState([]);

  const handleFlip = (id) => {
    if (flipped.includes(id)) {
      setFlipped(flipped.filter(item => item !== id));
    } else {
      setFlipped([...flipped, id]);
    }
  };
  
  return (
    <div className="App">
      <Header />
      <h1>Services Page</h1>
      <div className="grid-container">
        {services.map(service => (
          <div key={service.id} className={`card ${flipped.includes(service.id) ? 'flipped' : ''}`} onClick={() => handleFlip(service.id)}>
            <div className="card-front">
              <img src={`logo192.png`} alt={service.title} />
            </div>
            <div className="card-back">
              <h2>{service.title}</h2>
              <p>{service.info}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
