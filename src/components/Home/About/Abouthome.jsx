import React from "react";
import { Link } from "react-router-dom";      // ⬅ add for SPA navigation
import "./Abouthome.css";

export default function Abouthome() {
  const imageUrl = `${process.env.PUBLIC_URL}/map.jpg`;

  return (
    <section className="about">
      <div className="about__wrapper">
        {/* ── Text content ───────────────────────────── */}
        <div className="about__content">
          <div className="about__header">
            <span className="about__subtitle">Our Philosophy</span>
            <h2 className="about__title">
              Finding The Landscaper That Works Best For You
            </h2>
          </div>

          <div className="about__text-content">
            <p className="about__text">
              There are many reasonably priced landscaping companies in our area
              that offer similar services, and they do them well. However, what
              truly sets <strong>Prime Landscaping</strong> apart is our
              commitment to excellence.
            </p>
            <p className="about__text">
              While others may do a good job, we strive to do a great job. At
              Primed Landscaping, we treat your property as if it were our own,
              paying meticulous attention to every detail. We go above and beyond
              to ensure that every project, from lawn care to hardscaping, meets
              the highest standards.
            </p>
            <p className="about__text">
              We proudly serve Maple Valley and surrounding areas.
            </p>
          </div>

          {/* ── CTA buttons ──────────────────────────── */}
          <div className="about__cta">
            {/* “More About Us” → /about/who-we-are */}
            <Link to="/about/who-we-are" className="about__button">
              <span>More About Us</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* “Contact Us” → /contact */}
            <Link
              to="/contact"
              className="about__button about__button--secondary"
            >
              <span>Contact Us</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Image content ─────────────────────────── */}
        <div className="about__image-wrapper">
          <div className="about__image-container">
            <img
              src={imageUrl}
              alt="Landscaping work with green background"
              className="about__image"
              loading="lazy"
            />
          </div>
          <div className="about__image-overlay" />
          <div className="about__image-badge">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8V12L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Since 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}
