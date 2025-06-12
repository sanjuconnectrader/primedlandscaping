// Pressurewashing.jsx
import React from 'react';
import './Pressurewashing.css';

const Pressurewashing = () => {
    // Example: points to /public/images/hoa-background.jpg if you want to use it later
    const backgroundUrl = `${process.env.PUBLIC_URL}/images/hoa-background.jpg`;

    return (
        <section
            className="Pressurewashing"
            /* Replace the URL below with `backgroundUrl` if you prefer a local image */
            style={{
                backgroundImage:
                    'url(https://static.wixstatic.com/media/645dca_5ac7696a1cc543968cbbb963fa6e7735~mv2.jpg/v1/fill/w_1729,h_496,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/645dca_5ac7696a1cc543968cbbb963fa6e7735~mv2.jpg)',
            }}
        >
            <div className="Pressurewashing__overlay">
                <h1 className="Pressurewashing__title">
                    Pressure Washing Services
                </h1>
            </div>
        </section>
    );
};

export default Pressurewashing;
