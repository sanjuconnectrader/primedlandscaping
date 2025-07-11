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
              <Link to="/about-us" className="footer__link">
                <FaAngleRight className="link-icon" /> About Us
              </Link>
            </li>
            <li className="footer__list-item">
              <Link to="/services" className="footer__link">
                <FaAngleRight className="link-icon" /> Services
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
              <FaAngleRight className="link-icon" /> Landscaping Maintenance
            </li>
            <li className="footer__list-item">
              <FaAngleRight className="link-icon" /> Pressure Washing
            </li>
            <li className="footer__list-item">
              <FaAngleRight className="link-icon" /> Thatching & Aeration
            </li>
            <li className="footer__list-item">
              <FaAngleRight className="link-icon" /> Hardscaping Solutions
            </li>
            <li className="footer__list-item">
              <FaAngleRight className="link-icon" /> HOA Maintenance
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