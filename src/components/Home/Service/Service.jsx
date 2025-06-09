import React from 'react';
import { FaArrowRight, FaLeaf, FaBuilding } from 'react-icons/fa';
import './Service.css';

/* ----- image data (swap with your own URLs) ---------------------- */
const residential = [
  {
    title: 'Residential Maintenance',
    img: 'https://static.wixstatic.com/media/645dca_5dc71debc7504246868f359ba792e637~mv2.jpeg/v1/fill/w_660,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7937.jpeg',

  },
  {
    title: 'Hardscaping',
    img: 'https://static.wixstatic.com/media/645dca_49023b989f2446c6bc1d11a4eba4d71c~mv2.jpg/v1/fill/w_660,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pavers-with-grass-scaled.jpg',
 
  },
  {
    title: 'Pressure Washing',
    img: 'https://static.wixstatic.com/media/645dca_bd188f5565c842baaff67641146b5a86~mv2.jpg/v1/fill/w_660,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3556_edited.jpg',

  },
];

const commercial = [
  {
    title: 'Commercial Maintenance',
    img: 'https://static.wixstatic.com/media/645dca_fc5bb54598194e7dbccba0fc27041c3a~mv2.jpg/v1/fill/w_660,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pegasus.jpg',
    description: ''
  },
  {
    title: 'HOA Maintenance',
    img: 'https://static.wixstatic.com/media/645dca_87b4d86b7dc54966854e82acba112ff9~mv2.jpg/v1/fill/w_660,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/maldonado-increase-attraction-for-home-buyers.jpg',
    description: ''
  },
  {
    title: 'Hardscaping',
    img: 'https://static.wixstatic.com/media/645dca_cf9b351345224db1b6d88c677205f5fb~mv2.jpg/v1/fill/w_660,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/y.jpg',
    description: ''
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