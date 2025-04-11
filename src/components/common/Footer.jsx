import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading">INSYNC Events</h3>
            <p className="footer-text">
              An AI-powered platform that helps users find and manage events based on their interests.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/events" className="footer-link">Events</Link></li>
              <li><Link to="/recommendations" className="footer-link">Recommendations</Link></li>
              <li><Link to="/calendar" className="footer-link">My Calendar</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <address className="footer-address">
              <p>University of Rwanda</p>
              <p>College of Science and Technology</p>
              <p>Email: info@insync-events.rw</p>
              <p>Phone: +250 788 123 456</p>
            </address>
          </div>
          
          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-text">Subscribe for event updates and recommendations.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email" 
                className="newsletter-input"
              />
              <button className="newsletter-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">&copy; {new Date().getFullYear()} INSYNC Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;