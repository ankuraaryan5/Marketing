import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-green-400">Plink</h3>
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
              {['Home', 'Services', 'About Us', 'Case Studies', 'Blog'].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {link}
                  </motion.a>
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
                'SEO Optimization',
                'Social Media Marketing',
                'PPC Advertising',
                'Content Marketing',
                'Web Development'
              ].map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {service}
                  </motion.a>
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
                <span className="text-gray-300">123 Business Ave, Suite 456<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-green-400 mr-3" size={20} />
                <a href="mailto:info@plink.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  info@plink.com
                </a>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-green-400 mr-3" size={20} />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-green-400 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          className="bg-green-600 rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h4>
            <p className="text-green-100 mb-6">
              Get the latest updates, news and product offers by email
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Plink. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;