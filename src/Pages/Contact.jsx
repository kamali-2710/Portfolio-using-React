import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    // ❌ Normal validation alerts
    if (!name || !email || !phone || !subject || !message) {
      alert("Please fill all fields!");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter valid email!");
      return;
    }

    // ✅ Small SweetAlert only for success
    Swal.fire({
      title: "Success!",
      text: "Message sent successfully",
      icon: "success",
      timer: 1500,   // auto close
      showConfirmButton: false
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">
        CON<span>TACT</span>
      </h1>

      <p className="contact-sub">Let's Work Together!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <input name="name" type="text" placeholder="Full Name" onChange={handleChange} value={formData.name}/>
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} value={formData.email}/>
        </div>

        <div className="input-row">
          <input name="phone" type="text" placeholder="Phone Number" onChange={handleChange} value={formData.phone}/>
          <input name="subject" type="text" placeholder="Email Subject" onChange={handleChange} value={formData.subject}/>
        </div>

        <textarea name="message" placeholder="Your Message" onChange={handleChange} value={formData.message}></textarea>

        <button className="send-btn" type="submit">
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