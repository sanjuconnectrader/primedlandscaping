import React from "react";
import "./Maintenance.css";

const Maintenance = () => {
  /* Swap these for real, optimised WebP/AVIF assets */
  const img1 = `${process.env.PUBLIC_URL}/maintainance1.jpg`;
  const img2 = `${process.env.PUBLIC_URL}/Maintenance2.jpg`;
  const img3 = `${process.env.PUBLIC_URL}/hoa.jpg`;

  return (
    <section className="maintenance-home">
      <div className="maintenance-home__container">
        {/* ---------- Left: media grid ---------- */}
        <div className="maintenance-home__media">
          <div className="maintenance-home-media-grid">
            <div className="maintenance-home-media-grid__item maintenance-home-img1">
              <img
                src={img1}
                alt="Residential lawn care"
                loading="lazy"
              />
              <div className="maintenance-home-media-caption">Residential Care</div>
            </div>
            <div className="maintenance-home-media-grid__item maintenance-home-img2">
              <img
                src={img2}
                alt="Commercial landscape maintenance"
                loading="lazy"
              />
              <div className="maintenance-home-media-caption">Commercial Maintenance</div>
            </div>
            <div className="maintenance-home-media-grid__item maintenance-home-img3">
              <img
                src={img3}
                alt="HOA common-area upkeep"
                loading="lazy"
              />
              <div className="maintenance-home-media-caption">HOA Upkeep</div>
            </div>
          </div>
        </div>

        {/* ---------- Right: copy ---------- */}
        <div className="maintenance-home__content">
          <span className="maintenance-home-section-subtitle">Landscaping Maintenance</span>
          <h2 className="maintenance-home__title">
            Year-Round Landscaping Maintenance Made Effortless
          </h2>

          <div className="maintenance-home-content-grid">
            <div className="maintenance-home-content-block">
              <div className="maintenance-home-block-icon">✓</div>
              <p className="maintenance-home-block-text">
                From residential yards to commercial campuses and HOA common areas,
                we provide comprehensive landscaping maintenance that keeps your
                green spaces healthy, beautiful, and professionally groomed.
              </p>
            </div>

            <div className="maintenance-home-content-block">
              <div className="maintenance-home-block-icon">✓</div>
              <p className="maintenance-home-block-text">
                Our certified teams handle everything from seasonal lawn care and
                pruning to irrigation checks and soil health optimisation.
              </p>
            </div>

            <div className="maintenance-home-content-block">
              <div className="maintenance-home-block-icon">✓</div>
              <p className="maintenance-home-block-text">
                We maintain pristine grounds with efficient scheduling,
                eco-conscious practices, and meticulous attention to detail.
              </p>
            </div>
          </div>

          <div className="maintenance-home-cta-group">
            <button type="button" className="maintenance-home-btn maintenance-home-btn-primary">
              Get Started
            </button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;