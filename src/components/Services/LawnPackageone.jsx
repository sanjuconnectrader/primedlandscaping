import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';   // (Icon kept for future use)
import './LawnPackageone.css';
import { Link } from 'react-router-dom';

const LawnPackageone = () => {
  return (
    <div className="LawnPackageone-section">
      <h2 className="LawnPackageone-title">Ready to Transform HoaLandscaping?</h2>

      <p className="LawnPackageone-subtitle">
        If your HOA landscaping is not properly maintained, our <strong>Lawn Recovery Package</strong> can restore your property to its optimal condition. We specialize in revitalizing neglected landscapes with professional care and expertise, bringing them back to health and beauty.
      </p>

   <Link to="/services/lawn-recovery-package" className="LawnPackageone-button">
  {/* <FaPhoneAlt className="LawnPackageone-icon" /> */}
  Check Packages
</Link>
    </div>
  );
};

export default LawnPackageone;
