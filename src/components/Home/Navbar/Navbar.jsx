import React, { useState, useEffect, useRef } from "react";
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
  FaLeaf,
  FaTools,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiWateringCan, GiPlantWatering, GiArtificialHive } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  /* ─────────────  Handlers: resize, scroll, body‑lock, click‑outside  ───────────── */
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1025;
      setIsMobile(mobile);
      if (!mobile && menuOpen) setMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    if (!menuOpen) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  /* ─────────────  Toggle helpers  ───────────── */
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
    setActiveSubmenu(null);
  };
  const toggleSubmenu = (name) =>
    setActiveSubmenu((prev) => (prev === name ? null : name));

  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  /* ─────────────  Nav data  ───────────── */
  const aboutItems = [
    { name: "Who We Are", icon: <FaUser />, link: "/about/who-we-are" },
    { name: "Our Guarantees", icon: <FaMedal />, link: "/about/our-guarantees" },
  ];

  const serviceItems = [
    {
      name: "Maintenance",
      icon: <FaTree />,
      children: [
        {
          name: "Residential",
          icon: <FaHome />,
          link: "/services/residential-maintenance",
        },
        {
          name: "Commercial",
          icon: <FaBuilding />,
          link: "/services/commercial-maintenance",
        },
        { name: "HOA", icon: <FaHome />, link: "/services/hoa-maintenance" },
      ],
    },
    {
      name: "Turf Installation",
      icon: <GiArtificialHive />,
      link: "/services/turf-installation",
    },
    { name: "Irrigation", icon: <GiWateringCan />, link: "/services/irrigation" },
    {
      name: "Sod Installation",
      icon: <FaLeaf />,
      link: "/services/sod-installation",
    },
    {
      name: "Lawn Recovery Package",
      icon: <GiPlantWatering />,
      link: "/services/lawn-recovery-package",
    },
  ];

  /* ─────────────  JSX  ───────────── */
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container" ref={menuRef}>
        {/* Logo */}
        <motion.a
          href="/"
          className="navbar__logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleLinkClick}
        >
          <img
            src={`${process.env.PUBLIC_URL}/logoprime.avif`}
            alt="LushLandscapes"
          />
        </motion.a>

        {/* Desktop / mobile menu */}
        <div className={`navbar__menu${menuOpen ? " active" : ""}`}>
          <a href="/" className="navbar__link" onClick={handleLinkClick}>
            <motion.span whileHover={{ scale: 1.05 }}>Home</motion.span>
          </a>

          {/* About dropdown */}
          <div
            className="navbar__dropdown"
            onMouseEnter={
              !isMobile ? () => setActiveDropdown("about") : undefined
            }
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            <button
              className="navbar__link navbar__dropdown-toggle"
              onClick={() => isMobile && toggleDropdown("about")}
              aria-expanded={activeDropdown === "about"}
            >
              <span>About</span>
              {activeDropdown === "about" ? (
                <FaChevronDown className="dropdown-icon" />
              ) : (
                <FaChevronRight className="dropdown-icon" />
              )}
            </button>

            <AnimatePresence>
              {activeDropdown === "about" && (
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

          {/* Services dropdown */}
          <div
            className="navbar__dropdown"
            onMouseEnter={
              !isMobile ? () => setActiveDropdown("services") : undefined
            }
            onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
          >
            <button
              className="navbar__link navbar__dropdown-toggle"
              onClick={() => isMobile && toggleDropdown("services")}
              aria-expanded={activeDropdown === "services"}
            >
              <span>Services</span>
              {activeDropdown === "services" ? (
                <FaChevronDown className="dropdown-icon" />
              ) : (
                <FaChevronRight className="dropdown-icon" />
              )}
            </button>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  className="navbar__dropdown-menu"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 500 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {serviceItems.map((item) =>
                    item.children ? (
                      /* Sub‑menu parent */
                      <div
                        className="navbar__submenu-container"
                        key={item.name}
                        onMouseEnter={
                          !isMobile
                            ? () => setActiveSubmenu(item.name)
                            : undefined
                        }
                        onMouseLeave={
                          !isMobile ? () => setActiveSubmenu(null) : undefined
                        }
                      >
                        <button
                          className={`navbar__dropdown-item ${
                            activeSubmenu === item.name ? "active" : ""
                          }`}
                          onClick={() => isMobile && toggleSubmenu(item.name)}
                          aria-expanded={activeSubmenu === item.name}
                        >
                          <span className="dropdown-icon">{item.icon}</span>
                          {item.name}
                          <FaChevronRight
                            className={`submenu-icon ${
                              activeSubmenu === item.name ? "rotated" : ""
                            }`}
                          />
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
                                  <span className="dropdown-icon">
                                    {child.icon}
                                  </span>
                                  {child.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* Simple dropdown item */
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
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Standard links */}
          <a href="/contact" className="navbar__link" onClick={handleLinkClick}>
            <motion.span whileHover={{ scale: 1.05 }}>Contact</motion.span>
          </a>
          <a href="/blog" className="navbar__link" onClick={handleLinkClick}>
            <motion.span whileHover={{ scale: 1.05 }}>Blogs</motion.span>
          </a>

          {/* Mobile call‑to‑call button */}
          <div className="navbar__mobile-buttons">
            <motion.a
              href="tel:2062587535"
              className="btn btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLinkClick}
            >
              <FaPhoneAlt className="btn__icon--left" />
              Call Us Now
            </motion.a>
          </div>
        </div>

        {/* Desktop call‑to‑call button */}
        <div className="navbar__buttons">
          <motion.a
            href="tel:2062587535"
            className="btn btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhoneAlt className="btn__icon--left" />
            Call Us Now
            <FaChevronRight className="btn__icon" />
          </motion.a>
        </div>

        {/* Mobile hamburger / close */}
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
