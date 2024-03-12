import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Header() {
  const location = useLocation();
  const currentPage = location.pathname;
  return (
    <Navbar sticky="top" expand="lg" className="nav-bar">
      {/* sticky: scrollability, expand = "lg", bg-body-tertiary doesnt actually do anything except add border */}
      <Container>
      {/* "containers are used to limit horizontal width*/}
        {/* "while not required, you can wrap the navbar in a <Container> component to center it on a page, or add one within to the only center the contents of a fixed or static top navbar. */}
        {/* "what is expand =?*/}
        {/* ok so there's a CSS import. OK. Im just stupid guys :D */}
        <Navbar.Brand href="/Home">
          <img
            src={require('../pages/logo.png')}
            width="110"
            height="45"
            className="Top-bar-logo"
            alt="calusmo Logo"
          />
          {/* What do I want to get done today? Just this topbar? */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className = "link-list" id = "responsive-navbar-nav">
          <Nav className="link-list">
            <Navbar.Brand href="/Home" className={`nav-item ${currentPage === '/Home' ? 'active' : ''}`}>Home</Navbar.Brand>
            <Navbar.Brand href="/Services" className={`nav-item ${currentPage === '/Services' ? 'active' : ''}`}>Our Services</Navbar.Brand>
            <Navbar.Brand href="/OurTeam" className={`nav-item ${currentPage === '/OurTeam' ? 'active' : ''}`}>Our Team</Navbar.Brand>
            <Navbar.Brand href="/Contact" className={`nav-item ${currentPage === '/Contact' ? 'active' : ''}`}>Contact</Navbar.Brand>
            <Navbar.Brand href="/Donations" className={`nav-item ${currentPage === '/Donations' ? 'active' : ''}`}>Donations</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
          <button class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
          </button>
        </Container>     
    </Navbar>
  );
}
{/* TODO: get all elements setup and add a nice hover effect */}
export default Header;

