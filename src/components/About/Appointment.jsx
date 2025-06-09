import React from 'react';
import './Appointment.css';

const Appointment = () => (
  <section className="Appointment">
    <div className="Appointment__container">
      <div className="Appointment__content">
        <h2 className="Appointment__title">
          Book a Residential Appointment
        </h2>
        <p className="Appointment__subtitle">
          Professional landscaping and maintenance services for your neighborhood
          or complex. Keep your property pristine with expert lawn care,
          maintenance, and total personalized upkeep from Primed Landscaping
        </p>
        <button className="Appointment__btn">
          Book Now
          <svg className="Appointment__btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

export default Appointment;