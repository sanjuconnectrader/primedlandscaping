import React from 'react';
import './HoaLandscaping.css';

const HoaLandscaping = () => {
  // PUBLIC_URL points to your /public folder at runtime
  const backgroundUrl = `${process.env.PUBLIC_URL}/images/hoa-background.jpg`;

  return (
    <section
      className="Hoalandscaping"
      style={{ backgroundImage: `url(${"https://static.wixstatic.com/media/645dca_53d08b9f459b4d1c9014a09f4c94d1cd~mv2.webp/v1/fill/w_1000,h_245,al_c,q_80,enc_avif,quality_auto/645dca_53d08b9f459b4d1c9014a09f4c94d1cd~mv2.webp"})` }}
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
