// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

   
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    
    const serviceID = 'service_6zwh9hg';
    const templateID = 'template_8ngch9b';
    const userID = 'XMf5R1LyAp0wANJah';

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Meddelande sänt!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.error('FAILED...', error);
        setStatus('Lyckades inte leverera mailet.');
      });
  };

  return (
    <section id="contact">
      <h2 className="contact">Kontakt</h2>
      <p>
        Har du frågor eller funderingar och vill skicka in ett meddelande till oss så
        återkommer vi så snart vi kan! Det går även bra att ringa för direkt kontakt.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Ditt namn</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">Din e-post</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div id="messages" className="message">
          <label className="messages" htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="button" type="submit">Skicka</button>
      </form>
      <p>{status}</p>
      <p>Telefon: 0709933456</p>
      <p>Email: <a href="mailto:erikandersson778@gmail.com">jockesvvs@gmail.com</a></p>
      <p>Adress: uppsalavägen 43 74145 Uppsala</p>
      
    </section>
  );
};

export default ContactForm;