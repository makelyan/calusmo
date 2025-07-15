import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"

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
        <Navbar.Collapse className = "link-list" id = "responsive-navbar-nav">
          <Nav className="link-list">
            <Link to="/home" className={`nav-item ${currentPage === '/home' ? 'active' : ''}`}>Home</Link>
            <Link to="/our-team" className={`nav-item ${currentPage === '/our-team' ? 'active' : ''}`}>Our Team</Link>
            <Link to="/contact" className={`nav-item ${currentPage === '/contact' ? 'active' : ''}`}>Contact</Link>
            {/* <Link to="/resources" className={`nav-item ${currentPage === '/resources' ? 'active' : ''}`}>Resources</Link> */}
            <Link to="https://gofund.me/a035f677" target="_blank" rel="noopener noreferrer" className={`nav-item ${currentPage === '/donate' ? 'active' : ''}`}>Donate</Link>
            <Link to="https://decal.studentorg.berkeley.edu/courses/7193" target="_blank" rel="noopener noreferrer" className={`nav-item ${currentPage === '/decal' ? 'active' : ''}`}>Decal</Link>
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
