import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onHeightChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const location = useLocation();
  const headerRef = useRef(null);

  // Calculate and expose navbar height
  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setNavbarHeight(height);
      onHeightChange && onHeightChange(height);
    }
  }, [isMenuOpen, onHeightChange]);

  // Close dropdowns when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [location]);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: "#",
      dropdown: [
        {
          name: "Social Media Marketing",
          link: "/smm",
          subItems: [
            { name: "Facebook Marketing", link: "/fb" },
            { name: "Instagram Marketing", link: "/insta" },
            { name: "LinkedIn Marketing", link: "/linkedin" },
            { name: "Twitter Marketing", link: "/twitter" },
            {
              name: "Social Media Management",
              link: "/social-media-management",
            },
            { name: "Influencer Marketing", link: "/influencer-marketing" },
          ],
        },
        {
          name: "Search Engine Optimization",
          link: "/seo",
          subItems: [
            { name: "On-Page SEO", link: "/onpage" },
            { name: "Off-Page SEO", link: "/offpage" },
            { name: "Technical SEO", link: "/technical" },
            { name: "SEO Audits", link: "/seo-audits" },
          ],
        },
        {
          name: "PPC Advertising",
          link: "/ppc",
          subItems: [
            { name: "Google Ads", link: "/google-ads" },
            { name: "Meta Ads (Facebook/Instagram)", link: "/meta-ads" },

            { name: "Display Advertising", link: "/display" },
          ],
        },
        {
          name: "Content Marketing",
          link: "/content",
          subItems: [
            { name: "Blog Writing", link: "/blog-writing" },
            { name: "Video Content", link: "/video-content" },
            { name: "Infographics", link: "/infographics" },
            { name: "Content Strategy", link: "/content-strategy" },
          ],
        },
        {
          name: "Analytics & Reporting",
          link: "/analytics",
          subItems: [
            { name: "Google Analytics", link: "/google-analytics" },
            { name: "Conversion Tracking", link: "/conversion-tracking" },

            { name: "ROI Analysis", link: "/roi-analysis" },
          ],
        },
        {
          name: "Branding Services",
          link: "/branding",
         
      
        },
        {
          name: "Web Design & Development",
          link: "/web-development",
         
        },
        {
          name: "Email Marketing",
          link: "/email",
        },
      ],
    },
    { name: "About Us", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
  ];

  // Desktop hover handlers
  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
    setActiveSubDropdown(null);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  // Mobile click handlers
  const handleDropdownClick = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(index);
      setActiveSubDropdown(null);
    }
  };

  const handleSubDropdownClick = (index) => {
    if (activeSubDropdown === index) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(index);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/90"
        }`}
      >
        {/* Top bar with contact info */}
        <div className="bg-emerald-600 text-white hidden md:block">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-sm" />
                <span className="text-sm">0612-4150537</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-sm" />
                <span className="text-sm">info@adonomicstechnologies.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Follow Us:</span>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61571546997552"
                  className="hover:text-emerald-300 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com/itsAdonomics"
                  className="hover:text-emerald-300 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/itsadonomics/"
                  className="hover:text-emerald-300 transition"
                >
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-emerald-300 transition">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="Logo.png" alt="Logo" className="h-10 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center">
                      {item.dropdown ? (
                        <button
                          onClick={() => handleDropdownClick(index)}
                          className="text-gray-800 hover:text-emerald-600 font-medium transition-colors relative group flex items-center"
                        >
                          {item.name}
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
                          <FaChevronDown
                            size={14}
                            className={`ml-1 transition-transform ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.link}
                          className="text-gray-800 hover:text-emerald-600 font-medium transition-colors relative group"
                        >
                          {item.name}
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
                        </Link>
                      )}
                    </div>

                    {/* Desktop Dropdown */}
                    {item.dropdown && activeDropdown === index && (
                      <div
                        className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((dropdownItem, dIndex) => (
                          <div key={dIndex} className="relative">
                            <div
                              className="flex justify-between items-center hover:bg-emerald-50 px-4 py-2"
                              onMouseEnter={() => setActiveSubDropdown(dIndex)}
                            >
                              <Link
                                to={dropdownItem.link}
                                className="text-gray-800 hover:text-emerald-600 w-full"
                              >
                                {dropdownItem.name}
                              </Link>
                              {dropdownItem.subItems && (
                                <FaChevronRight
                                  size={12}
                                  className={` text-gray-400 ${
                                    activeSubDropdown === dIndex
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              )}
                            </div>

                            {/* Desktop Sub-Dropdown */}
                            {dropdownItem.subItems &&
                              activeSubDropdown === dIndex && (
                                <div
                                  className="absolute left-full top-0 ml-0.45 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
                                  onMouseLeave={() =>
                                    setActiveSubDropdown(null)
                                  }
                                >
                                  {dropdownItem.subItems.map(
                                    (subItem, sIndex) => (
                                      <Link
                                        key={sIndex}
                                        to={subItem.link}
                                        className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600"
                                      >
                                        {subItem.name}
                                      </Link>
                                    )
                                  )}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-4 ml-6">
                <button className="p-2 text-gray-600 hover:text-emerald-600 transition">
                  <FaSearch />
                </button>
                <Link to="/quote">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition shadow-lg shadow-emerald-600/20">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button className="p-2 text-gray-600">
                <FaSearch />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-800 focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white shadow-lg rounded-lg mt-2 py-4 px-4">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.dropdown ? (
                      <div className="mb-2">
                        <div
                          className="flex justify-between items-center py-2 text-gray-800 font-medium cursor-pointer"
                          onClick={() => handleDropdownClick(index)}
                        >
                          <span>{item.name}</span>
                          <FaChevronDown
                            size={14}
                            className={`transition-transform ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {/* Mobile Dropdown */}
                        {activeDropdown === index && (
                          <div className="ml-4 mt-2 space-y-3">
                            {item.dropdown.map((dropdownItem, dIndex) => (
                              <div key={dIndex}>
                                <div
                                  className="flex justify-between items-center py-2 text-gray-700 cursor-pointer"
                                  onClick={() =>
                                    dropdownItem.subItems
                                      ? handleSubDropdownClick(dIndex)
                                      : null
                                  }
                                >
                                  <Link
                                    to={dropdownItem.link}
                                    onClick={(e) => {
                                      if (dropdownItem.subItems) {
                                        e.preventDefault();
                                      } else {
                                        setIsMenuOpen(false);
                                      }
                                    }}
                                    className="flex-1"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                  {dropdownItem.subItems && (
                                    <FaChevronRight
                                      size={12}
                                      className={`transition-transform ${
                                        activeSubDropdown === dIndex
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                    />
                                  )}
                                </div>

                                {/* Mobile Sub-Dropdown */}
                                {dropdownItem.subItems &&
                                  activeSubDropdown === dIndex && (
                                    <div className="ml-4 space-y-2">
                                      {dropdownItem.subItems.map(
                                        (subItem, sIndex) => (
                                          <Link
                                            key={sIndex}
                                            to={subItem.link}
                                            className="block py-2 text-gray-600 hover:text-emerald-600"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            {subItem.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.link}
                        className="block py-2 text-gray-800 hover:text-emerald-600 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                  <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition">
                      Get a Quote
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* This spacer ensures content starts below the navbar */}
      <div style={{ height: `${navbarHeight}px` }} />
    </>
  );
};

export default Navbar;
