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
import { Link } from "react-router-dom";


export default function ItemRequest() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_lhrrsrm",
                "template_xhdq5b9",
                form.current,
                "zELM_rDCCca9y6bWe" 
            )
            .then(
                () => {
                    alert("Request sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error);
                    alert("Failed to send request.");
                }
            );
    };

    return (
        <>
        <Helmet>
            <title>Item Request Form</title>
            <link rel="canonical" href="https://calusmo.org/item-request" />
        </Helmet>
        <Header/>   

        <div className="contact header-container" >
            <h1>Item Request Form</h1>
            <p>This form is to provide material items for individuals facing housing instability or other life stresses.</p>
        </div>
        <p style={{
            fontSize: '1rem',
            textAlign: 'left',
            width: '50%',
            margin: 'auto',
            marginTop: '32px',
            marginBottom: '-32px'
        }}>
        <ul>
            <li>
                Pickups are primarily Thursdays 8-9pm at Dwinelle 215 or Saturdays 12-12:30pm.
            </li>
            <li>            
                We collect identifying information to confirm your request. Feel free to use a pseudonym if needed.
            </li>
            <li>
                Navigate other helpful resources <Link to="/resources">here<i className="fas fa-arrow-up-right-from-square fa-sm" style={{marginLeft: 4}}></i></Link>.
            </li>
            <li>
                Contact us <Link to="/contact">here<i className="fas fa-arrow-up-right-from-square fa-sm" style={{marginLeft: 4}}></i></Link> if you have any questions.
            </li>
            <li>
                Access this page as a Google Form <a href="https://docs.google.com/forms/d/e/1FAIpQLSffxQGJm5GbFKimlvaYqTwN2XNlgIZnUKBV8ieVz38JQxRrwQ/viewform">here<i className="fas fa-arrow-up-right-from-square fa-sm" style={{marginLeft: 4}}></i></a> if this webpage does not work.
            </li>
        </ul>
        </p>

        <section className='contact-form-container'>
            <Form ref={form} onSubmit={sendEmail} className="contact-form">
                <h2 className='mini-header'>Submit Your Request</h2>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name or Identifier</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder=""
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>Email, Phone number, or other preferred method of contact</Form.Label>
                    <Form.Control
                        name="contact"
                        type="text"
                        placeholder=""
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formItems">
                    <Form.Label>Which item(s) would you like to request? 
                        (<a href="https://docs.google.com/spreadsheets/d/1C5ZddrmGP3PlINTZrbOB9bUOJ2R85a_fYBPF1tIr2xg/edit?gid=0#gid=0">Inventory Spreadsheet<i className="fas fa-arrow-up-right-from-square fa-sm" style={{marginLeft: 4}}></i></a>)
                    </Form.Label>
                    <Form.Control
                        name="items"
                        as="textarea"
                        rows={3}
                        placeholder="List items and amounts as shown in the Inventory Spreadsheet"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formThursday">
                    <Form.Label>Can you come to Dwinelle 215 on Thursday 8-9pm?</Form.Label>
                    <Form.Select name="thursday_pickup" required>
                        <option value="">Select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Maybe">Maybe</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSaturday">
                    <Form.Label>If not Thursday, can you meet at Berkeley West Circle Saturday 12-12:30pm?</Form.Label>
                    <Form.Select name="saturday_pickup">
                        <option value="">Select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAlternate">
                    <Form.Label>If neither option works, list some times and places where we can meet you for drop-off:</Form.Label>
                    <Form.Control
                        name="alternate"
                        as="textarea"
                        rows={2}
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formOther">
                    <Form.Label>Is there anything else we can help with?</Form.Label>
                    <Form.Control
                        name="other_requests"
                        as="textarea"
                        rows={2}
                        placeholder=""
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit Request
                </Button>
            </Form>
        </section>

        <Footer />
        </>
    )
}