import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaAngleRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* ── Logo and company info ─────────────────────────── */}
        <div className="footer__col footer__brand">
          <h3 className="footer__logo">Primed Landscaping</h3>
          <p className="footer__tagline">Transforming outdoor spaces with precision and care</p>
          
          <div className="footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-link">
              <FaTiktok className="social-icon" />
            </a>
          </div>
        </div>

        {/* ── Quick links ───────────────────────────────────── */}
        <div className="footer__col">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/" className="footer__link">
                <FaAngleRight className="link-icon" /> Home
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/about/who-we-are" className="footer__link">
                <FaAngleRight className="link-icon" /> About Us
              </Link>
            </li>
         
            <li className="footer__list-item">
              <Link to="/contact" className="footer__link">
                <FaAngleRight className="link-icon" /> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ── Services ─────────────────────────────────────── */}
        <div className="footer__col">
          <h4 className="footer__title">Our Services</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link to="/services/residential-maintenance" className="footer__link">
                <FaAngleRight className="link-icon" /> Residential Maintenance
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/services/commercial-maintenance" className="footer__link">
                <FaAngleRight className="link-icon" /> Commercial Maintenance
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/services/hoa-maintenance" className="footer__link">
                <FaAngleRight className="link-icon" /> HOA Maintenance
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/services/turf-installation" className="footer__link">
                <FaAngleRight className="link-icon" /> Turf Installation
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/services/sod-installation" className="footer__link">
                <FaAngleRight className="link-icon" /> Sod Installation
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/services/lawn-recovery-package" className="footer__link">
                <FaAngleRight className="link-icon" /> Lawn Recovery Package
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/services/irrigation" className="footer__link">
                <FaAngleRight className="link-icon" /> Irrigation
              </Link>
            </li>
          </ul>
        </div>

        {/* ── Contact info ──────────────────────────────────── */}
        <div className="footer__col footer__contact">
          <h4 className="footer__title">Contact Us</h4>
          <ul className="footer__list">
            <li className="footer__contact-item">
              <div className="contact-icon__container">
                <FaPhoneAlt className="contact-icon" />
              </div>
              <span>(206)-258-7535</span>
            </li>
            <li className="footer__contact-item">
              <div className="contact-icon__container">
                <FaEnvelope className="contact-icon" />
              </div>
              <span>primedlandscaping@gmail.com</span>
            </li>
            <li className="footer__contact-item">
              <div className="contact-icon__container">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <span>Maple Valley, Washington</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Copyright ──────────────────────────────────────── */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__copyright">
            &copy; {new Date().getFullYear()} Primed Landscaping Est. 2024 | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}