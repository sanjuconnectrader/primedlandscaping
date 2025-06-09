import React, { useEffect, useState, useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Header.css';

const slides = [
  {
    image:
      'https://static.wixstatic.com/media/645dca_5dc71debc7504246868f359ba792e637~mv2.jpeg/v1/fill/w_1901,h_575,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/645dca_5dc71debc7504246868f359ba792e637~mv2.jpeg',
    title: 'Commercial Landscaping Maintenance',
    subtitle: 'Professional care for your commercial properties',
    cta: 'Explore Services'
  },
  {
    image:
      'https://static.wixstatic.com/media/645dca_fc5bb54598194e7dbccba0fc27041c3a~mv2.jpg/v1/fill/w_1452,h_439,al_c,q_85,enc_avif,quality_auto/645dca_fc5bb54598194e7dbccba0fc27041c3a~mv2.jpg',
    title: 'Seasonal Landscape Services',
    subtitle: 'Year‑round solutions tailored to your needs',
    cta: 'Discover Options'
  },
  {
    image:
      'https://static.wixstatic.com/media/645dca_e45988a357c94965aab2be64c998052c~mv2.jpg/v1/fill/w_1901,h_575,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/645dca_e45988a357c94965aab2be64c998052c~mv2.jpg',
    title: 'Sustainable Land Management',
    subtitle: 'Eco‑friendly solutions for modern businesses',
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