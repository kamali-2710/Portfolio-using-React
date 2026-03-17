import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">
        CON<span>TACT</span>
      </h1>

      <p className="contact-sub">Let's Work Together!</p>

      {/* <p className="contact-desc">
        If you have any project idea or collaboration, feel free to contact me.
      </p> */}

      <form className="contact-form">
        <div className="input-row">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>

        <div className="input-row">
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email Subject" />
        </div>

        <textarea placeholder="Your Message"></textarea>

        <button className="send-btn">
          <span>Send Message</span>

          <div className="icon">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Contact;
