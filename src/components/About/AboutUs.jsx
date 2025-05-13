import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const [navHidden, setNavHidden] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== 'down' && scrollY > 100) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const teamMembers = [
    { name: "Aditya Singh", role: "Director (Operations)", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Prince Dwivedi", role: "Director (Finance)", img: "https://randomuser.me/api/portraits/men/44.jpg" },
    { name: "Vidya Niwas", role: "Director (Administration)", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Avinash Singh", role: "Director (Business Development)", img: "https://randomuser.me/api/portraits/men/22.jpg" }
  ];

  return (
    <div className="bg-white">
      

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              From <span className="text-green-300">Pixels</span> To <span className="text-white">Profits</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto"
            >
              We engineer digital transformations that drive growth and innovation.
            </motion.p>
            <motion.div 
              variants={itemVariants} 
              className="mt-10"
            >
              <button className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Success, <span className="text-green-600">Our Mission</span></h2>
              <p className="text-lg text-gray-600 mb-6">
                We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.
              </p>
              <div className="space-y-4">
                {[
                  "Results-driven approach",
                  "Dedication to quality",
                  "Client-focused solutions",
                  "Innovative thinking"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-md bg-green-600 text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-base text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants} 
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Team working" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium">Creators of Digital Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "35k+", label: "Happy Customers Worldwide", color: "green-600" },
              { value: "250+", label: "Trusted Partners & Sponsors", color: "green-700" },
              { value: "120+", label: "Client Support Awards", color: "green-600" },
              { value: "5k+", label: "Active Service Users", color: "green-700" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-4xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="text-green-600">Approach</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting impactful digital experiences that connect, engage, and inspire.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: (
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Our Mission",
                content: "Delivering transformative digital solutions that elevate brands connections."
              },
              { 
                icon: (
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Our Vision",
                content: "Shaping the future through innovative and impactful digital experiences."
              },
              { 
                icon: (
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Our Values",
                content: "Integrity, creativity, innovation, collaboration, excellence, results."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Parallax Background */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-green-900 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our <span className="text-green-300">Leadership</span></h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Experts in digital brand innovation and transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our <span className="text-green-600">Clients</span> Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customer experiences that speak for themselves.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">4.9 (40+ Reviews)</span>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Adonomics' team helped us revamp our entire digital presence, from web design to social media marketing. Their attention to detail in understanding our target audience and creating tailored strategies was impressive. Our website now has a modern look, faster load times, and is optimized for mobile, which has significantly improved user engagement.",
                name: "Sara Patel",
                company: "Urban Living Designs",
                initials: "SP"
              },
              {
                quote: "We were struggling to gain traction in the competitive food delivery market before Adonomics came on board. They revamped our website with a fresh design and improved user experience. Their social media campaigns and local SEO strategies have helped us reach a larger audience, and we've seen a significant increase in orders. The results speak for themselves—our sales have gone up by 30%.",
                name: "Priya Sharma",
                company: "HealthyBite Foods",
                initials: "PS"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-green-50 p-8 rounded-xl shadow-md border border-green-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-green-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let's collaborate to create something extraordinary for your brand.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-green-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Us
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;