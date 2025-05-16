import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-green-400">Adonomics Technologies</h3>
            <p className="text-gray-300 mb-6">
              Helping businesses grow through innovative digital solutions and marketing strategies.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook size={20} />, label: "Facebook" },
                { icon: <FaTwitter size={20} />, label: "Twitter" },
                { icon: <FaInstagram size={20} />, label: "Instagram" },
                { icon: <FaLinkedin size={20} />, label: "LinkedIn" },
                { icon: <FaYoutube size={20} />, label: "YouTube" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: "/", name: "Home" },
                { path: "/about", name: "About Us" },
                { path: "/portfolio", name: "Portfolio" },
                { path: "/contact", name: "Contact" },
                { path: "/blog", name: "Blog" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                { path: "/seo", name: "SEO Services" },
                { path: "/smm", name: "Social Media Marketing" },
                { path: "/ppc", name: "PPC Advertising" },
                { path: "/content", name: "Content Marketing" },
                { path: "/branding", name: "Branding" }
              ].map((service, index) => (
                <li key={index}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {service.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MdLocationOn className="text-green-400 mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-300">R.N Tower, Gola Road <br />Patna, Bihar, India-801503</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-green-400 mr-3" size={20} />
                <a href="mailto:info@adonomicstechnologies.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  info@adonomicstechnologies.com
                </a>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-green-400 mr-3" size={20} />
                <a href="tel:+0612-4150537" className="text-gray-300 hover:text-green-400 transition-colors">
                  +0612-4150537
                </a>
              </li>
            </ul>
          </motion.div>
          {/* Compact Newsletter in Corner */}
        

        </div>
        <motion.div
          className=" flex flex-col justify-center items-center bg-green-600 rounded-lg p-4 w-full md:w-1/2 shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-bold mb-2 text-white">Newsletter</h4>
          <form className="flex flex-col gap-2 w-full ">
            <input
              type="email"
              placeholder="Your email"
              className="text-sm px-3 py-2 rounded bg-white text-gray-800 focus:outline-none"
              required
            />
            <motion.button
              type="submit"
              className="text-xs px-3 py-2 bg-gray-900 text-white rounded font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col  justify-between items-center">
          
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</Link>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Cookies</a>
          </div>
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Adonomics Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;