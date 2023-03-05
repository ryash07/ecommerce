import React from "react";
import "./ContactPage.scss";
import {Link} from "react-router-dom"

function ContactPage() {
    
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>

      <section id="contact-form">
        <h2>Get in Touch</h2>
        <form action="https://formsubmit.co/ryash4170@gmail.com" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

            <Link to="/"><button type="submit">Submit</button></Link> 
        </form>
      </section>
    </div>
  );
}

export default ContactPage;