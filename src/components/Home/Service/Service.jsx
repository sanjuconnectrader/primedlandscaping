import React from 'react';
import { FaArrowRight, FaLeaf, FaBuilding } from 'react-icons/fa';
import './Service.css';

const residential = [
  {
    title: 'Residential ',
    img: `${process.env.PUBLIC_URL}/service1.avif`,
    description: 'Complete lawn care and maintenance for your home'
  },
  {
    title: 'Commercial',
    img: `${process.env.PUBLIC_URL}/service2.avif`,
    description: 'visually appealing landscaping for your business'
  },
  {
    title: 'HOA',
    img: `${process.env.PUBLIC_URL}/service3.avif`,
    description: 'lawncare service that makes your HOA a home'
  },
];

const commercial = [
  {
    title: 'Commercial Maintenance',
    img: `${process.env.PUBLIC_URL}/service4.avif`,
    description: 'Professional care for business properties'
  },
  {
    title: 'HOA Maintenance',
    img: `${process.env.PUBLIC_URL}/service5.avif`,
    description: 'Community landscaping services'
  },
  {
    title: 'Hardscaping',
    img: `${process.env.PUBLIC_URL}/service6.avif`,
    description: 'Durable and attractive commercial hardscapes'
  },
];

function ServiceCard({ title, img, description }) {
  return (
    <article className="svc-card">
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
            <button className="svc-card__btn">
              <span>Learn more</span>
              <FaArrowRight className="svc-card__icon" />
            </button>
          </div>
        </div>
      </div>
    </article>
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
          <div className="services__grid">
            {residential.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        <div className="services__category">
          <h3 className="services__subhead">
            <FaBuilding className="services__icon" />
            Other Services
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