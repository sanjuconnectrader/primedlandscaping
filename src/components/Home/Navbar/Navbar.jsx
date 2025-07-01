import React, { useState, useEffect, useRef } from 'react';
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
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1025;
      setIsMobile(mobile);
      // Close menu when switching from mobile to desktop
      if (!mobile && menuOpen) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    
    // Close dropdowns when menu closes
    if (!menuOpen) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    } else {
      setActiveDropdown(dropdown);
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (submenu) => {
    if (activeSubmenu === submenu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(submenu);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const aboutItems = [
    { name: 'Who We Are', icon: <FaUser />, link: '/about/who-we-are' },
    { name: 'Our Guarantees', icon: <FaMedal />, link: '/about/our-guarantees' },
  ];

  const serviceItems = [
    {
      name: 'Landscaping',
      icon: <FaTree />,
      children: [
        { name: 'HOA Landscaping', icon: <FaHome />, link: '/services/hoa-landscaping' },
        { name: 'Residential Landscaping', icon: <FaTree />, link: '/services/residential-landscaping' },
        { name: 'Commercial Landscaping', icon: <FaBuilding />, link: '/services/commercial-landscaping' }
      ]
    },
    { name: 'Hardscaping', icon: <FaLayerGroup />, link: '/services/hardscaping' },
    { name: 'Thatching & Aeration', icon: <FaLeaf />, link: '/services/thatching-aeration' },
    { name: 'Pressure Washing', icon: <GiPlantWatering />, link: '/services/pressure-washing' },
    { name: 'Irrigation', icon: <GiWateringCan />, link: '/services/irrigation' },
    { name: 'Turf Installation', icon: <GiArtificialHive />, link: '/services/turf-installation' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container" ref={menuRef}>
        <motion.a
          href="/"
          className="navbar__logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleLinkClick}
        >
          <img src="https://static.wixstatic.com/media/645dca_5356eeb0ba99421698ffeee20790ace1~mv2.png/v1/fill/w_240,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20And%20White%20Aesthetic%20Minimalist%20Modern%20Simple%20Typography%20Coconut%20Cosmetics%20Logo_edite.png" alt="LushLandscapes" />
        </motion.a>

        <div className={`navbar__menu${menuOpen ? ' active' : ''}`}>
          <a href="/" className="navbar__link" onClick={handleLinkClick}>
            <motion.span whileHover={{ scale: 1.05 }}>Home</motion.span>
          </a>

          <div className="navbar__dropdown">
            <button
              className="navbar__link navbar__dropdown-toggle"
              onClick={() => toggleDropdown('about')}
              aria-expanded={activeDropdown === 'about'}
            >
              <span>About</span>
              {activeDropdown === 'about' ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
            </button>
            <AnimatePresence>
              {activeDropdown === 'about' && (
                <motion.div
                  className="navbar__dropdown-menu"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 500 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {aboutItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="navbar__dropdown-item"
                      onClick={handleLinkClick}
                    >
                      <span className="dropdown-icon">{item.icon}</span>
                      {item.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="navbar__dropdown">
            <button
              className="navbar__link navbar__dropdown-toggle"
              onClick={() => toggleDropdown('services')}
              aria-expanded={activeDropdown === 'services'}
            >
              <span>Services</span>
              {activeDropdown === 'services' ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
            </button>
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  className="navbar__dropdown-menu"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 500 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {serviceItems.map((item) => (
                    item.children ? (
                      <div className="navbar__submenu-container" key={item.name}>
                        <button
                          className={`navbar__dropdown-item ${activeSubmenu === item.name ? 'active' : ''}`}
                          onClick={() => toggleSubmenu(item.name)}
                          aria-expanded={activeSubmenu === item.name}
                        >
                          <span className="dropdown-icon">{item.icon}</span>
                          {item.name}
                          <FaChevronRight className={`submenu-icon ${activeSubmenu === item.name ? 'rotated' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {activeSubmenu === item.name && (
                            <motion.div
                              className="navbar__submenu"
                              initial={{ opacity: 0, maxHeight: 0 }}
                              animate={{ opacity: 1, maxHeight: 500 }}
                              exit={{ opacity: 0, maxHeight: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.link}
                                  className="navbar__dropdown-item submenu-item"
                                  onClick={handleLinkClick}
                                >
                                  <span className="dropdown-icon">{child.icon}</span>
                                  {child.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.link}
                        className="navbar__dropdown-item"
                        onClick={handleLinkClick}
                      >
                        <span className="dropdown-icon">{item.icon}</span>
                        {item.name}
                      </a>
                    )
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/contact" className="navbar__link" onClick={handleLinkClick}>
            <motion.span whileHover={{ scale: 1.05 }}>Contact</motion.span>
          </a>

          <a href="/blog" className="navbar__link" onClick={handleLinkClick}>
            <motion.span whileHover={{ scale: 1.05 }}>Blogs</motion.span>
          </a>

          <div className="navbar__mobile-buttons">
            <motion.button
              className="btn btn--outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLinkClick}
            >
              <FaUser className="btn__icon--left" />
              Client Login
            </motion.button>
            <motion.button
              className="btn btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLinkClick}
            >
              <FaCalendarAlt className="btn__icon--left" />
              Book Consultation
            </motion.button>
          </div>
        </div>

        <div className="navbar__buttons">
          <motion.button
            className="btn btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCalendarAlt className="btn__icon--left" />
            Call-Us Now
            <FaChevronRight className="btn__icon" />
          </motion.button>
        </div>

        <motion.button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
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