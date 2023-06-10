import React, { useState } from 'react';
// import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      message,
    };

    // axios.post('/api/contact', data)
    //   .then(() => {
    //     alert('Your message has been sent!');
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     alert('An error occurred. Please try again later.');
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;