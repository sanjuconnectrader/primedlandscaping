import React from 'react';
import { FaArrowRight, FaLeaf, FaBuilding } from 'react-icons/fa';
import './Service.css';

const residential = [
  {
    title: 'Residential',
    img: `${process.env.PUBLIC_URL}/service1.avif`,
    description: 'Complete lawn care and maintenance for your home',
    link: '/services/residential-maintenance'
  },
  {
    title: 'Commercial',
    img: `${process.env.PUBLIC_URL}/service2.avif`,
    description: 'visually appealing landscaping for your business',
    link: '/services/commercial-maintenance'
  },
  {
    title: 'HOA',
    img: `${process.env.PUBLIC_URL}/service3.avif`,
    description: 'lawncare service that makes your HOA a home',
    link: '/services/hoa-maintenance'
  },
];

const commercial = [
  {
    title: 'Turf Installation',
    img: `${process.env.PUBLIC_URL}/turf.jpg`,
    description: 'Professional turf‑installation services for properties',
    link: '/services/turf-installation'
  },
  {
    title: 'Irrigation',
    img: `${process.env.PUBLIC_URL}/irrigation1.jpg`,
    description: 'Expert irrigation systems that keep your lawn lush ',
    link: '/services/irrigation'
  },
  {
    title: 'Lawn Recovery',
    img: `${process.env.PUBLIC_URL}/service6.avif`,
    description: 'Comprehensive process ensures optimal lawn health',
    link: '/services/lawn-recovery-package'
  },
  {
    title: 'Sod Installation',
    img: `${process.env.PUBLIC_URL}/sod.jpg`,
    description: 'Durable and attractive commercial hardscapes',
    link: '/services/sod-installation'
  },
];

function ServiceCard({ title, img, description, link }) {
  return (
    <div className="svc-card">
      <div className="svc-card__img-container">
        <img 
          src={img} 
          alt={title} 
          className="svc-card__img" 
          loading="lazy"
        />
        <div className="svc-card__overlay">
          <div className="svc-card__content">
            <h3 className="svc-card__title">{title}</h3>
            <p className="svc-card__description">{description}</p>
            <a href={link} className="svc-card__btn">
              <span>Learn more</span>
              <FaArrowRight className="svc-card__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

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

        <div className="services__category">
          <h3 className="services__subhead">
            <FaLeaf className="services__icon" />
            Maintenance Service
          </h3>
          <div className="services__grid services__grid--residential">
            {residential.map((card) => (
              <ServiceCard 
                key={`${card.title}-${card.description}`} 
                title={card.title}
                img={card.img}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>

        <div className="services__category">
          <h3 className="services__subhead">
            <FaBuilding className="services__icon" />
           Other Services
          </h3>
          <div className="services__grid services__grid--commercial">
            {commercial.map((card) => (
              <ServiceCard 
                key={`${card.title}-${card.description}`} 
                title={card.title}
                img={card.img}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}