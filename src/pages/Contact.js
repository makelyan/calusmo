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
      </div>
    <section className = 'flex-wrapper'> 
    <p className = 'little-blurb-contact'> We'd love to hear from you! If you're interested in joining us or simply want to know how you can help, please don't hesitate to reach out. Every message is a step towards making a big difference in the lives of those who need it most in the East Bay.</p>
      <div className = "form-wrapper">
      <Form className= "contact-styles">
          <h2 className = 'mini-header'> Submit query </h2>
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
    </section>

    <Footer />
    
    </>
    
        
    )
}
