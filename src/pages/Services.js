import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from 'react';

// Define the ServicePage component outside of the default export function
const ServicePage = () => {
  // State to track which service's information is currently displayed
const [activeService, setActiveService] = useState(null);

  // Function to handle clicking on a service image
const handleServiceClick = (service) => {
    // If the clicked service is already active, deactivate it
        setActiveService(activeService === service ? null : service);
};

  return (
    <div>
      <Header />
      <h2>Services Page</h2>
      <div className="service-container">
        {/* Service Section 1 */}
        <div className={`service-section ${activeService === 1 ? 'active' : ''}`} onClick={() => handleServiceClick(1)}>
          <img src="service1.jpg" alt="Service 1" />
          {activeService === 1 && (
            <div className="service-info">
              <h2>Service 1</h2>
              <p>Description of Service 1</p>
            </div>
          )}
        </div>

        {/* Service Section 2 */}
        <div className={`service-section ${activeService === 2 ? 'active' : ''}`} onClick={() => handleServiceClick(2)}>
          <img src="service2.jpg" alt="Service 2" />
          {activeService === 2 && (
            <div className="service-info">
              <h2>Service 2</h2>
              <p>Description of Service 2</p>
            </div>
          )}
        </div>

        {/* Service Section 3 */}
        <div className={`service-section ${activeService === 3 ? 'active' : ''}`} onClick={() => handleServiceClick(3)}>
          <img src="service3.jpg" alt="Service 3" />
          {activeService === 3 && (
            <div className="service-info">
              <h2>Service 3</h2>
              <p>Description of Service 3</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
