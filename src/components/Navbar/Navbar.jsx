import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSearch, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '/' },
    { 
      name: 'Services', 
      link: '#services',
      dropdown: [
        { 
          name: 'Social Media Marketing', 
          link: '#social-media',
          subItems: [
            { name: 'Facebook Marketing', link: '#facebook' },
            { name: 'Instagram Marketing', link: '#instagram' },
            { name: 'LinkedIn Marketing', link: '#linkedin' },
            { name: 'Twitter Marketing', link: '#twitter' },
          ]
        },
        { 
          name: 'SEO Services', 
          link: '#seo',
          subItems: [
            { name: 'On-Page SEO', link: '#onpage' },
            { name: 'Off-Page SEO', link: '#offpage' },
            { name: 'Technical SEO', link: '#technical' },
          ]
        },
        { 
          name: 'PPC Advertising', 
          link: '#ppc',
          subItems: [
            { name: 'Google Ads', link: '#google-ads' },
            { name: 'Facebook Ads', link: '#facebook-ads' },
            { name: 'Display Advertising', link: '#display' },
          ]
        },
        { name: 'Content Marketing', link: '#content' },
        { name: 'Email Marketing', link: '#email' },
      ]
    },
    { name: 'About Us', link: '#about' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Blog', link: '#blog' },
    { name: 'Contact', link: '#contact' },
  ];

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    } else {
      setOpenDropdown(index);
      setOpenSubDropdown(null);
    }
  };

  const toggleSubDropdown = (index) => {
    if (openSubDropdown === index) {
      setOpenSubDropdown(null);
    } else {
      setOpenSubDropdown(index);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90'}`}>
      {/* Top bar with contact info */}
      <div className="bg-emerald-600 text-white hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-sm" />
              <span className="text-sm">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-sm" />
              <span className="text-sm">info@digitalmarketing.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Follow Us:</span>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-emerald-300 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-emerald-300 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-emerald-300 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-emerald-300 transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-emerald-600">Digital</span>
              <span className="text-2xl font-bold text-gray-800">Pro</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <div className="flex items-center">
                    <a
                      href={item.link}
                      className="text-gray-800 hover:text-emerald-600 font-medium transition-colors relative group"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
                    </a>
                    {item.dropdown && (
                      <button 
                        onClick={() => toggleDropdown(index)}
                        className="ml-1 text-gray-500 hover:text-emerald-600 focus:outline-none"
                      >
                        <FaChevronDown size={14} />
                      </button>
                    )}
                  </div>

                  {/* Desktop Dropdown */}
                  {item.dropdown && openDropdown === index && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                      {item.dropdown.map((dropdownItem, dIndex) => (
                        <div key={dIndex} className="relative">
                          <div className="flex justify-between items-center hover:bg-emerald-50 px-4 py-2">
                            <a 
                              href={dropdownItem.link} 
                              className="text-gray-800 hover:text-emerald-600 w-full"
                            >
                              {dropdownItem.name}
                            </a>
                            {dropdownItem.subItems && (
                              <button 
                                onClick={() => toggleSubDropdown(dIndex)}
                                className="ml-2 text-gray-400 hover:text-emerald-600"
                              >
                                <FaChevronRight size={12} />
                              </button>
                            )}
                          </div>
                          
                          {/* Desktop Sub-Dropdown */}
                          {dropdownItem.subItems && openSubDropdown === dIndex && (
                            <div className="absolute left-full top-0 ml-1 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                              {dropdownItem.subItems.map((subItem, sIndex) => (
                                <a
                                  key={sIndex}
                                  href={subItem.link}
                                  className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600"
                                >
                                  {subItem.name}
                                </a>
                              ))}
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
                        onClick={() => toggleDropdown(index)}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown 
                          size={14} 
                          className={`transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} 
                        />
                      </div>
                      
                      {/* Mobile Dropdown */}
                      {openDropdown === index && (
                        <div className="ml-4 mt-2 space-y-3">
                          {item.dropdown.map((dropdownItem, dIndex) => (
                            <div key={dIndex}>
                              <div 
                                className="flex justify-between items-center py-2 text-gray-700 cursor-pointer"
                                onClick={() => dropdownItem.subItems ? toggleSubDropdown(dIndex) : null}
                              >
                                <a 
                                  href={dropdownItem.link} 
                                  className={dropdownItem.subItems ? 'pointer-events-none' : ''}
                                >
                                  {dropdownItem.name}
                                </a>
                                {dropdownItem.subItems && (
                                  <FaChevronRight 
                                    size={12} 
                                    className={`transition-transform ${openSubDropdown === dIndex ? 'rotate-90' : ''}`} 
                                  />
                                )}
                              </div>
                              
                              {/* Mobile Sub-Dropdown */}
                              {dropdownItem.subItems && openSubDropdown === dIndex && (
                                <div className="ml-4 space-y-2">
                                  {dropdownItem.subItems.map((subItem, sIndex) => (
                                    <a
                                      key={sIndex}
                                      href={subItem.link}
                                      className="block py-2 text-gray-600 hover:text-emerald-600"
                                    >
                                      {subItem.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      className="block py-2 text-gray-800 hover:text-emerald-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition">
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;