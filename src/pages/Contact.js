import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import "../styles/contact.css"


export default function() {
    return (
    <>
    <Header/>
      <div className = 'header-wrapper-contact'>
        <h1 className = 'main-header'>Contact USMO</h1>
        <p className = 'little-blurb-contact'> Whether you’re interested in joining our team or donating to USMO, or just want to find out more about what we have to offer, please get in touch and visit us at 2468 Telegraph Ave, Berkeley, CA.</p>
      </div>
    <section className = 'flex-wrapper'> 
      <div className = "proj-wrapper">
      <Form className= "contact-styles">
          <h2 className = 'mini-header'> Submit query </h2>     
          {/* I don't like "submit form". Change this later!*/}
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="firstName" placeholder="First Name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="lastName" placeholder="Last Name"/>
        </Form.Group>
        <Form.Group className="mb-3" contolId="formQueryBox">
          <Form.Text className="text-muted">
            Enter your message here
          </Form.Text>       
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      <div className = "proj-wrapper">
      <div className="our-socials">
      <div className="socials-text">
          <h3 className = "socials-mini-header"> Our hours</h3>
          <p> 12:39pm - 2:12am</p>
          {/* add to calender? :D, for the degens */}
          <h3 className = "socials-mini-header"> Email</h3>
          <p> rav4@berkeley.edu ;D</p>
          <h3 className = "socials-mini-header">Phone Number</h3>
          <p> +1 (855) 444-8888</p>
      </div>
      <h3 className = "socials-mini-header">  Social Media platforms </h3>
      <div className= "socials-socials">
          {/*<img src={require("../../public/linkedin.jpg")} width="25" height="25"></img>
          <img src={require("../../public/facebook.jpg")} width="25" height="25"></img> */}
          {/* Doesn't work!!!  importing images is weird? Idk, figure this out later.*/}
      </div>
      </div>
      </div>
    </section>

    <Footer />
    
    </>
    
        
    )
}