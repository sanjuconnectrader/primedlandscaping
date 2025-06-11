import React from 'react';
import {
  FaHome,
  FaFire,
  FaRoad,
  FaBuilding,
  FaChartLine,
  FaUmbrellaBeach,
  FaMountain,
} from 'react-icons/fa';
import './HardscapingDetails.css'; // Ensure this path is correct

const hardscapingServices = [
  {
    icon: FaHome,
    title: 'Residential Hardscaping',
    features: [
      {
        icon: FaUmbrellaBeach,
        title: 'Paver Patios',
        description:
          'A well-designed paver patio creates the perfect area for relaxation, entertainment, and outdoor dining. We offer a wide selection of materials, colors, and patterns to match your home\'s style while ensuring long-lasting durability.',
      },
      {
        icon: FaRoad,
        title: 'Walkways',
        description:
          'Custom walkways improve accessibility and seamlessly connect different areas of your property. Our expert installations enhance the beauty of your yard while providing a smooth and sturdy surface for everyday use.',
      },
      {
        icon: FaMountain,
        title: 'Retaining Walls',
        description:
          'Retaining walls add both style and functionality to your outdoor space. They help control erosion, create tiered landscaping, and provide a polished, professional look to gardens and patios. Our durable materials ensure longevity while complementing your home\'s design.',
      },
      {
        icon: FaFire,
        title: 'Fire Pits',
        description:
          'A custom fire pit brings warmth and ambiance to any outdoor space, perfect for family gatherings or relaxing evenings. We install fire pits in a variety of styles and materials to suit your backyard\'s layout.',
      },
    ],
  },
  {
    icon: FaBuilding,
    title: 'Commercial Hardscaping',
    features: [
      {
        icon: FaChartLine,
        title: 'Boost Curb Appeal & Property Value',
        description:
          'A professionally designed commercial landscape creates a lasting first impression. Our paver walkways, patios, and retaining walls enhance the exterior of businesses, increasing both functionality and visual appeal.',
      },
      {
        icon: FaRoad,
        title: 'Walkways & Entrances',
        description:
          'Well-constructed walkways ensure a smooth and slip-resistant surface, providing customers and employees with safe and easy access to your business. We customize designs to complement your commercial property while maximizing durability.',
      },
      {
        icon: FaMountain,
        title: 'Retaining Walls',
        description:
          'For commercial properties, retaining walls offer essential structural support while creating visually appealing landscapes. They help manage elevation changes, prevent soil erosion, and define outdoor areas with a polished, professional finish.',
      },
      {
        icon: FaUmbrellaBeach,
        title: 'Outdoor Seating Areas & Patios',
        description:
          'Restaurants, hotels, office buildings, and retail centers benefit from paver patios that provide stylish, functional outdoor spaces. Our expert installations ensure that these areas remain durable and low-maintenance, perfect for high-traffic environments.',
      },
      {
        icon: FaFire,
        title: 'Fire Pits & Gathering Spaces',
        description:
          'For businesses such as restaurants, resorts, and event venues, a well-placed fire pit creates a warm and inviting ambiance that attracts customers and enhances their experience.',
      },
    ],
  },
];

export default function HardscapingDetails() {
  return (
    <section className="HardscapingDetails">
      <div className="HardscapingDetails__container">
        {hardscapingServices.map((service, idx) => (
          <div key={idx} className="HardscapingDetails__section">
            <header className="HardscapingDetails__header">
              <span className="HardscapingDetails__icon">
                <service.icon aria-hidden="true" />
              </span>
              <h2 className="HardscapingDetails__title">{service.title}</h2>
            </header>

            <div className="HardscapingDetails__features">
              {service.features.map((feature, i) => (
                <div key={i} className="HardscapingDetails__feature">
                  <div className="HardscapingDetails__feature-header">
                    <span className="HardscapingDetails__feature-icon">
                      <feature.icon aria-hidden="true" />
                    </span>
                    <h3 className="HardscapingDetails__feature-title">{feature.title}</h3>
                  </div>
                  <p className="HardscapingDetails__feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}