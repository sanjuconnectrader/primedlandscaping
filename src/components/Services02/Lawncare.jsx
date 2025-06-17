import React from 'react';
import './Lawncare.css';

const Lawncare = () => {
  // Points to /public/images/Residential.avif
  const backgroundUrl = `${process.env.PUBLIC_URL}/Residential.avif`;

  return (
    <section
      className="Lawncare"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="Lawncare__overlay">
        <h1 className="Lawncare__title">
          Residential Landscaping
        </h1>
      </div>
    </section>
  );
};

export default Lawncare;
