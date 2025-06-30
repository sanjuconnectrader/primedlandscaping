import React from 'react';
import './Turf.css';

const Turf = () => {
  // Points to /public/images/turf.jpg
  const backgroundUrl = `${process.env.PUBLIC_URL}/turf.jpg`;

  return (
    <section
      className="Turf"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="Turf__overlay">
        <h1 className="Turf__title">
          Turf Installation Service
        </h1>
      </div>
    </section>
  );
};

export default Turf;