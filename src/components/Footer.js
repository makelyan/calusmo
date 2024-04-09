import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-center text-lg-start footer">
        {/* Social icons and copyright section */}
        <div className="text-center" style={{ backgroundColor: 'rgb(17, 103, 178)'}}>
          <a href="https://discord.gg/XCngeXWusK" rel="noopener noreferrer" target="_blank" className="text-dark me-4">
            <FontAwesomeIcon className="social-icon" icon={faDiscord} />
          </a>
          <a href="https://www.linkedin.com/company/usmoberkeley/" rel="noopener noreferrer" target="_blank" className="text-dark me-4">
            <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/ucb_usmo/" rel="noopener noreferrer" target="_blank" className="text-dark me-4">
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </a>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgb(17, 103, 178)'}}>
          © Undergraduate Street Medicine Outreach, {currentYear}. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;