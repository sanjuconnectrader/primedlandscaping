import React from 'react';
import { FaArrowRight, FaLeaf, FaBuilding } from 'react-icons/fa';
import './Service.css';

/* ----- image data (swap with your own URLs) ---------------------- */
const residential = [
  {
    title: 'Residential Maintenance',
    img: `${process.env.PUBLIC_URL}/service1.avif`,
  },
  {
    title: 'Hardscaping',
    img: `${process.env.PUBLIC_URL}/service2.avif`,
  },
  {
    title: 'Pressure Washing',
    img: `${process.env.PUBLIC_URL}/service3.avif`,
  },
];

const commercial = [
  {
    title: 'Commercial Maintenance',
    img: `${process.env.PUBLIC_URL}/service4.avif`,
    description: '',
  },
  {
    title: 'HOA Maintenance',
    img: `${process.env.PUBLIC_URL}/service5.avif`,
    description: '',
  },
  {
    title: 'Hardscaping',
    img: `${process.env.PUBLIC_URL}/service6.avif`,
    description: '',
  },
];

/* ----- reusable card UI ----------------------------------------- */
function ServiceCard({ title, img, description }) {
  return (
    <article className="svc-card group">
      <div className="svc-card__img-container">
        <img 
          src={img} 
          alt={title} 
          className="svc-card__img" 
          loading="lazy"
        />
        <div className="svc-card__gradient" />
      </div>

      <div className="svc-card__overlay">
        <div className="svc-card__content">
          <h3 className="svc-card__title">{title}</h3>
          <p className="svc-card__description">{description}</p>
          <button className="svc-card__btn" aria-label={`View more about ${title}`}>
            <span>Learn more</span>
            <FaArrowRight className="svc-card__icon" />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ----- main export ---------------------------------------------- */
export default function Service() {
  return (
    <section className="services" id="services">
      <div className="services__container">

        <div className="services__header">
          <span className="services__subtitle">What We Offer</span>
          <h2 className="services__heading">Premium Landscape Services</h2>
          <div className="services__divider"></div>
          <p className="services__intro">
            Transforming outdoor spaces with meticulous craftsmanship and sustainable practices
          </p>
        </div>

        {/* ── Residential block ─────────────────────────────────── */}
        <div className="services__category">
          <h3 className="services__subhead">
            <FaLeaf className="services__icon" />
            Residential Services
          </h3>
          <div className="services__grid">
            {residential.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        {/* ── Commercial block ─────────────────────────────────── */}
        <div className="services__category">
          <h3 className="services__subhead">
            <FaBuilding className="services__icon" />
            Commercial Services
          </h3>
          <div className="services__grid">
            {commercial.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}