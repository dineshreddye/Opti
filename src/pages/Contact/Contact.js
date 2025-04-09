import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="container">
      <h1 className="pageHeading">Contact Us</h1>

      <div className="contact-box sales">
        <h2 className="heading">Contact Sales</h2>
        <p style={{ marginBottom: "0.8rem" }}>
          What are you hoping to achieve? Find out how we can help you
          streamline and enhance your digital marketing strategy.
        </p>
        <p>
          📧 <a href="mailto:sales@aiadtrack.com">sales@aiadtrack.com</a>
        </p>
      </div>

      <div className="contact-box support">
        <h2 className="heading">Contact Support</h2>
        <p style={{ marginBottom: "0.8rem" }}>
          Need help troubleshooting? Get support from our specialist team.
          Support hours: 9.00 AM – 6.00 PM (BST)
        </p>
        <p>
          📧 <a href="mailto:support@aiadtrack.com">support@aiadtrack.com</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
