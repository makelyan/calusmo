import React, { useState } from 'react';
import "../styles/contactform.css";

const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName  ] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = 'https://your-server.com/send'; 
    const payload = { email, firstName, lastName, message };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json(); 
      alert('Message sent!');
      setEmail('');
      setFirstName('');
      setLastName('');
      setMessage('');
    } catch (error) {
      alert(`Failed to send message: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address" required />
      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required />
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your Message" required />
      <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
    </form>
  );
};

export default ContactMe;
