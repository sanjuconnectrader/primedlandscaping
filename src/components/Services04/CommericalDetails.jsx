import React from 'react';
import {
  FaCut,
  FaTree,
  FaLeaf,
  FaSeedling,
  FaTint,
  FaTrashAlt,
  FaMagic,
  FaPhoneAlt
} from 'react-icons/fa';
import './CommericalDetails.css';
import LawnPackage from './LawnPackage';

const commercialServices = [
  {
    icon: FaCut,
    title: 'Mowing',
    description: `Our team ensures lush, well-manicured lawns with precise cuts, healthy growth, and expert care. With our routine lawn maintenance, our mowing will help keep your outdoor space looking its best year-round.`,
  },
  {
    icon: FaLeaf,
    title: 'Edging/Trimming',
    description: `We meticulously edge along sidewalks, driveways, and flower beds, giving your landscape a polished and refined look. We expertly trim shrubs and bushes, enhancing their shape and maintaining the overall aesthetics of your outdoor space.`,
  },
  {
    icon: FaTrashAlt,
    title: 'Blowing',
    description: `Every corner of your property deserves equal attention. Our blowing services eliminate unsightly debris, leaves, and grass clippings, leaving your landscape looking impeccably clean and inviting. A fresh and neat outdoor space is just a blow away!`,
  },
  {
    icon: FaTree,
    title: 'Pruning',
    description: `Shaping and maintaining the health of your trees is vital to their longevity and beauty. We are experienced arborists and can provide precise pruning services, ensuring the trees on your property grow strong and maintain their natural splendor. Proper pruning enhances sunlight exposure, improves air circulation, and prevents disease, contributing to a thriving landscape.`,
  },
  {
    icon: FaSeedling,
    title: 'Flower Bed Care/Weed Control',
    description: `Flower beds add vibrant colors and textures to your landscape. Our bed care and weed control services guarantee that your flower beds remain a captivating focal point. We remove unwanted weeds, cultivate the soil, and ensure your plants receive the nourishment they need to flourish.`,
  },
  {
    icon: FaTint,
    title: 'Fertilizer Applications',
    description: `Nourishing your landscape is essential for vibrant growth. Our fertilizer applications provide the right nutrients at the right time, promoting lush and healthy grass, plants, and trees. A well-fed landscape stands as a testament to our commitment to your property's vitality.`,
  },
];

export default function CommercialDetails() {
  return (
    <section className="CommercialDetails">
      <div className="CommercialDetails__container">
        <header className="CommercialDetails__main-header">
          <h1 className="CommercialDetails__main-title">Commercial Landscape Maintenance Services</h1>
          <p className="CommercialDetails__main-description">
            Primed Landscaping takes pride in turning your outdoor dreams into reality. Our array of commercial landscape maintenance services is meticulously designed to ensure your property radiates beauty and sophistication throughout the seasons. With our experienced team and unwavering dedication, your landscape will become a living masterpiece that enhances your property.
          </p>
        </header>

        <div className="CommercialDetails__services">
          {commercialServices.map((service, idx) => (
            <div key={idx} className="CommercialDetails__service">
              <div className="CommercialDetails__service-icon">
                <service.icon aria-hidden="true" />
              </div>
              <div className="CommercialDetails__service-content">
                <h2 className="CommercialDetails__service-title">{service.title}</h2>
                <p className="CommercialDetails__service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Added Lawn Recovery Section */}
      
      </div>
      <LawnPackage/>
    </section>
  );
}