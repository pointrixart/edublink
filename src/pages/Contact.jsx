import React from 'react';
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Header />
      <section className="contact-page">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>Have a question? Send us a message and we'll get back to you shortly.</p>

          <div className="contact-content">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required />
              <button type="submit">Send Message</button>
            </form>

            <div className="contact-details">
              <h4>Reach Us</h4>
              <p><strong>Email:</strong> support@edublink.co</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> EduBlink HQ, Delhi, India</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Contact;
