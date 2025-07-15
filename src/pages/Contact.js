/* eslint-disable import/no-anonymous-default-export */
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
    <div className="contact header-container">
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us whether you’re interested in joining our team, donating to our cause, or if you just want to find out more about what we have to offer!
        </p>
    </div>
    <div style={{ padding: '20px' }}>    
      <div class="contact-block">
        <h2>Contact Information</h2>
        <p>
          <b>Phone:</b> (510) 543-1632
          {/* <br></br> 
          <b>Email:</b> */}
          {/* TODO: Get Email */}
        </p>
      </div>
    </div>
    <section className = 'contact-form-container'>
      <Form className= "contact-form">
          <h2 className = 'mini-header'> Submit Query </h2>     
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlid="formBasicFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="firstName" placeholder="First Name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlid="formBasicLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="lastName" placeholder="Last Name"/>
        </Form.Group>
        <Form.Group className="mb-3" controlid="formQueryBox">
          <Form.Text className="text-muted">
            Enter your message here
          </Form.Text>       
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
    <Footer />
    </>
    )
}