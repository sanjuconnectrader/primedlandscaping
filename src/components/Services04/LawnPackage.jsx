import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './LawnPackage.css';
import { Link } from 'react-router-dom';

const LawnPackage = () => {
  return (
    <div className="Lawn-package-section">
      <h2 className="Lawn-package-title">	Restore Your Commercial Grounds to Peak Condition</h2>

      <p className="Lawn-package-subtitle">
        If your commercial landscaping is not properly maintained, our <strong>Lawn Recovery Package</strong> can restore your property to its optimal condition. We specialize in revitalizing neglected landscapes with professional care and expertise, bringing them back to health and beauty.
      </p>

      <Link to="/services/lawn-recovery-package" className="Lawn-package-button">
      {/* <FaPhoneAlt className="LawnPackageone-icon" /> */}
      Check Packages
    </Link>
    </div>
  );
};

export default LawnPackage;
