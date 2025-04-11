import React, { useState } from 'react';
import './contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contactus-section">
      {/* Page Header */}
      <h1 className="contactus-header">Contact Us</h1>

      <div className="contactus-wrapper">
        {/* Left: Contact Info */}
        <div className="contactus-info">
          <ul>
            <li>
              <span className="info-icon">📞</span>
              <div>
                <p>+250788411095</p>
                <p>+250784183352</p>
              </div>
            </li>
            <li>
              <span className="info-icon">✉️</span>
              <div>
                <p>fairlawfirmltd@gmail.com</p>
              </div>
            </li>
            <li>
              <span className="info-icon">🌐</span>
              <div>
                <p>www.website.com</p>
              </div>
            </li>
            <li>
              <span className="info-icon">📍</span>
              <div>
                <p>KG 194 St, Kigali</p>
                <p>Kimironko Near bpr Branch</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="contactus-form-wrapper">
          <form className="contactus-form" onSubmit={handleSubmit}>
            {isSubmitted && (
              <div className="contactus-success">
                Thank you for contacting us!
              </div>
            )}
            <div className="form-row">
              <input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                placeholder="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <textarea
                placeholder="Write a Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            <button type="submit" className="submit-button">Send Now</button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4199753623633!2d30.104325016199054!3d-1.9497575332297739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca706189adb03%3A0xbb19b5ed49247e16!2sKG%20194%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1683000000000!"
          style={{ border: 0, width: '100%', height: '350px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/250788411095"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/whatsapp-icon.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default ContactUs;
