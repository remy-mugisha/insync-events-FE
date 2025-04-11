import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" className="logo-text">
            <span className="logo-highlight">INSYNC</span> Events
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {[
            { to: '/', label: 'Home' },
            { to: '/events', label: 'Events' },
            { to: '/speakers', label: 'Speakers' },
            { to: '/news', label: 'News' },
            // { to: '/sponsors', label: 'Sponsors' },
            { to: '/recommendations', label: 'Recommendations' },
            { to: '/calendar', label: 'Calendar' },
            { to: '/contactus', label: 'ContactUS' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/profile" className="profile-button">
            Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="mobile-menu-button"
          aria-label="Open menu"
        >
          <Bars3Icon className="menu-icon" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="mobile-menu-container">
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <div className="mobile-logo-text">
              <span className="logo-highlight">INSYNC</span> Events
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="close-button"
              aria-label="Close menu"
            >
              <XMarkIcon className="menu-icon" />
            </button>
          </div>
          <div className="mobile-nav-links">
            {[
              { to: '/', label: 'Home' },
              { to: '/events', label: 'Events' },
              { to: '/speakers', label: 'Speakers' },
              { to: '/news', label: 'News' },
              // { to: '/sponsors', label: 'Sponsors' },
              { to: '/recommendations', label: 'Recommendations' },
              { to: '/calendar', label: 'Calendar' },
              { to: '/contactus', label: 'ContactUS' },

            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-nav-link ${location.pathname === item.to ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-profile-button"
            >
              Profile
            </Link>
          </div>
        </div>
      </Dialog>
    </header>
  );
};

export default Navbar;
