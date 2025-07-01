import React from "react";
import "./Choose.css";
import {
  FaHandsHelping,
  FaRegThumbsUp,
  FaLeaf,
  FaAward
} from "react-icons/fa";

/* ------------------------------------------------------------------
 *  Key selling points for the landscaping business
 * -----------------------------------------------------------------*/
const FEATURE_ITEMS = [
 
  {
    id: 2,
    icon: <FaRegThumbsUp className="feature__icon-svg" />,
    title: "Customer-First Approach",
    subtitle: "100 % satisfaction or we’ll make it right"
  },
 
  {
    id: 4,
    icon: <FaAward className="feature__icon-svg" />,
    title: "Quality Guaranteed",
    subtitle: "Licensed, insured, and award-winning service"
  }
];

export default function Choose() {
  /* If your hero image lives in /public, this is the easiest way to reference it */
  const imageUrl = `${process.env.PUBLIC_URL}/choose.avif`;

  return (
    <section className="choose" id="choose-us">
      <div className="choose__inner container">
        {/* -------- Left side: text & features -------- */}
        <div className="choose__content">
          <small className="choose__eyebrow">Why Choose Us</small>

            <h2 className="choose__title">
            The trusted partner for your{" "}
            <span className="highlight">
             stunning and <br className="line-break" /> outdoor spaces
            </span>
          </h2>


          <p className="choose__text">
            From concept to completion—whether it’s a serene backyard retreat
            or a commercial grounds overhaul—our dedicated craftsmen blend
            artistry with horticultural science to deliver landscapes that are
            both beautiful and built to last.
          </p>

          <div className="choose__features">
            {FEATURE_ITEMS.map(({ id, icon, title, subtitle }) => (
              <article className="feature" key={id}>
                <div className="feature__icon-wrapper">{icon}</div>
                <h3 className="feature__title">{title}</h3>
                <p className="feature__subtitle">{subtitle}</p>
              </article>
            ))}
          </div>

          <button className="choose__btn">
            Get a free quote <span className="btn-arrow">→</span>
          </button>
        </div>

        {/* -------- Right side: hero image -------- */}
        <figure className="choose__image-wrapper">
          <div className="choose__image-overlay"></div>
          <img
            src={imageUrl}
            alt="Beautifully landscaped garden with vibrant plants and stone pathway"
            className="choose__image"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
