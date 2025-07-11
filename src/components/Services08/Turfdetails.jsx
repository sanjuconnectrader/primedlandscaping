import React from 'react';
import {
  FaLeaf,        // 🌿 – turf installation
  FaRuler,       // 📏 – measurements
  FaTruck,       // 🚚 – delivery
  FaWater,       // 💦 – irrigation
  FaCheckCircle  // ✅ – quality check
} from 'react-icons/fa';
import './Turfdetails.css';

const services = [
  {
    icon: FaLeaf,
    title: 'Premium Turf Installation',
    text: `Expert installation of high-quality artificial or natural turf, including 
           soil preparation, leveling, and seamless laying for a vibrant, long-lasting lawn.`,
  },
  {
    icon: FaRuler,
    title: 'Precision Layout & Cutting',
    text: `Accurate site measurements and custom cuts ensure tight joins and a professional 
           finish around edges, walkways, and landscape features.`,
  },
  {
    icon: FaTruck,
    title: 'Material Delivery & Site Prep',
    text: `We handle all material logistics, including turf rolls, infill, and base material. 
           Our team prepares the site for optimal drainage and compaction.`,
  },
  {
    icon: FaWater,
    title: 'Irrigation Compatibility',
    text: `We assess and integrate with existing irrigation or offer drainage solutions for 
           natural turf to ensure healthy, well-maintained lawns.`,
  },
 
];

export default function Turfdetails() {
  return (
    <section className="turfdetails">
      <div className="turfdetails__container">
        <header className="turfdetails__header">
          <h1 className="turfdetails__title">
            Expert Turf Installation Services
          </h1>
          <p className="turfdetails__subtitle">
            Reliable, precise, and eco-conscious turf installation for residential and 
            commercial properties—designed for beauty and built to last.
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
