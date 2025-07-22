import React from 'react';
import './Zoddetails.css';

const services = [
  {
    title: 'Next‑Gen SOD Hybrid Turf System',
    text: `Installation of the newest hybrid‑blade ZOD turf featuring triple‑layer backing, UV‑stabilised fibres, and natural multi‑tone colouring for unrivalled realism and longevity. Our certified crews follow strict quality control to ensure seamless joins and perfect grain alignment. Each installation is backed by a 10‑year warranty for peace of mind.`,
  },
  {
    title: 'Laser‑Guided Digital Site Mapping',
    text: `3D scanning and CAD‑driven cutting deliver zero gaps, minimal seams, and optimal material usage. We tailor each layout to your terrain, accommodating curves, elevation changes, and hardscape elements with millimetre precision. This digital workflow reduces waste and accelerates project timelines for seamless installation.`,
  },
  {
    title: 'On‑Demand Material Logistics',
    text: `GPS‑tracked fleet delivers pre‑cut rolls, base grid, and silica infill just in time to keep your site clutter‑free and on schedule. Real‑time tracking alerts you to arrivals, ensuring efficient staging and installation. Our logistics team adapts to changes instantly, minimising downtime and streamlining workflows.`,
  },
  {
    title: 'PermaFlow Drainage & Cooling Infill',
    text: `Engineered sub‑base grid and antimicrobial, heat‑reducing infill keep your ZOD surface cool, clean, and dry under all conditions. Integrated drainage channels prevent pooling while breathable infill promotes airflow and reduces surface temperatures by up to 15 °C. Regular maintenance plans keep performance optimal season after season.`,
  },
];

export default function Zoddetails() {
  return (
    <section className="zoddetails">
      <div className="zoddetails__container">
        <header className="zoddetails__header">
          <h1 className="zoddetails__title">
            Professional SOD Installation Services
          </h1>
          <p className="zoddetails__subtitle">
            Certified specialists delivering precision ZOD turf systems with advanced drainage, heat‑mitigation, and seamless integration.
          </p>
        </header>

        <div className="zoddetails__grid">
          {services.map(({ title, text }) => (
            <article key={title} className="zoddetails__card">
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