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
    { id: 1, title: 'Outreach', info: 'USMO travels to houseless encampments and distributes easy-to-read and use information pamphlets on resources available in the Berkeley area that could meet their specific individual needs.', image: 'flu_shot.png' },
    { id: 2, title: 'Shuttles', info: 'If needed, USMO facilitates shuttle transportation (Alameda County Transportation Service), so that houseless individuals are able to access  necessary medical care.', image: 'mental_health.png' },
    { id: 3, title: 'Fundraising', info: 'Through sponsorship and fundraisers, USMO donates necessary and useful resources at encampments.', image: 'physical_exams.png' },
    { id: 4, title: 'Community', info: 'USMO provides the opportunity for future healthcare workers and professionals to see from different angles by connecting and serving one of the most marginalized populations within our community. Such lasting relationships would help future healthcare leaders understand, centralize, and advocate for houseless communities in their own various professional spaces.', image: 'logo192.png' },
    { id: 5, title: 'Representation', info: 'USMO uplifts and empowers unfiltered voices within houseless communities through op-ed. Houseless individuals can tell their stories, interests, beliefs, and more, singularizing their experiences for those that otherwise may not have the chance before to understand from their perspective.', image: 'logo512.png' }
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
