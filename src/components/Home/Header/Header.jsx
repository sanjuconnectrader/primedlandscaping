import React, { useEffect, useState, useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Header.css';

const slides = [
  {
    image: `${process.env.PUBLIC_URL}/Resedentialland.avif`,
    title: 'Residential Landscaping Maintenance',
    subtitle: 'Beautiful yards tailored for every home',
    cta: 'Explore Services'
  },
  {
    image: `${process.env.PUBLIC_URL}/commercialland.avif`,
    title: 'Professional Pressure Washing',
    subtitle: 'Restore the clean look of your property',
    cta: 'Discover Options'
  },
  {
    image: `${process.env.PUBLIC_URL}/pressurewashing.avif`,
    title: 'Sustainable Land Management',
    subtitle: 'Eco‑friendly solutions for modern landscapes',
    cta: 'Learn More'
  },
];

const ANIMATION_DURATION = 800;

export default function Header() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleTransition((current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [current, isHovered]);

  const handleTransition = useCallback((next) => {
    if (isAnimating || next === current) return;

    setPrev(current);
    setCurrent(next);
    setIsAnimating(true);

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, ANIMATION_DURATION);

    return () => clearTimeout(timer);
  }, [current, isAnimating]);

  const handleIndicatorClick = (index) => {
    handleTransition(index);
  };

  return (
    <header
      className="header"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background slides */}
      <div
        className={`header__slide ${isAnimating ? 'fade-out' : ''}`}
        style={{ backgroundImage: `url(${slides[prev].image})` }}
        aria-hidden="true"
      />
      <div
        className={`header__slide ${isAnimating ? 'fade-in' : 'visible'}`}
        style={{ backgroundImage: `url(${slides[current].image})` }}
      />

      {/* Content overlay */}
      <div className="header__overlay">
        <div className="header__content">
          <div className={`header__text ${isAnimating ? 'slide-up' : 'slide-down'}`}>
            <h6 className="header__subtitle">{slides[current].subtitle}</h6>
            <h1 className="header__title">{slides[current].title}</h1>
          </div>

          <button className="btn header__btn">
            {slides[current].cta} <FaArrowRight className="btn__icon" />
          </button>
        </div>

        {/* Indicators */}
        <div className="header__indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`indicator${index === current ? ' active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
