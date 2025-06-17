import React from 'react';
import './Commerical.css'; // corrected spelling

const Commercial = () => {
  // Path to local image inside public/images/
  const backgroundUrl = `${process.env.PUBLIC_URL}/Commercial.avif`;

  return (
    <section
      className="Commercial"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="Commercial__overlay">
        <h1 className="Commercial__title">
          Commercial Landscaping Maintenance
        </h1>
      </div>
    </section>
  );
};

export default Commercial;
