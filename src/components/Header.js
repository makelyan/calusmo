import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css";

function HoverDropdown({ title, children, id }) {
  const [show, setShow] = useState(false);

  return (
    <NavDropdown
      title={title}
      id={id}
      className="nav-item"
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
    </NavDropdown>
  );
}

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <Navbar sticky="top" expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand href="/home">
          <img
            src={require('../pages/logo.png')}
            width="110"
            height="45"
            className="Top-bar-logo"
            alt="calusmo Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="link-list" id="responsive-navbar-nav">
          <Nav className="link-list">
            <Link to="/home" className={`nav-item ${currentPage === '/home' ? 'active' : ''}`}>Home</Link>

            <Link to="/join-us" className={`nav-item ${currentPage === '/join-us' ? 'active' : ''}`}>Join Us</Link>


            <HoverDropdown
                title={<>About Us <span className="dropdown-arrow">▶</span></>}
                id="about-dropdown"
            >
                <NavDropdown.Item as={Link} to="/photo-gallery" className="dropdown-item nav-item">Photo Gallery</NavDropdown.Item>
                <NavDropdown.Item href="https://decal.studentorg.berkeley.edu/courses/7193" target="_blank" rel="noopener noreferrer" className="dropdown-item nav-item">DeCal</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact" className="dropdown-item nav-item">Contact Us</NavDropdown.Item>

            </HoverDropdown>

            <HoverDropdown
                title={<>People <span className="dropdown-arrow">▶</span></>}
                id="about-dropdown"
            >
                <NavDropdown.Item as={Link} to="/our-team" className="dropdown-item nav-item">Our Team</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/our-alumni" className="dropdown-item nav-item">Our Alumni</NavDropdown.Item>
            </HoverDropdown>

            <HoverDropdown
                title={<>Resources<span className="dropdown-arrow">▶</span></>}
                id="about-dropdown"
            >
                <NavDropdown.Item as={Link} to="/resources" className="dropdown-item nav-item">Housing Resources</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/item-request" className="dropdown-item nav-item">Item Request Form</NavDropdown.Item>

            </HoverDropdown>

            <HoverDropdown
              title={<>Donate <span className="dropdown-arrow">▶</span></>}
              id="donate-dropdown"
            >
              <NavDropdown.Item href="https://gofund.me/a035f677" target="_blank" rel="noopener noreferrer" className="dropdown-item nav-item">GoFundMe</NavDropdown.Item>
              <NavDropdown.Item href="https://crowdfund.berkeley.edu/project/47435" target="_blank" rel="noopener noreferrer" className="dropdown-item nav-item">Crowdfunding</NavDropdown.Item>
            </HoverDropdown>
          </Nav>
        </Navbar.Collapse>

        <button className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </Container>
    </Navbar>
  );
}

export default Header;