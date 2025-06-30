import React from 'react';
import './Irrigation.css';

const Irrigation = () => {
  // Points to /public/images/hoalandscaping.avif
  const backgroundUrl = `${process.env.PUBLIC_URL}/irrigation1.jpg`;

  return (
    <section
      className="Irrigation"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="Irrigation__overlay">
        <h1 className="Irrigation__title">
          Irrigation System Services
        </h1>
      </div>
    </section>
  );
};

export default Irrigation;