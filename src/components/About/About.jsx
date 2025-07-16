import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image">
          <div className="about__image-wrapper">
            <img
              src="https://static.wixstatic.com/media/645dca_8d1d0200fc1b485c9e653101bfde08ca~mv2.jpg/v1/fill/w_449,h_631,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/645dca_8d1d0200fc1b485c9e653101bfde08ca~mv2.jpg"
              alt="Josh Boynton and Joaquin Sheckler"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about__content">
          <span className="about__subtitle">Our Story</span>
          <h2 className="about__title">Building Dreams Through Landscaping</h2>
          <div className="about__text-group">
            <p className="about__text">
              Hey there, I'm <strong>Josh Boynton</strong> (R), Owner and Founder of Primed
              Landscaping. When I started this company, I built it from the ground
              up with only a few years of amateur experience, scaling it alongside
              my partner, <strong>Joaquin Sheckler</strong> (L).
            </p>
            <p className="about__text">
              Being a young entrepreneur comes with many challenges and sacrifices
              necessary for success. My high school experience was far from
              typical, as I completed my classes remotely to focus on my business
              goals. It wasn't an easy decision, but without it, I wouldn't be
              where I am today, and for that, I'm truly grateful.
            </p>
            <p className="about__text">
              My aim is to create a more affordable home service market for people
              who can't pay for professional services or handle the tasks
              themselves.
            </p>
          </div>
          <Link to="/#services" className="about__ctaa">
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
