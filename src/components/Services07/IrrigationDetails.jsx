import React from 'react';
import './IrrigationDetails.css';

const services = [
  {
    title: 'Sprinkler System Design & Installation',
    text: `Custom‑zoned sprinkler layouts that maximize coverage and minimize runoff. All heads, valves, and piping are selected for local pressure and soil type, ensuring even watering and long‑term reliability. We program smart controllers to optimize schedules and conserve water resources.`,
  },
  {
    title: 'Precision Drip Irrigation',
    text: `Low‑flow emitters deliver water right to the root zone of beds, shrubs, and trees. Expect up to 50 % water savings with healthier plants and far less evaporation. Emitters are pressure‑compensated to maintain consistent flow under varying conditions.`,
  },
  {
    title: 'Seasonal Startup & Winterization',
    text: `Spring pressure checks, nozzle alignment, and programming tweaks keep things running smoothly; fall blow‑outs and valve isolation protect lines from freeze damage. Our team adjusts controller settings and replaces worn components for peak efficiency. Comprehensive system audits ensure no leaks or misfires slide by.`,
  },
  {
    title: 'Leak Detection & Repairs',
    text: `Rapid response for broken sprinkler heads, valve failures, or underground leaks. Our technicians carry common parts so most issues are fixed in a single visit. We use advanced acoustic and pressure tests to pinpoint issues accurately. Preventative maintenance plans keep systems leak‑free season after season.`,
  },
];

export default function IrrigationDetails() {
  return (
    <section className="irrigation-details">
      <div className="irrigation-details__container">
        <header className="irrigation-details__header">
          <h1 className="irrigation-details__title">
            Professional Irrigation System Services
          </h1>
          <p className="irrigation-details__subtitle">
            Certified specialists who design, install, and maintain water‑smart systems—keeping landscapes lush while cutting waste and costs.
          </p>
        </header>

        <div className="irrigation-details__grid">
          {services.map(({ title, text }) => (
            <article key={title} className="irrigation-details__card">
              <div className="irrigation-details__card-content">
                <h2 className="irrigation-details__card-title">{title}</h2>
                <p className="irrigation-details__card-text">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}