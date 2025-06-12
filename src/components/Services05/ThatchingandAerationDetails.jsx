import React from 'react';
import {
  FaLayerGroup,
  FaSeedling,
  FaBroom,
  FaTruckMoving,
  FaWater,
  FaLeaf
} from 'react-icons/fa';
import './ThatchingandAerationDetails.css';

const thatchingAndAerationServices = [
  {
    icon: FaLayerGroup,
    title: 'Step 1: Dethatching',
    description: [
      'What It Is: Dethatching removes the layer of dead grass, roots, and debris (thatch) that builds up on the soil surface, preventing nutrients, water, and air from reaching the roots.',
      'Why It\'s Important: Thatch buildup can suffocate your lawn, promote disease, and block new grass growth. Removing it encourages healthier turf.'
    ]
  },
  {
    icon: FaSeedling,
    title: 'Step 2: Aeration',
    description: [
      'What It Is: Core aeration involves removing small plugs of soil from your lawn to reduce soil compaction and improve root growth.',
      'Why It\'s Important: It allows air, water, and nutrients to penetrate the soil more effectively, leading to stronger root systems.'
    ]
  },
  {
    icon: FaBroom,
    title: 'Step 3: Clean Up',
    description: [
      'What It Is: After dethatching and aeration, we remove debris, dead grass, and soil plugs from your lawn.',
      'Why It\'s Important: A clean lawn ensures new grass seed can properly make contact with the soil, increasing germination rates.'
    ]
  },
  {
    icon: FaTruckMoving,
    title: 'Step 4: Topsoil Application',
    description: [
      'What It Is: Spreading a thin layer of high-quality topsoil over the lawn to improve soil structure and provide essential nutrients.',
      'Why It\'s Important: It enhances soil fertility, improves drainage, and creates an ideal environment for new grass seed to take root.'
    ]
  },
  {
    icon: FaWater,
    title: 'Step 5: Grass Seeding',
    description: [
      'What It Is: Applying premium grass seed that is best suited for your climate and lawn conditions.',
      'Why It\'s Important: Overseeding helps thicken the lawn, reduces weeds, and promotes a lush, green appearance.'
    ]
  },
  {
    icon: FaLeaf,
    title: 'Step 6: Peat Moss Application',
    description: [
      'What It Is: Spreading a light layer of peat moss over the newly seeded lawn.',
      'Why It\'s Important: Peat moss retains moisture, protects seeds from birds, and accelerates germination.'
    ]
  }
];

export default function ThatchingandAerationDetails() {
  return (
    <section className="ThatchingandAerationDetails">
      <div className="ThatchingandAerationDetails__container">
        <header className="ThatchingandAerationDetails__main-header">
          <h1 className="ThatchingandAerationDetails__main-title">
            6-Step Lawn Renovation Process
          </h1>
          <p className="ThatchingandAerationDetails__main-description">
            This comprehensive process ensures optimal lawn health, promoting stronger roots and a greener appearance.
            Contact us today for a customized quote and start your lawn transformation! Pricing starts at $500.
          </p>
        </header>

        <div className="ThatchingandAerationDetails__services">
          {thatchingAndAerationServices.map((service, idx) => (
            <div key={idx} className="ThatchingandAerationDetails__service">
              <div className="ThatchingandAerationDetails__service-icon">
                <service.icon aria-hidden="true" />
              </div>
              <div className="ThatchingandAerationDetails__service-content">
                <h2 className="ThatchingandAerationDetails__service-title">{service.title}</h2>
                <div className="ThatchingandAerationDetails__service-description">
                  {service.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Thoughts Section */}
        <div className="ThatchingandAerationDetails__final-thoughts">
          <h2 className="ThatchingandAerationDetails__final-title">Final Thoughts</h2>
          <p className="ThatchingandAerationDetails__final-description">
            This **six-step process** ensures optimal lawn health, promoting **stronger roots** and a **greener appearance**.
            Don't wait to transform your lawn into a vibrant, healthy oasis. **Contact us today** for a customized quote and start your lawn transformation!
            Our comprehensive service is designed to deliver lasting results, with **pricing starting at $500**.
          </p>
          <button className="ThatchingandAerationDetails__contact-button">
            Get Your Free Quote
          </button>
        </div>

      </div>
    </section>
  );
}