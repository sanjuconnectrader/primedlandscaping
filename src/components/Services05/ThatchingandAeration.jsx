import React from 'react';
import './ThatchingandAeration.css';

const ThatchingAndAeration = () => {
  // Path to local image inside public/images/
  const backgroundUrl = `${process.env.PUBLIC_URL}/Thatching.avif`;

  return (
    <section
      className="ThatchingAndAeration"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="ThatchingAndAeration__overlay">
        <h1 className="ThatchingAndAeration__title">
          Lawn Recovery Package
        </h1>
      </div>
    </section>
  );
};

export default ThatchingAndAeration;
