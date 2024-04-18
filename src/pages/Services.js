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
    { id: 1, title: 'Service 1', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'flu_shot.png' },
    { id: 2, title: 'Service 2', info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'mental_health.png' },
    { id: 3, title: 'Service 3', info: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'physical_exams.png' },
    { id: 4, title: 'Service 4', info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: 'logo192.png' },
    { id: 5, title: 'Service 5', info: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: 'logo512.png' }
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
      <h1>Services Page</h1><br></br>
      <h3>Our Objective</h3><br></br>
      <body>Our first and most important goal is to establish a communal trust between houseless encampments and Undergraduate Street Medicine Outreach (USMO) members. Through regularly scheduled outreach and interacting with clients, we hope to build a meaningful relationship with the houseless community beyond our duties such that we can most effectively help them attain the services they need.</body><br></br>
      <br></br>
      <div className="grid-container">
        {services.map(service => (
          <div key={service.id} className={`card ${flipped.includes(service.id) ? 'flipped' : ''}`} onClick={() => handleFlip(service.id)}>
            <div className="card-front">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="card-back">
              <h2 style={{ fontSize: '16px', textAlign: 'center' }}>{service.title}</h2>
              <p style={{ fontSize: '12px', textAlign: 'center' }}>{service.info}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
