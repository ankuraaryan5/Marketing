import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Services = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Apple",
    "Facebook",
    "Netflix",
    "Tesla",
    "Uber",
    "Airbnb",
    "Spotify",
    "Adobe",
    "Intel"
  ];

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
          }
        }
      });
    }
  }, [isInView, controls]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped these brands transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Horizontal Scrolling Companies */}
        <div 
          ref={ref}
          className="relative h-24 overflow-hidden"
        >
          <motion.div
            className="absolute flex items-center gap-12 whitespace-nowrap"
            animate={controls}
          >
            {/* Double the array to create seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={`${company}-${index}`} 
                className="flex items-center justify-center"
              >
                <motion.div
                  className="text-2xl font-bold text-white opacity-90 hover:opacity-100 transition-opacity px-6 py-3 bg-green-600 rounded-xl shadow-sm hover:shadow-md"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {company}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "SEO Optimization",
              description: "Boost your search rankings and organic traffic with our data-driven SEO strategies.",
              icon: "📈",
              bgColor: "bg-green-50"
            },
            {
              title: "Social Media Marketing",
              description: "Engage your audience and grow your brand across all social platforms.",
              icon: "💬",
              bgColor: "bg-green-100"
            },
            {
              title: "PPC Advertising",
              description: "Maximize ROI with targeted pay-per-click campaigns that convert.",
              icon: "🔍",
              bgColor: "bg-green-50"
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className={`${service.bgColor} p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-green-200`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">{service.title}</h3>
              <p className="text-green-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;