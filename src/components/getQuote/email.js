import emailjs from 'emailjs-com';


import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the email parameters
    const emailParams = {
      to_email: 'recipient@example.com', // Replace with the recipient's email address
      from_name: name,
      message: message
    };

    // Send the email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_USER_ID')
      .then(function(response) {
        console.log('Email sent successfully:', response);
        // Handle success, e.g., show a success message
      }, function(error) {
        console.error('Email sending failed:', error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;





import React from 'react';
import ContactForm from './ContactForm';

function App() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}

export default App;
