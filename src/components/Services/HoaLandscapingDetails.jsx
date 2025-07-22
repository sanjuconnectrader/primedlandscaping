import React from 'react';
import './HoaLandscapingDetails.css';
import LawnPackageone from './LawnPackageone';

const services = [
  {
    title: 'Maintenance',
    text: `Sidewalk strips and shared green spaces are the first areas people see. 
           We keep them free of overgrowth, weeds and debris. Routine trimming and 
           clean-ups ensure a tidy, welcoming environment. Our certified team uses 
           sustainable practices to enhance curb appeal year-round.`,
  },
  {
    title: 'Mowing & Lawn Care',
    text: `Regular mowing is essential for maintaining a neat and uniform appearance throughout the community. 
           We ensure all grassy areas, including common spaces and parks, are mowed at the proper height to 
           promote healthy growth while implementing water-conservation techniques.`,
  },
  {
    title: 'Tree & Plant Trimming',
    text: `Proper trimming and pruning are crucial for maintaining the health and appearance of your landscape. 
           We shape and prune trees to prevent overgrowth and remove hazards, using eco-friendly methods that 
           promote long-term vitality and beauty.`,
  },
  {
    title: 'Park & Recreational Area Care',
    text: `Neighborhood parks and recreational spaces require consistent care to remain attractive and safe. 
           Our team provides comprehensive maintenance including mowing, edging, and seasonal color rotations 
           to create vibrant community gathering spaces.`,
  },
  {
    title: 'Flower Bed & Mulch',
    text: `Seasonal planting, weeding and mulch refreshes retain moisture and keep plants healthy. 
           We elevate HOA curb appeal year-round with tailored floral designs that complement your 
           community's aesthetic while supporting local ecosystems.`,
  },
  {
    title: 'Litter & Trash Pickup',
    text: `Regular pickup along paths, trails and shared spaces removes litter and debris—keeping the 
           community spotless. Our systematic approach ensures pristine common areas that residents 
           can take pride in every day.`,
  },
];

export default function HoaLandscapingDetails() {
  return (
    <section className="hoa-landscaping">
      <div className="hoa-container">
        <header className="hoa-header">
          <h1 className="hoa-title">HOA Landscaping&nbsp;Maintenance&nbsp;Services</h1>
          <p className="hoa-subtitle">
            Primed Landscaping delivers complete, professional care for neighborhoods,
            parks and common areas—keeping them clean, safe and visually stunning
            for every resident.
          </p>
        </header>

        <div className="hoa-grid">
          {services.map(({ title, text }) => (
            <article key={title} className="hoa-card">
              <div className="hoa-card__content">
                <h2 className="hoa-card__title">{title}</h2>
                <p className="hoa-card__text">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <LawnPackageone/>
    </section>
  );
}