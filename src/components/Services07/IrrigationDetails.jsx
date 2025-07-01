/* IrrigationDetails.jsx */
import React from 'react';
import {
  FaTint,        // 💧 – sprinkler / water
  FaSeedling,    // 🌱 – drip irrigation / gardens
  FaWifi,        // 📶 – smart controller upgrades
  FaTools,       // 🛠  – repairs & tune-ups
  FaSnowflake    // ❄️ – seasonal winterization
} from 'react-icons/fa';
import './IrrigationDetails.css';

const services = [
  {
    icon: FaTint,
    title: 'Sprinkler System Design & Installation',
    text: `Custom-zoned sprinkler layouts that maximise coverage and minimise runoff. 
           All heads, valves and piping are selected for local pressure and soil type, 
           ensuring even watering and long-term reliability.`,
  },
  {
    icon: FaSeedling,
    title: 'Precision Drip Irrigation',
    text: `Low-flow emitters deliver water right to the root zone of beds, shrubs and trees. 
           Expect up to 50 % water savings with healthier plants and far less evaporation.`,
  },

  {
    icon: FaSnowflake,
    title: 'Seasonal Startup & Winterization',
    text: `Spring pressure checks, nozzle alignment and programming tweaks keep things running 
           smoothly; fall blow-outs and valve isolation protect lines from freeze damage.`,
  },
  {
    icon: FaTools,
    title: 'Leak Detection & On-Demand Repairs',
    text: `Rapid response for broken sprinkler heads, valve failures or underground leaks. 
           Our technicians carry common parts so most issues are fixed in a single visit.`,
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
            Certified specialists who design, install&nbsp;and maintain
            water-smart systems—keeping landscapes lush while cutting waste and costs.
          </p>
        </header>

        <div className="irrigation-details__grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="irrigation-details__card">
              <span className="irrigation-details__card-icon">
                <Icon aria-hidden="true" />
              </span>

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
