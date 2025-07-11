import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Your message has been sent!');
  };

  return (
    <div className="Contact-container">
   
      <div className="Contact-wrapper">
        <section className="Contact">
          <div className="Contact-header">
            <h2 className="Contact__title">
              Get In Touch With Us
            </h2>
            <p className="Contact__subtitle">
              Have questions or ready to transform your outdoor space? 
              Our team is here to help with all your landscaping needs.
            </p>
          </div>

          <div className="Contact-content">
            <div className="Contact-info-section">
              <div className="Contact__info">
                <div className="Contact__item">
                  <div className="Contact__icon-circle">
                    <FaPhoneAlt className="Contact__icon" />
                  </div>
                  <div className="Contact__item-content">
                    <h3 className="Contact__item-title">Phone</h3>
                    <p className="Contact__item-text">(206)-258-7535</p>
                    <p className="Contact__item-hours">Mon-Fri: 8am - 6pm</p>
                  </div>
                </div>

                <div className="Contact__item">
                  <div className="Contact__icon-circle">
                    <FaEnvelope className="Contact__icon" />
                  </div>
                  <div className="Contact__item-content">
                    <h3 className="Contact__item-title">Email</h3>
                    <p className="Contact__item-text">
                      primedlandscaping@gmail.com
                    </p>
                    <p className="Contact__item-hours">Response within 24 hours</p>
                  </div>
                </div>

                <div className="Contact__item">
                  <div className="Contact__icon-circle">
                    <FaMapMarkerAlt className="Contact__icon" />
                  </div>
                  <div className="Contact__item-content">
                    <h3 className="Contact__item-title">Location</h3>
                    <p className="Contact__item-text">
                      Serving the Greater Seattle Area
                    </p>
                    <p className="Contact__item-hours">Available for consultations</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="Contact__form" onSubmit={handleSubmit}>
              <div className="Contact__form-group double-field">
                <div className="Contact-form-field">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="firstName">First Name</label>
                  <div className="Contact-form-field-underline"></div>
                </div>
                <div className="Contact-form-field">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <div className="Contact-form-field-underline"></div>
                </div>
              </div>

              <div className="Contact__form-group">
                <div className="Contact-form-field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <div className="Contact-form-field-underline"></div>
                </div>
              </div>

              <div className="Contact__form-group">
                <div className="Contact-form-field">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder=" "
                  />
                  <label htmlFor="phone">Phone Number</label>
                  <div className="Contact-form-field-underline"></div>
                </div>
              </div>

              <div className="Contact__form-group">
                <div className="Contact-form-field Contact-textarea-field">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="message">Your Message</label>
                  <div className="Contact-form-field-underline"></div>
                </div>
              </div>

              <div className="Contact__form-action">
                <button type="submit" className="Contact-btn Contact-btn--primary">
                  Send Message
                  <FaPaperPlane className="Contact-btn-icon" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;