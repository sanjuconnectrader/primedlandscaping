import React from 'react';
import './Zod.css';

const Zod = () => {
 
  const backgroundUrl = `${process.env.PUBLIC_URL}/sod.jpg`;

  return (
    <section
      className="zod"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="zod__overlay">
        <h1 className="zod__title">Sod Installation Service</h1>
      </div>
    </section>
  );
};

export default Zod;
