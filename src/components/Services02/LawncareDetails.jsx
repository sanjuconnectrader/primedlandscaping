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
} from 'react-icons/fa';
import './LawncareDetails.css'; // Make sure this path is correct

const residentialServices = [
  {
    icon: FaHome,
    title: 'Comprehensive Residential Lawn Care & Maintenance',
    content: [
      `At **Primed Landscaping**, we offer weekly, year-round residential lawn maintenance to keep your property in perfect shape throughout all seasons. With our **12 equal monthly payments**, you can enjoy continuous lawn care with no surprises or hidden fees.`,
      `Our **one-year contract** guarantees consistent service, and with the first month being **no-commitment**, you can experience our work before fully committing. We offer **five customized packages** designed to fit the size and needs of your property.`,
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
      `At Primed Landscaping, we offer a **Custom Residential Lawn Care Package** designed for homeowners who value flexibility and a personalized approach. This package allows you to choose the contract length that fits your needs—whether it's monthly, quarterly, or annually. Due to the flexibility this package offers, the cost is higher compared to our standard packages.`,
    ],
    features: [
      {
        icon: FaCalendarAlt,
        text: 'Flexible Contract Length – Choose a contract that fits your schedule and property needs, whether on a quarterly, 6 month, or yearly basis.',
      },
      {
        icon: FaCheckCircle,
        text: 'Full Property Maintenance – Weekly services include mowing, edging, debris cleanup, flower bed control, and trimming to keep your property looking pristine year-round.',
      },
      {
        icon: FaDollarSign,
        text: 'Due to the flexibility the custom package offers, the price is higher than the other 4 packages.',
      },
    ],
  },
  {
    icon: FaSeedling,
    title: 'Small Residential Package (0.00 - 0.25 Acres) – Starts at $249/month',
    content: [
      `Perfect for smaller properties, this package offers essential weekly maintenance to keep your yard looking clean and well-maintained. With all packages, you can add unique services for an additional cost.`,
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
        text: 'Weeding & Flower Bed Control – Regular weeding prevents unwanted plants from overtaking your garden, while flower bed control ensures plants remain healthy and well-maintained.',
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
        text: 'Quarterly Fertilization (add-on) – This service provides essential nutrients to your lawn, ensuring it stays lush and healthy throughout the year.',
      },
    ],
  },
  // You would add more package definitions here following the same structure
  {
    icon: FaCheckCircle,
    title: 'Why Choose Primed Landscaping?',
    features: [
      {
        icon: FaCalendarAlt,
        text: 'Weekly Maintenance in All Seasons – Ensures that your property stays looking great year-round, regardless of the season.',
      },
      {
        icon: FaDollarSign,
        text: 'Equal Monthly Payments – A predictable, stable cost each month makes budgeting for lawn care simple and straightforward.',
      },
      {
        icon: FaCheckCircle,
        text: 'One-Year Contract with First Month No Commitment – Try our services for a month with no obligation before committing to the full year.',
      },
      {
        icon: FaHome,
        text: 'Full Property Maintenance – Covers all aspects of lawn care and landscape maintenance, so you don\'t need to worry about a thing.',
      },
    ],
    closing: `Choose our residential lawn care packages for professional, hassle-free maintenance that will keep your property looking its best. Contact us today to set up a customized plan tailored to your needs. Unlike other landscapers packages, we allow you to add unique services for an additional cost.`,
  },
];

export default function ResidentialLawncare() {
  return (
    <section className="residential-lawncare">
      <div className="lawncare-container">
        {residentialServices.map((service, index) => (
          <div key={index} className="service-section">
            <header className="service-header">
              <span className="service-icon">
                <service.icon aria-hidden="true" />
              </span>
              <h2 className="service-title">{service.title}</h2>
            </header>

            {service.content && (
              <div className="service-content">
                {service.content.map((paragraph, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            )}

            {service.disclaimer && (
              <div className="service-disclaimer">
                <h3>{service.disclaimer.title}</h3>
                <p>{service.disclaimer.text}</p>
              </div>
            )}

            {service.features && (
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-icon">
                      <feature.icon aria-hidden="true" />
                    </span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            )}

            {service.closing && (
              <div className="service-closing">
                <p>{service.closing}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}