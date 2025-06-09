import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Client.css';

const testimonials = [
  {
    name: 'Carter Boynton',
    headline: 'These people are just perfect!',
    quote: "Loving them more and more every week: they do a better job every time. It's always stunning, but they find little things to improve on each visit. Couldn't be more satisfied—call them NOW!",
    rating:""
  },
  {
    name: 'Jim Clayton',
    headline: 'THE BEST LANDSCAPERS EVER!',
    quote: "Absolute perfection is the only way to describe Primed Landscaping. Could not have gotten a better job done, and I would have paid double what they charged! You won't regret choosing them!",
    rating: ""
  },
  {
    name: 'Kathy Johnson',
    headline: 'These guys are Fantastic!',
    quote: "Hired Primed Landscaping twice. Both experiences exceeded expectations. Professional, communicative, and affordable—the results are stunning. I'll definitely hire them again.",
    rating: ""
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

function TestimonialCard({ name, headline, quote, rating }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <article 
      ref={ref}
      className={`testi-card ${inView ? 'animate-in' : ''}`}
    >
      <div className="testi-card__decorative-border"></div>
      
      <div className="testi-card__header">
        <div className="testi-card__avatar">
          {getInitials(name)}
        </div>
        <div className="testi-card__meta">
          <h4 className="testi-card__name">{name}</h4>
          <p className="testi-card__headline">{headline}</p>
          <StarRating rating={rating} />
        </div>
      </div>
      
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
    </article>
  );
}

export default function Client() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials__bg-pattern"></div>
      <div className="testimonials__container">
        <div className="section-header">
          <h2 className={`section-title ${inView ? 'animate-in' : ''}`}>
            Client Testimonials
          </h2>
          <p className={`section-subtitle ${inView ? 'animate-in' : ''}`}>
            Hear what our clients say about our work
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, index) => (
            <TestimonialCard 
              key={t.name} 
              {...t} 
              style={{ transitionDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}