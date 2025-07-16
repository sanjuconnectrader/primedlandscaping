import React from "react";
import {
  GiGrass,          // fresh-cut sod icon
  GiSpade,          // soil-prep icon
  GiLevelEndFlag,   // seamless install / edging icon
  GiWaterDrop       // irrigation & after-care icon
} from "react-icons/gi";
import "./Turfhome.css";
import { Link } from "react-router-dom";

const Turfhome = () => {
  const features = [
    {
      icon: <GiGrass className="feature-icon" />,
      title: "Premium Sod Selection",
      text: "Choose from top-grade, climate-matched sod varieties for an instant, vibrant lawn.",
    },
    {
      icon: <GiSpade className="feature-icon" />,
      title: "Perfect Ground Prep",
      text: "Laser-grading, fertilising and rolling ensure the ideal foundation for new turf.",
    },
    {
      icon: <GiLevelEndFlag className="feature-icon" />,
      title: "Seamless Installation",
      text: "Our crew aligns and seams each roll flawlessly—no gaps, bumps or trip hazards.",
    },
    {
      icon: <GiWaterDrop className="feature-icon" />,
      title: "After-Care & Irrigation",
      text: "We set smart watering schedules and give you a care plan so roots knit fast.",
    },
  ];

  // Swap in a turf-focused hero image if you have one in /public
  const heroImg = `${process.env.PUBLIC_URL}/turf-install-hero.jpg`;

  return (
    <section className="turfhome">
      <div className="turfhome__container">
        <div className="turfhome__content">
          {/* ─── Intro Column ───────────────────────────── */}
          <div className="turfhome__intro">
            <span className="turfhome__kicker">Premium Turf & Sod</span>
            <h1 className="turfhome__headline">Instant Green, Zero Hassle</h1>

            <p className="turfhome__description">
              From meticulous soil preparation to post-installation care, we transform bare ground into lush, walk-on-ready lawns in a single day—so you can enjoy perfect turf without the wait. Our certified technicians laser-grade and amend the soil so every blade sits in an ideal growing bed.
            </p>
            
            <p className="turfhome__description">
              We lay premium, climate-matched sod with seamless joins that vanish in days. Smart irrigation calibration locks in moisture and encourages deep rooting from day one. A personalized care plan and follow-up visit ensure your new lawn stays vibrant through every season. Best of all, our workmanship warranty lets you kick off your shoes and relax, knowing your fresh green carpet is built to last.
            </p>

           <Link to="/contact" className="turfhome__cta">
  Get a Quote
  <span className="cta-arrow">→</span>
</Link>
          </div>

          {/* ─── Feature Cards Column ──────────────────── */}
          <div className="turfhome__features">
            {features.map(({ icon, title, text }, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-icon-container">{icon}</div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-text">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Optional Hero Image (uncomment if needed) ─
        <div className="turfhome__hero">
          <img src={heroImg} alt="Freshly installed sod lawn" />
        </div> */}
      </div>
    </section>
  );
};

export default Turfhome;