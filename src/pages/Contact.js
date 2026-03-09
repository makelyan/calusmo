/* eslint-disable import/no-anonymous-default-export */
import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"
import "../styles/contact.css"
import { Helmet } from 'react-helmet-async';

import { useRef } from 'react';
import emailjs from "@emailjs/browser";

export default function() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
            .sendForm(
            "service_lhrrsrm",
            "template_rzw8nct",
            form.current,
            "zELM_rDCCca9y6bWe"
        )
        .then(
            () => {
              alert("Message sent successfully!");
              form.current.reset();
            },
            (error) => {
              console.log(error);
              alert("Failed to send message.");
            }
        );
      };
    return (
    <>
    <Helmet>
        <title>Contact Us</title>
        <link rel="canonical" href="https://calusmo.org/contact" />
    </Helmet>
    <Header/>   
    <div className="contact header-container">
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us whether you’re interested in joining our team, donating to our cause, or if you just want to find out more about what we have to offer!
        </p>
    </div>
    <div style={{ padding: '20px' }}>    
        <div className="contact-block">
            <h2>Contact Information</h2>
            <p>
                <b>Phone:</b> (510) 543-1632
                <br></br> 
                <b>Email:</b> ucbusmo@gmail.com
            </p>
        </div>
    </div>
    <section className = 'contact-form-container'>
        <Form ref={form} onSubmit={sendEmail} className="contact-form"> 
            <h2 className = 'mini-header'> Submit Query </h2>     
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
                name="name"
                type="text"
                placeholder="Your Name"
                required
            />
        </Form.Group>
        <Form.Group className="mb-3" controlid="formQueryBox">
          <Form.Text className="text-muted">
            Enter your message here
          </Form.Text>       
          <Form.Control name="message" as="textarea" rows={3} />
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