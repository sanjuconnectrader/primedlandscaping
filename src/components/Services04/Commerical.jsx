// Commerical.jsx
import React from 'react';
import './Commerical.css';

const Commerical = () => {
    // Example: points to /public/images/hoa-background.jpg if you want to use it later
    const backgroundUrl = `${process.env.PUBLIC_URL}/images/hoa-background.jpg`;

    return (
        <section
            className="Commerical"
            /* Replace the URL below with `backgroundUrl` if you prefer a local image */
            style={{
                backgroundImage:
                    'url(https://static.wixstatic.com/media/645dca_fc5bb54598194e7dbccba0fc27041c3a~mv2.jpg/v1/fill/w_1452,h_383,al_c,q_85,enc_avif,quality_auto/645dca_fc5bb54598194e7dbccba0fc27041c3a~mv2.jpg)',
            }}
        >
            <div className="Commerical__overlay">
                <h1 className="Commerical__title">
                    Commercial Landscaping Maintenance

                </h1>
            </div>
        </section>
    );
};

export default Commerical;
