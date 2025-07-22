import React from "react";
import { Link } from "react-router-dom";
import { FaTint, FaLeaf, FaMagic, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ThreeService.css";

const ThreeService = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <motion.section 
      className="three-service"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div 
        className="three-service__card"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardVariants}
      >
        <div className="three-service__header">
          <h2 className="three-service__title">
            Ready to Transform Your <span className="highlight">Lawn?</span>
          </h2>
          <div className="three-service__divider"></div>
          <p className="three-service__subtitle">
            Premium landscaping solutions tailored to your vision
          </p>
        </div>

        <p className="three-service__lead">
          Contact us today for a free consultation and estimate. Our friendly
          experts will assess your property, answer any questions, and design a
          maintenance plan tailored to your needs and budget.
        </p>

        <div className="three-service__options-container">
          <p className="three-service__label">
            You might also be interested in our premium services:
          </p>
          
          <div className="three-service__options">
            <motion.div 
              className="option-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/services/irrigation" className="option-btn">
                <div className="option-btn__icon-container">
                  <FaTint className="option-btn__icon" />
                </div>
                <span className="option-btn__text">Irrigation Services</span>
                <div className="option-btn__arrow">
                  <FaArrowRight />
                </div>
              </Link>
            </motion.div>

            <motion.div 
              className="option-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/services/sod-installation" className="option-btn">
                <div className="option-btn__icon-container">
                  <FaLeaf className="option-btn__icon" />
                </div>
                <span className="option-btn__text">Sod Installation</span>
                <div className="option-btn__arrow">
                  <FaArrowRight />
                </div>
              </Link>
            </motion.div>

            <motion.div 
              className="option-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/services/lawn-recovery-package" className="option-btn">
                <div className="option-btn__icon-container">
                  <FaMagic className="option-btn__icon" />
                </div>
                <span className="option-btn__text">Lawn Recovery</span>
                <div className="option-btn__arrow">
                  <FaArrowRight />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="three-service__cta-container">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/contact" className="cta-btn">
              <span className="cta-btn__text">GET YOUR FREE QUOTE</span>
              <div className="cta-btn__arrow-container">
                <svg className="cta-btn__arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </motion.div>
          <p className="three-service__guarantee">
            <svg className="guarantee-icon" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>100% Satisfaction Guarantee</span>
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ThreeService;