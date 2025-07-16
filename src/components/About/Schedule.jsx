import React from 'react';
import { FaPhoneAlt, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Schedule.css';

const Schedule = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:206-258-7535';
  };

  return (
    <div className="Schedule-section">
      <h2 className="Schedule-title">Ready to Transform Your Lawn?</h2>
      <p className="Schedule-subtitle">
        Our expert team is standing by to bring your landscape vision to life. 
        Whether you need regular maintenance or a complete yard makeover, we're here to help.
      </p>
      
      <div className="Schedule-features">
        <div className="Schedule-feature">
          <FaCalendarAlt className="Schedule-feature-icon" />
          <h3>Flexible Scheduling</h3>
          <p>We work around your schedule with appointments available weekdays and weekends.</p>
        </div>
        
        <div className="Schedule-feature">
          <FaMapMarkerAlt className="Schedule-feature-icon" />
          <h3>Serving Seattle Area</h3>
          <p>Proudly providing landscaping services to the greater Seattle metropolitan area.</p>
        </div>
        
        <div className="Schedule-feature">
          <FaPhoneAlt className="Schedule-feature-icon" />
          <h3>Instant Response</h3>
          <p>Our team responds to all inquiries within 24 hours, often much sooner.</p>
        </div>
      </div>
      
      <div className="Schedule-contact-info">
        <p>Call us directly at: <strong>(206) 258-7535</strong></p>
        <p>Or click below to get started</p>
      </div>
      
      <button className="Schedule-button" onClick={handleCallClick}>
        <FaPhoneAlt className="Schedule-icon" />
        Call Us
      </button>
      
      <p className="Schedule-guarantee">
        *All estimates include a 100% satisfaction guarantee
      </p>
    </div>
  );
};

export default Schedule;