import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaSearch, FaChartLine, FaFacebook, FaPenAlt, FaEnvelope, FaLaptop, FaCheck } from 'react-icons/fa';

const Services = () => {
  // Infinite scroll setup for trusted companies
  const [scrollerWidth, setScrollerWidth] = useState(0);
  const scrollerRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const companies = [
    "Google", "Microsoft", "Amazon", "Apple", 
    "Meta", "Netflix", "Tesla", "Adobe",
    "Spotify", "Airbnb", "Uber", "Intel",
    "Samsung", "PayPal", "LinkedIn", "Twitter"
  ];

  // Calculate scroll distance for seamless loop
  useEffect(() => {
    if (scrollerRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scrollerContentWidth = scrollerRef.current.scrollWidth;
      setScrollerWidth(scrollerContentWidth + containerWidth);
    }
  }, []);

  useEffect(() => {
    controls.start({
      x: [0, -scrollerWidth/2],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear"
        }
      }
    });
  }, [scrollerWidth, controls]);

  const services = [
    {
      icon: <FaSearch className="text-3xl text-green-600" />,
      title: "Search Engine Optimization (SEO)",
      description: "Boost your website's visibility on Google and drive organic traffic.",
      features: ["Keyword Research", "On-Page & Off-Page SEO", "Technical SEO Audits"],
    },
    {
      icon: <FaChartLine className="text-3xl text-green-600" />,
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Get instant traffic with targeted ads on Google & Social Media.",
      features: ["Google Ads Management", "Facebook & Instagram Ads", "Remarketing Campaigns"],
    },
    {
      icon: <FaFacebook className="text-3xl text-green-600" />,
      title: "Social Media Marketing (SMM)",
      description: "Engage your audience and build brand loyalty.",
      features: ["Content Strategy", "Community Management", "Influencer Collaborations"],
    },
    {
      icon: <FaPenAlt className="text-3xl text-green-600" />,
      title: "Content Marketing",
      description: "Attract and retain customers with high-quality content.",
      features: ["Blog Writing", "Video Scripting", "Infographics & eBooks"],
    },
    {
      icon: <FaEnvelope className="text-3xl text-green-600" />,
      title: "Email Marketing",
      description: "Convert leads into customers with personalized campaigns.",
      features: ["Newsletter Design", "Automation Workflows", "A/B Testing"],
    },
    {
      icon: <FaLaptop className="text-3xl text-green-600" />,
      title: "Website Design & Development",
      description: "Create a stunning, high-converting website.",
      features: ["Responsive Design", "UI/UX Optimization", "Speed Optimization"],
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
          Digital Marketing Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Grow Your Business Online with Our Expert Solutions
        </p>
      </motion.div>

      {/* Trusted Companies Marquee */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600">
            We've helped these brands achieve remarkable growth
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative h-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
          <motion.div
            ref={scrollerRef}
            className="absolute flex items-center gap-8 px-4 h-full"
            animate={controls}
            style={{ width: scrollerWidth * 2 }}
          >
            {[...companies, ...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company}-${index}`}
                className="flex-shrink-0 px-8 py-4 bg-white rounded-xl shadow-md border border-green-100 flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(74, 222, 128, 0.3)"
                }}
              >
                <span className="text-xl font-medium text-green-700 whitespace-nowrap">
                  {company}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="flex items-center mb-5">
              <div className="p-3 bg-green-50 rounded-lg mr-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-green-700">{service.title}</h3>
            </div>
            <p className="text-gray-600 mb-5">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-gradient-to-r from-green-50 to-green-100 p-10 rounded-2xl mb-20"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Proven Expertise",
              desc: "Certified professionals with 8+ years of industry experience"
            },
            {
              title: "Transparent Process",
              desc: "Clear pricing with no hidden fees and weekly progress reports"
            },
            {
              title: "Data-Driven Approach",
              desc: "Real-time analytics and measurable results for all campaigns"
            },
            {
              title: "Dedicated Support",
              desc: "24/7 access to your dedicated account manager"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold text-green-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-4xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Ready to Transform Your Digital Presence?
        </h3>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Get a free consultation with our experts and receive a customized marketing strategy.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(74, 222, 128, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-md"
        >
          Get Started Today
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Services;