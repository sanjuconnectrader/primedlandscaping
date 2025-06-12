import React from 'react';
import {
  FaLeaf,
  FaBroom,
  FaTruckMoving,
  FaWater,
  FaSprayCan,
  FaCheckCircle
} from 'react-icons/fa';
import './Pressurewashingdetails.css';

const pressureWashingServices = [
  {
    icon: FaBroom,
    title: 'Step 1: Blow Off Debris',
    description: [
      'We start by using high-powered blowers to remove loose dirt, leaves, and other surface debris.',
      'This step prevents unnecessary buildup from spreading during the washing process and ensures a smoother, more effective cleaning.'
    ]
  },
  {
    icon: FaLeaf,
    title: 'Step 2: Remove Moss & Built-Up Dirt',
    description: [
      'Moss and thick layers of dirt are manually scraped or brushed away to prevent regrowth and eliminate slippery, hazardous surfaces.',
      'Removing these first helps prevent excessive clogging in our pressure washing equipment and allows for a deeper clean.'
    ]
  },
  {
    icon: FaSprayCan,
    title: 'Step 3: Spray Off Built-Up Surface Debris',
    description: [
      'A high-pressure rinse is applied to clear away any remaining loose dirt, dust, and organic material.',
      'This step helps expose stubborn grime that needs a more targeted cleaning while also prepping the surface for even washing.'
    ]
  },
  {
    icon: FaTruckMoving,
    title: 'Step 4: Surface Cleaning',
    description: [
      'A specialized surface cleaner is used to apply consistent pressure across the entire area, lifting deep-seated dirt, stains, and grime.',
      'This method prevents streaking and ensures an even, professional-grade finish.'
    ]
  },
  {
    icon: FaWater,
    title: 'Step 5: Final Rinse',
    description: [
      'We complete the process with a thorough rinse, removing any remaining residue from the cleaning process.',
      'This step ensures no leftover dirt or grime is left behind, giving the surface a fresh, polished look.'
    ]
  },
  {
    icon: FaCheckCircle,
    title: 'Step 6: Final Check',
    description: [
      'The area is inspected to ensure all moss, dirt, and debris have been fully removed.',
      'We walk through the completed work to confirm the surface is clean, safe, and restored to its best condition.'
    ]
  }
];

export default function PressureWashingDetails() {
  return (
    <section className="PressureWashingDetails">
      <div className="PressureWashingDetails__container">
        <header className="PressureWashingDetails__main-header">
          <h1 className="PressureWashingDetails__main-title">
            Residential & Commercial Pressure Washing
          </h1>
          <p className="PressureWashingDetails__main-description">
            Our professional pressure washing services effectively remove dirt, grime, mold, and stains from driveways, sidewalks, patios, and more — restoring your property's curb appeal. We use high-quality equipment to ensure a deep clean without damage. Pressure washing prices start at $200 and vary based on the size and condition of the area that needs cleaning.
          </p>
        </header>

        <div className="PressureWashingDetails__services">
          {pressureWashingServices.map((service, idx) => (
            <div key={idx} className="PressureWashingDetails__service">
              <div className="PressureWashingDetails__service-icon">
                <service.icon aria-hidden="true" />
              </div>
              <div className="PressureWashingDetails__service-content">
                <h2 className="PressureWashingDetails__service-title">{service.title}</h2>
                <div className="PressureWashingDetails__service-description">
                  {service.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Thoughts Section */}
        <div className="PressureWashingDetails__final-thoughts">
          <h2 className="PressureWashingDetails__final-title">Book a Pressure Washing Appointment</h2>
          <p className="PressureWashingDetails__final-description">
            Our expert pressure washing team ensures a deep, thorough clean for your property’s surfaces — removing dirt, moss, grime, and stains to restore its original beauty.
            Don’t wait — **Book your appointment today!** Pressure washing services start at **$200**, with final pricing based on your area’s size and condition.
          </p>
          <button className="PressureWashingDetails__contact-button">
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
}