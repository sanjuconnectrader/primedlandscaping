import React from 'react';
import './Lawncare.css';

const Lawncare = () => {
  // Example: points to /public/images/hoa-background.jpg if you want to use it later
  const backgroundUrl = `${process.env.PUBLIC_URL}/images/hoa-background.jpg`;

  return (
    <section
      className="Lawncare"
      /* Replace the URL below with `backgroundUrl` if you prefer a local image */
      style={{
        backgroundImage:
          'url(https://static.wixstatic.com/media/645dca_73381a67552744e791da85939a2e03ae~mv2.jpg/v1/fill/w_2208,h_317,al_c,q_85,enc_avif,quality_auto/645dca_73381a67552744e791da85939a2e03ae~mv2.jpg)',
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
