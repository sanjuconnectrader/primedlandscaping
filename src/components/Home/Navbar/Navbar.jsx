import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaUser,
  FaCalendarAlt,
  FaMedal,
  FaHome,
  FaTree,
  FaLayerGroup,
  FaBuilding,
  FaLeaf
} from 'react-icons/fa';
import { GiWateringCan, GiPlantWatering, GiArtificialHive } from 'react-icons/gi';

import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const aboutItems = [
    { name: 'Who We Are', icon: <FaUser /> },
    { name: 'Our Guarantees', icon: <FaMedal /> },
   
  ];
  
const serviceItems = [
  { name: 'HOA Landscaping', icon: <FaHome /> },
  { name: 'Residential Landscaping', icon: <FaTree /> },
  { name: 'Hardscaping', icon: <FaLayerGroup /> },
  { name: 'Commercial Landscaping', icon: <FaBuilding /> },
  { name: 'Thatching & Aeration', icon: <FaLeaf /> },
  { name: 'Pressure Washing', icon: <GiPlantWatering /> },     // Better visual cue for spraying
  { name: 'Irrigation', icon: <GiWateringCan /> },             // More relevant than FaTint
  { name: 'Turf Installation', icon: <GiArtificialHive /> }    // Represents surface/grid (you can change this to another if needed)
];


  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <motion.a 
          href="/" 
          className="navbar__logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="https://static.wixstatic.com/media/645dca_5356eeb0ba99421698ffeee20790ace1~mv2.png/v1/fill/w_240,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20And%20White%20Aesthetic%20Minimalist%20Modern%20Simple%20Typography%20Coconut%20Cosmetics%20Logo_edite.png" alt="LushLandscapes" />
        </motion.a>

        <div className={`navbar__menu${menuOpen ? ' active' : ''}`}>
          <a href="/" className="navbar__link">
            <motion.span whileHover={{ scale: 1.05 }}>Home</motion.span>
          </a>
     
          <div 
            className="navbar__dropdown"
            onMouseEnter={() => !menuOpen && setActiveDropdown('about')}
            onMouseLeave={() => !menuOpen && setActiveDropdown(null)}
          >
            <button 
              className="navbar__link navbar__dropdown-toggle"
              onClick={() => toggleDropdown('about')}
            >
              <span>About</span>
              {menuOpen ? 
                (activeDropdown === 'about' ? <FaChevronDown /> : <FaChevronRight />) : 
                <FaChevronDown className="dropdown-icon" />
              }
            </button>
            <AnimatePresence>
              {activeDropdown === 'about' && (
                <motion.div 
                  className="navbar__dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {aboutItems.map((item) => (
                    <a 
                      key={item.name} 
                      href={`/about/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="navbar__dropdown-item"
                    >
                      <span className="dropdown-icon">{item.icon}</span>
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div 
            className="navbar__dropdown"
            onMouseEnter={() => !menuOpen && setActiveDropdown('services')}
            onMouseLeave={() => !menuOpen && setActiveDropdown(null)}
          >
            <button 
              className="navbar__link navbar__dropdown-toggle"
              onClick={() => toggleDropdown('services')}
            >
              <span>Services</span>
              {menuOpen ? 
                (activeDropdown === 'services' ? <FaChevronDown /> : <FaChevronRight />) : 
                <FaChevronDown className="dropdown-icon" />
              }
            </button>
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div 
                  className="navbar__dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {serviceItems.map((item) => (
                    <a 
                      key={item.name} 
                      href={`/services/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="navbar__dropdown-item"
                    >
                      <span className="dropdown-icon">{item.icon}</span>
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        
          <a href="/contact" className="navbar__link">
            <motion.span whileHover={{ scale: 1.05 }}>Contact</motion.span>
          </a>

            <a href="/blog" className="navbar__link">
            <motion.span whileHover={{ scale: 1.05 }}>Blogs</motion.span>
          </a>

          {/* Mobile buttons - only visible on mobile */}
          <div className="navbar__mobile-buttons">
            <motion.button 
              className="btn btn--outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser className="btn__icon--left" />
              Client Login
            </motion.button>
            <motion.button 
              className="btn btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt className="btn__icon--left" />
              Book Consultation
            </motion.button>
          </div>
        </div>

        {/* Desktop buttons - hidden on mobile */}
        <div className="navbar__buttons">
          <motion.button 
            className="btn btn--outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUser className="btn__icon--left" />
            Client Login
          </motion.button>
          <motion.button 
            className="btn btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCalendarAlt className="btn__icon--left" />
            Book Consultation
            <FaChevronRight className="btn__icon" />
          </motion.button>
        </div>

        <motion.button 
          className="navbar__toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <FaBars />
          )}
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;