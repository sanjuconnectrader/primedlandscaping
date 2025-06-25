import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import "./Appointment.css";

const Appointment = () => {
  return (
    <section className="appointment">
      <div 
        className="appointment__bg" 
        style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/booknow-background.avif)`
        }} 
      />
      <div className="appointment__overlay" />
      
      <div className="appointment__content container">
        <div className="appointment__text">
          <span className="appointment__badge">Premium Service</span>
          <h2 className="appointment__title">
            Book Your <span className="highlight">Landscaping</span> Consultation
          </h2>
          
          <p className="appointment__description">
            Experience unmatched lawn care and maintenance services tailored for your property. 
            Our expert team delivers personalized solutions to keep your outdoor spaces pristine.
          </p>
          
          <div className="appointment__cta">
            <a href="tel:+15551234567" className="appointment__button">
              <FiPhoneCall className="appointment__button-icon" />
              <span>Call Now</span>
              <div className="appointment__button-highlight"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;