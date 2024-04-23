import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactForm from "../components/ContactForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import "../styles/contact.css"

export default function() {
    return (
      <>
        <Header />
        <div className="contact-us-container">
          <div className="contact-blurb">
            <h1>Contact Us</h1>
            <p className="contact-description">
              We'd love to hear from you! If you're interested in joining us or simply want to know how you can help, 
              please don't hesitate to reach out. Every message is a step towards making a big difference in the lives 
              of those who need it most in the East Bay.
            </p>
          </div>
        </div>
        <div className="contact-us-container">
          <ContactForm />
        </div>
        <Footer />
      </>
    );
}