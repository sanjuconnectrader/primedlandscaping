// ThatchingandAeration.jsx
import React from 'react';
import './ThatchingandAeration.css';

const ThatchingandAeration = () => {
    // Example: points to /public/images/hoa-background.jpg if you want to use it later
    const backgroundUrl = `${process.env.PUBLIC_URL}/images/hoa-background.jpg`;

    return (
        <section
            className="ThatchingandAeration"
            /* Replace the URL below with `backgroundUrl` if you prefer a local image */
            style={{
                backgroundImage:
                    'url(https://static.wixstatic.com/media/645dca_ba8254e818264cd392ade15d61d5041c~mv2.jpeg/v1/fill/w_1901,h_409,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/645dca_ba8254e818264cd392ade15d61d5041c~mv2.jpeg)',
            }}
        >
            <div className="ThatchingandAeration__overlay">
                <h1 className="ThatchingandAeration__title">
                    Commercial Landscaping Maintenance
                </h1>
            </div>
        </section>
    );
};

export default ThatchingandAeration;
