// Hardscaping.jsx
import React from 'react';
import './Hardscaping.css';

const Hardscaping = () => {
    // Example: points to /public/images/hoa-background.jpg if you want to use it later
    const backgroundUrl = `${process.env.PUBLIC_URL}/images/hoa-background.jpg`;

    return (
        <section
            className="Hardscaping"
            /* Replace the URL below with `backgroundUrl` if you prefer a local image */
            style={{
                backgroundImage:
                    'url(https://static.wixstatic.com/media/645dca_49023b989f2446c6bc1d11a4eba4d71c~mv2.jpg/v1/fill/w_1901,h_481,al_r,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/645dca_49023b989f2446c6bc1d11a4eba4d71c~mv2.jpg)',
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
