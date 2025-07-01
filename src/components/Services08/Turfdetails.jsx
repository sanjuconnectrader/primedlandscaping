import React from 'react';
import {
  FaLeaf,        // 🌿 – turf installation
  FaRuler,       // 📏 – precise measurements
  FaTruck,       // 🚚 – material delivery
  FaWater,       // 💦 – irrigation integration
  FaCheckCircle  // ✅ – quality assurance
} from 'react-icons/fa';
import './Turfdetails.css';

const services = [
  {
    icon: FaLeaf,
    title: 'Premium ZOD Turf Installation',
    text: `Professional installation of ZOD turf with proper ground preparation, 
           including soil grading, weed barrier placement, and secure anchoring 
           for long-lasting results.`,
  },
  {
    icon: FaRuler,
    title: 'Custom Measurements & Layout',
    text: `Precise site measurements and cutting plans to minimize seams and waste. 
           Our team ensures perfect fit around landscaping features and structures.`,
  },
  {
    icon: FaWater,
    title: 'Irrigation System Integration',
    text: `Seamless integration with existing irrigation systems or new installations 
           to maintain optimal hydration for your ZOD turf.`,
  },
  {
    icon: FaCheckCircle,
    title: 'Quality Inspection & Warranty',
    text: `Final inspection to ensure flawless installation with full manufacturer 
           warranty coverage on materials and workmanship.`,
  },
];

export default function Turfdetails() {
  return (
    <section className="turfdetails">
      <div className="turfdetails__container">
        <header className="turfdetails__header">
          <h1 className="turfdetails__title">
            Professional ZOD Turf Installation
          </h1>
          <p className="turfdetails__subtitle">
            Certified specialists in precision ZOD turf installation—delivering 
            flawless, durable surfaces with proper drainage and seamless edges.
          </p>
        </header>

        <div className="turfdetails__grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="turfdetails__card">
              <span className="turfdetails__card-icon">
                <Icon aria-hidden="true" />
              </span>

              <div className="turfdetails__card-content">
                <h2 className="turfdetails__card-title">{title}</h2>
                <p className="turfdetails__card-text">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}