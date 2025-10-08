import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Get in touch with us for inquiries or collaboration!</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
