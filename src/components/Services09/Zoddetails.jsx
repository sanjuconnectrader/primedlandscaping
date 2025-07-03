import React from 'react';
import {
  FaLeaf,        // 🌿 – hybrid ZOD turf
  FaRuler,       // 📏 – laser mapping
  FaTruck,       // 🚚 – on-demand logistics
  FaWater,       // 💦 – drainage & cooling infill
  FaCheckCircle  // ✅ – robotic grooming & warranty
} from 'react-icons/fa';
import './Zoddetails.css';

const services = [
  {
    icon: FaLeaf,
    title: 'Next-Gen ZOD Hybrid Turf System',
    text: `Installation of the newest hybrid-blade ZOD turf featuring triple-layer
           backing, UV-stabilised fibres, and natural multi-tone colouring for
           unrivalled realism and longevity.`,
  },
  {
    icon: FaRuler,
    title: 'Laser-Guided Digital Site Mapping',
    text: `3-D scanning and CAD-driven cutting deliver zero gaps, minimal seams,
           and optimal material usage—perfect fit around pools, trees, and hardscape.`,
  },
  {
    icon: FaTruck,
    title: 'On-Demand Material Logistics',
    text: `GPS-tracked fleet delivers pre-cut rolls, base grid, and silica infill
           just-in-time, keeping your site clutter-free and the project on schedule.`,
  },
  {
    icon: FaWater,
    title: 'PermaFlow Drainage & Cooling Infill',
    text: `Engineered sub-base grid plus antimicrobial, heat-reducing infill keep
           your ZOD surface cool, clean, and dry—even during monsoon downpours.`,
  },

];

export default function Zoddetails() {
  return (
    <section className="zoddetails">
      <div className="zoddetails__container">
        <header className="zoddetails__header">
          <h1 className="zoddetails__title">
            Professional ZOD Installation Services
          </h1>
          <p className="zoddetails__subtitle">
            Certified specialists delivering precision ZOD turf systems with
            advanced drainage, heat-mitigation, and seamless integration.
          </p>
        </header>

        <div className="zoddetails__grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="zoddetails__card">
              <span className="zoddetails__card-icon">
                <Icon aria-hidden="true" />
              </span>

              <div className="zoddetails__card-content">
                <h2 className="zoddetails__card-title">{title}</h2>
                <p className="zoddetails__card-text">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
