import React from 'react';
import './Turfdetails.css';

const services = [
  {
    title: 'Premium Turf Installation',
    text: `Expert installation of high-quality artificial or natural turf, including soil preparation, leveling, and seamless laying for a vibrant, long-lasting lawn. We follow industry best practices to ensure proper compaction and root establishment. Our crews perform a final inspection to guarantee flawless results every time.`,
  },
  {
    title: 'Precision Layout & Cutting',
    text: `Accurate site measurements and custom cuts ensure tight joins and a professional finish around edges, walkways, and landscape features. We use laser-guided tools to maintain straight lines and exact angles. Every cut is double-checked to minimize waste and maximize visual appeal.`,
  },
  {
    title: 'Material Delivery & Site Prep',
    text: `We handle all material logistics, including turf rolls, infill, and base material, coordinating delivery to match your schedule. Our team prepares the site for optimal drainage and compaction, removing debris and grading as needed. We then inspect the base layer to ensure long-term stability and performance.`,
  },
  {
    title: 'Irrigation Compatibility',
    text: `We assess and integrate with existing irrigation systems or offer drainage solutions for natural turf to ensure healthy, well-maintained lawns. Our specialists recommend smart controllers and drip lines to conserve water. After installation, we test and adjust the system for uniform coverage across every zone.`,
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
            Reliable, precise, and eco-conscious turf installation for residential and commercial properties—designed for beauty and built to last.
          </p>
        </header>

        <div className="turfdetails__grid">
          {services.map(({ title, text }) => (
            <article key={title} className="turfdetails__card">
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
