import React from 'react';
import './HoaLandscaping.css';

const HoaLandscaping = () => {
  // Points to /public/images/hoalandscaping.avif
  const backgroundUrl = `${process.env.PUBLIC_URL}/hoalandscaping.avif`;

  return (
    <section
      className="Hoalandscaping"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="Hoalandscaping__overlay">
        <h1 className="Hoalandscaping__title">
          HOA Landscaping Maintenance
        </h1>
      </div>
    </section>
  );
};

export default HoaLandscaping;
