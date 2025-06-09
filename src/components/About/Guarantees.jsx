import React from 'react';
import './Guarantees.css';

const guarantees = [
  `Our first guarantee is your complete satisfaction with the project. We believe in clear communication and ensuring that all expectations are thoroughly outlined in any agreement between us and our clients. Once we have mutually established the specific criteria for a project, our commitment is to consistently deliver the highest quality of work. You can trust that we will go above and beyond to meet, and in many cases exceed, the standards set forth in the agreement. Your satisfaction is not just a priority—it's a promise we take seriously, ensuring that every detail is fulfilled to the best of our ability.`,
  `Our second guarantee is providing you with the most competitive pricing in the market. We achieve this by actively staying informed about industry trends and carefully monitoring the pricing strategies of our competitors. Additionally, we keep a close eye on the cost of materials, allowing us to adjust our rates to offer the best value without compromising on the quality of our work. This diligence ensures that you receive top-tier service at a price point that is both fair and competitive, reinforcing our commitment to delivering exceptional service while respecting your budget.`,
  `Lastly, our third guarantee is the promise of unwavering reliability. When we commit to a project and agree on a specific start date, you can count on us to honor that commitment with the utmost professionalism. We understand the importance of time management and the need to meet deadlines, which is why we take our scheduling very seriously. In the rare event that unforeseen circumstances arise, we guarantee prompt and transparent communication, ensuring you are always informed of any potential delays. Our goal is to provide a seamless and dependable experience, so you can trust that your project will be completed on time, with minimal disruption and complete accountability.`
];

const Guarantees = () => (
  <section className="Guarantees">
    <div className="Guarantees__container">
      <div className="Guarantees__header">
        <h2 className="Guarantees__title">Our 3 Guarantees</h2>
        <p className="Guarantees__tagline">
          We make sure that every detail of each project, big or small is always pushed to the point of perfection.  
          So here are our 3 guarantees we make to you,
        </p>
      </div>

      <div className="Guarantees__items">
        {guarantees.map((text, idx) => (
          <div className="Guarantee" key={idx}>
            <div className="Guarantee__number">0{idx + 1}</div>
            <div className="Guarantee__content">
              <p className="Guarantee__text">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Guarantees;