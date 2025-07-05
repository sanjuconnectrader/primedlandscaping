import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Client.css';

const testimonials = [
  {
    name: 'Carter Boynton',
    headline: 'These people are just perfect!',
    quote: "Loving them more and more every week: they do a better job every time. It's always stunning, but they find little things to improve on each visit. Couldn't be more satisfied—call them NOW!",
    rating: 5,
    date: 'May 15, 2023',
    location: 'Boston, MA',
    project: 'Residential Garden Design'
  },
  {
    name: 'Jim Clayton',
    headline: 'THE BEST LANDSCAPERS EVER!',
    quote: "Absolute perfection is the only way to describe Primed Landscaping. Could not have gotten a better job done, and I would have paid double what they charged! You won't regret choosing them!",
    rating: 5,
    date: 'April 2, 2023',
    location: 'New York, NY',
    project: 'Commercial Property Landscape'
  },
  {
    name: 'Kathy Johnson',
    headline: 'These guys are Fantastic!',
    quote: "Hired Primed Landscaping twice. Both experiences exceeded expectations. Professional, communicative, and affordable—the results are stunning. I'll definitely hire them again.",
    rating: 4,
    date: 'March 28, 2023',
    location: 'Hartford, CT',
    project: 'Backyard Oasis Installation'
  },
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`star ${i < rating ? 'filled' : ''}`}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="currentColor"
        />
      </svg>
    ))}
  </div>
);

function TestimonialCard({ name, headline, quote, rating, date, location, project, index }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <article 
      ref={ref}
      className={`testi-card ${inView ? 'animate-in' : ''}`}
      style={{ '--delay': `${index * 100}ms` }}
    >
      <div className="testi-card__decorative-accent"></div>
      <div className="testi-card__inner">
        <div className="testi-card__header">
          <div className="testi-card__avatar">
            {getInitials(name)}
          </div>
          <div className="testi-card__meta">
            <div>
              <h4 className="testi-card__name">{name}</h4>
              <p className="testi-card__location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
                {location}
              </p>
            </div>
            <div className="testi-card__rating">
              <StarRating rating={rating} />
              <span className="testi-card__date">{date}</span>
            </div>
          </div>
        </div>
        
        <div className="testi-card__project-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" fill="currentColor"/>
          </svg>
          {project}
        </div>
        
        <div className="testi-card__content">
          <h3 className="testi-card__headline">{headline}</h3>
          <div className="testi-card__quote-container">
            <svg 
              className="testi-card__quote-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 17H11C11.55 17 12 16.55 12 16V12C12 11.45 11.55 11 11 11H8V12C8 13.1 8.9 14 10 14C10.55 14 11 14.45 11 15C11 15.55 10.55 16 10 16C7.79 16 6 14.21 6 12V8C6 5.79 7.79 4 10 4H14C14.55 4 15 4.45 15 5V9C15 9.55 14.55 10 14 10H12V9C12 7.9 11.1 7 10 7C9.45 7 9 6.55 9 6C9 5.45 9.45 5 10 5C12.21 5 14 6.79 14 9V13C14 15.21 12.21 17 10 17H7C6.45 17 6 16.55 6 16C6 15.45 6.45 15 7 15Z" fill="currentColor"/>
            </svg>
            <p className="testi-card__quote">"{quote}"</p>
          </div>
        </div>
        
        <div className="testi-card__footer">
          <div className="testi-card__verified">
            <svg className="testi-card__logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" fill="currentColor"/>
            </svg>
            <span>Verified Customer</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ClientTestimonials() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials__bg-pattern" aria-hidden="true"></div>
      <div className="testimonials__bg-overlay" aria-hidden="true"></div>
      
      <div className="container">
        <div className="testimonials__header">
          <div className="section-header">
            <p className="section-subtitle">Client Experiences</p>
            <h2 className={`section-title ${inView ? 'animate-in' : ''}`}>
              Voices of <span>Satisfaction</span>
            </h2>
            <p className="section-description">
              Discover why homeowners and businesses trust Primed Landscaping for their outdoor transformations.
            </p>
          </div>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, index) => (
            <TestimonialCard 
              key={`${t.name}-${index}`} 
              {...t} 
              index={index}
            />
          ))}
        </div>
        
        <div className={`testimonials__cta ${inView ? 'animate-in' : ''}`}>
         
        </div>
      </div>
    </section>
  );
}