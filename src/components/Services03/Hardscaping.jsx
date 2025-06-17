import React from 'react';
import './Hardscaping.css';

const Hardscaping = () => {
  // Points to /public/images/Hardscaping.avif
  const backgroundUrl = `${process.env.PUBLIC_URL}/Hardscaping.avif`;

  return (
    <section
      className="Hardscaping"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="Hardscaping__overlay">
        <h1 className="Hardscaping__title">
          Hardscaping
        </h1>
      </div>
    </section>
  );
};

export default Hardscaping;
