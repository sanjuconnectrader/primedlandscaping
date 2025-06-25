import React from "react";
import "./Choose.css";
import { FaHandsHelping, FaRegThumbsUp, FaLeaf, FaAward } from "react-icons/fa";

const FEATURE_ITEMS = [
  {
    id: 1,
    icon: <FaHandsHelping className="feature__icon-svg" />,
    title: "Reliable & Professional",
    subtitle: "We value time and trust",
  },
  {
    id: 2,
    icon: <FaRegThumbsUp className="feature__icon-svg" />,
    title: "100% Satisfaction",
    subtitle: "We stand behind our work",
  },

];

export default function Choose() {
  return (
    <section className="choose" id="choose-us">
      <div className="choose__inner container">
        {/* Left Content */}
        <div className="choose__content">
          <small className="choose__eyebrow">Why Choose Us</small>

          <h2 className="choose__title">
            The trusted partner for your{" "}
            <span className="highlight">
              greener and <br className="line-break" /> healthier lawn
            </span>
          </h2>

          <p className="choose__text">
            From routine maintenance to specialized treatment, our team is
            dedicated to delivering exceptional results with reliability and
            care. We use only premium products and cutting-edge techniques.
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
            Get started <span className="btn-arrow">→</span>
          </button>
        </div>

        {/* Right Image */}
        <figure className="choose__image-wrapper">
          <div className="choose__image-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Healthy green lawn"
            className="choose__image"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}