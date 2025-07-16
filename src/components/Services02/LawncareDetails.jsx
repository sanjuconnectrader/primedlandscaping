import React from 'react';
import {
  FaHome,
  FaCalendarAlt,
  FaDollarSign,
  FaCheckCircle,
  FaPlusCircle,
  FaSeedling,
  FaTree,
  FaCut,
  FaLeaf,
  FaTrashAlt,
  FaTint,
  FaUmbrellaBeach,
  FaStar,
  FaWater,
} from 'react-icons/fa';
import './LawncareDetails.css';
import { Link } from "react-router-dom";

const residentialServices = [
  {
    icon: FaHome,
    title: 'Comprehensive Residential Lawn Care & Maintenance',
    content: [
      `At <strong>Primed Landscaping</strong>, we offer weekly, year-round residential lawn maintenance to keep your property in perfect shape throughout all seasons. With our <strong>12 equal monthly payments</strong>, you can enjoy continuous lawn care with no surprises or hidden fees.`,
      `Our <strong>one-year contract</strong> guarantees consistent service, and with the first month being <strong>no-commitment</strong>, you can experience our work before fully committing. We offer <strong>five customized packages</strong> designed to fit the size and needs of your property.`,
      `Each package includes mowing, edging, debris cleanup, flower bed control, trimming, raking fallen leaves, and optionally, quarterly fertilization to ensure your lawn stays healthy, neat, and beautiful.`,
    ],
    disclaimer: {
      title: 'First Service Disclaimer',
      text: `Please note that the first service may cost more depending on the current state of your property. If your lawn or landscape requires additional work to bring it up to standard (such as excessive weeding, debris removal, or lawn restoration), the first service will be priced higher. After the initial service, future maintenance will be charged at the regular rate once your property is properly maintained.`,
    },
  },
  {
    icon: FaPlusCircle,
    title: 'Custom Residential Lawn Care Package (Sizes May Vary)',
    content: [
      `At Primed Landscaping, we offer a <strong>Custom Residential Lawn Care Package</strong> designed for homeowners who value flexibility and a personalized approach. This package allows you to choose the contract length that fits your needs—whether it's monthly, quarterly, or annually. Due to the flexibility this package offers, the cost is higher compared to our standard packages.`,
    ],
    features: [
      {
        icon: FaCalendarAlt,
        text: 'Flexible Contract Length – Choose a contract that fits your schedule and property needs, whether on a quarterly, 6 month, or yearly basis.',
      },
      {
        icon: FaCheckCircle,
        text: 'Full Property Maintenance – Weekly services include mowing, edging, debris cleanup, flower bed control, and trimming.',
      },
      {
        icon: FaDollarSign,
        text: 'Due to the flexibility the custom package offers, the price is higher than the other 4 packages.',
      },
    ],
    badge: 'Most Flexible',
  },
  {
    icon: FaSeedling,
    title: 'Small Residential Package (0.00 – 0.25 Acres) – Starts at $249/month',
    content: [
      'Perfect for smaller properties, this package offers essential weekly maintenance to keep your yard looking clean and well‑maintained. With all packages, you can add unique services for an additional cost.',
    ],
    features: [
      {
        icon: FaCut,
        text: 'Mowing – Keeps your lawn at the right height, encouraging healthy growth and preventing thatch buildup.',
      },
      {
        icon: FaLeaf,
        text: 'Edging – Defines borders along sidewalks, driveways, and garden beds to maintain a crisp, clean look.',
      },
      {
        icon: FaTrashAlt,
        text: 'Blowing Off Debris – Clears leaves, grass clippings, and dirt from all hard surfaces to maintain a neat appearance.',
      },
      {
        icon: FaSeedling,
        text: 'Weeding & Flower Bed Control – Regular weeding prevents unwanted plants from overtaking your garden.',
      },
      {
        icon: FaTree,
        text: 'Trimming – Shapes shrubs, bushes, and small trees, keeping your landscape neat and uniform.',
      },
      {
        icon: FaLeaf,
        text: 'Raking Fallen Leaves – Regular leaf raking prevents buildup that can smother your grass, keeping your lawn healthy and looking neat.',
      },
      {
        icon: FaTint,
        text: 'Quarterly Fertilization (add‑on) – This service provides essential nutrients to your lawn, ensuring it stays lush and healthy throughout the year.',
      },
      {
        icon: FaWater,
        text: 'Irrigation System Check – We inspect and tune your sprinklers to ensure efficient watering, preventing dry spots and water waste.',
      },
      {
        icon: FaPlusCircle,
        text: 'Seasonal Planting Advice – Personalized guidance on seasonal flowers and plants to keep your landscape vibrant all year.',
      },
    ],
    badge: 'Popular Choice',
  },
  {
    icon: FaCheckCircle,
    title: 'Why Choose Primed Landscaping?',
    features: [
      {
        icon: FaCalendarAlt,
        text: 'Weekly Maintenance in All Seasons – Ensures that your property stays looking great year‑round, regardless of the season.',
      },
      {
        icon: FaDollarSign,
        text: 'Equal Monthly Payments – A predictable, stable cost each month makes budgeting for lawn care simple and straightforward.',
      },
      {
        icon: FaCheckCircle,
        text: 'One‑Year Contract with First Month No Commitment – Try our services for a month with no obligation before committing to the full year.',
      },
      {
        icon: FaHome,
        text: "Full Property Maintenance – Covers all aspects of lawn care and landscape maintenance, so you don't need to worry about a thing.",
      },
      {
        icon: FaSeedling,
        text: 'Eco‑Friendly Practices – We use organic products and water‑smart methods to keep your lawn healthy, safe for kids and pets, and kind to the planet.',
      },
      {
        icon: FaStar,
        text: '100 % Satisfaction Guarantee – Our crew isn’t finished until you are delighted, ensuring consistent, top‑quality results every visit.',
      },
    ],
    closing: `Choose our residential lawn care packages for professional, hassle‑free maintenance that will keep your property looking its best. Contact us today to set up a customized plan tailored to your needs. Unlike other landscapers' packages, we allow you to add unique services for an additional cost.`,
  }
];

export default function ResidentialLawncare() {
  return (
    <section className="rl-container">
      <div className="rl-header">
        <h1 className="rl-main-title">Premium Residential Lawn Care Services</h1>
        <p className="rl-subtitle">Professional maintenance tailored to your property's needs</p>
      </div>
      
      <div className="rl-services-grid">
        {residentialServices.map((service, index) => (
          <div key={index} className={`rl-service-card ${index % 2 === 0 ? 'rl-card-primary' : 'rl-card-accent'}`}>
            {service.badge && (
              <div className="rl-service-badge">
                {service.badge}
              </div>
            )}
            
            <div className="rl-service-header">
              <div className="rl-service-icon">
                <service.icon aria-hidden="true" />
              </div>
              <h2 className="rl-service-title">{service.title}</h2>
            </div>

            {service.content && (
              <div className="rl-service-content">
                {service.content.map((paragraph, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            )}

            {service.disclaimer && (
              <div className="rl-service-disclaimer">
                <div className="rl-disclaimer-icon">
                  <FaUmbrellaBeach />
                </div>
                <div>
                  <h3>{service.disclaimer.title}</h3>
                  <p>{service.disclaimer.text}</p>
                </div>
              </div>
            )}

            {service.features && (
              <div className="rl-service-features">
                <h3 className="rl-features-title">Key Features</h3>
                <ul className="rl-features-list">
                  {service.features.map((feature, i) => (
                    <li key={i} className="rl-feature-item">
                      <div className="rl-feature-icon">
                        <feature.icon aria-hidden="true" />
                      </div>
                      <span className="rl-feature-text">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.closing && (
              <div className="rl-service-closing">
                <div className="rl-closing-icon">
                  <FaCheckCircle />
                </div>
                <p>{service.closing}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="rl-cta-section">
        <h2 className="rl-cta-title">Ready to Transform Your Lawn?</h2>
        <p className="rl-cta-subtitle">Contact us today for a free consultation and estimate. Our friendly experts will assess your property, answer any questions, and design a maintenance plan tailored to your needs and budget.</p>
        
        <div className="rl-cta-services">
          <p>You might also be interested in our:</p>
          <div className="rl-service-links">
            <Link to="/services/irrigation" className="rl-service-link">Irrigation Services</Link>
            <Link to="/services/sod-installation" className="rl-service-link">Sod Installation</Link>
            <Link to="/services/lawn-recovery-package" className="rl-service-link">Lawn Recovery Package</Link>
          </div>
        </div>
        
        <Link to="/contact" className="rl-cta-button">
          Get Your Free Quote
        </Link>
      </div>
    </section>
  );
}