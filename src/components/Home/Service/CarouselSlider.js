import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './CarouselSlider.css';

const CarouselSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Calculate items to show based on container width
  const calculateItemsToShow = () => {
    if (!carouselRef.current) return 1;
    const containerWidth = carouselRef.current.offsetWidth;
    
    if (containerWidth >= 1024) return 3;
    if (containerWidth >= 768) return 2;
    return 1;
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsToShow = calculateItemsToShow();
      setItemsToShow(newItemsToShow);
      // Adjust currentIndex to prevent empty space
      setCurrentIndex(prev => Math.min(prev, Math.max(0, items.length - newItemsToShow)));
    };

    // Initial calculation
    handleResize();
    
    // Add debounced resize listener
    const debouncedResize = debounce(handleResize, 250);
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearInterval(intervalRef.current);
    };
  }, [items.length]);

  // Auto-play functionality
  useEffect(() => {
    if (items.length > itemsToShow) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, itemsToShow, items.length]);

  // Simple debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      if (prev >= items.length - itemsToShow) return 0;
      return prev + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) return items.length - itemsToShow;
      return prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    clearInterval(intervalRef.current);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) goToNext();
    if (touchStart - touchEnd < -50) goToPrev();
  };

  // Calculate slide width dynamically
  const slideWidth = itemsToShow > 0 ? `${100 / itemsToShow}%` : '100%';

  return (
    <div className="carousel-container" ref={carouselRef}>
      {items.length > itemsToShow && (
        <>
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={goToNext}
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </>
      )}
      
      <div 
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          width: `${(items.length / itemsToShow) * 100}%`
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div 
            key={`${item.title}-${index}`} 
            className="carousel-slide"
            style={{ width: slideWidth }}
          >
            <div className="carousel-slide-content">
              <img 
                src={item.img} 
                alt={item.title} 
                className="carousel-image" 
                loading="lazy"
              />
              <div className="carousel-overlay">
                <h3 className="carousel-title">{item.title}</h3>
                <p className="carousel-description">{item.description}</p>
                <button className="carousel-button">
                  <span>Learn more</span>
                  <FaArrowRight className="carousel-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {items.length > itemsToShow && (
        <div className="carousel-dots">
          {Array.from({ length: items.length - itemsToShow + 1 }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselSlider;