// Hero.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-white to-emerald-50 pt-32 pb-20 md:pt-40 md:pb-32"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -right-64 -top-64 w-[600px] h-[600px] bg-emerald-100 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -left-96 -bottom-96 w-[800px] h-[800px] bg-emerald-200 rounded-full opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Digital Marketing Experts
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Grow Your Business With{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Our</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-200/60 z-0"></span>
              </span>{' '}
              Digital Solutions
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              We help businesses increase their online presence and generate more leads with our cutting-edge digital marketing strategies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 flex items-center">
                Get Started <FiArrowRight className="ml-2" />
              </button>
              <button className="border-2 border-gray-300 hover:border-emerald-400 text-gray-700 hover:text-emerald-600 px-8 py-4 rounded-full font-medium transition-all flex items-center">
                Learn More
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-gray-600">
                <div className="flex items-center">
                  <FiCheck className="text-emerald-500 mr-1" />
                  <span>Trusted by 500+ companies</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - 3D animated image */}
          <div className="relative">
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="relative w-full max-w-lg mx-auto"
            >
              {/* Main 3D device mockup */}
              <div className="relative">
                <img
                  src="https://cdn.dribbble.com/users/1787323/screenshots/14168396/media/0c6dbd0696d6b9a7a9d05a5c7a59a6b1.png"
                  alt="Digital Marketing Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl border-8 border-white"
                />
                
                {/* Floating elements around the main image */}
                <motion.div
                  animate={{
                    y: [-15, 15],
                    rotate: [0, 5]
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute -left-10 -top-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <span className="text-emerald-600 font-bold text-lg">+75%</span>
                    <p className="text-xs text-gray-600">Traffic Growth</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10],
                    rotate: [-5, 5]
                  }}
                  transition={{
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 7,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute -right-10 -bottom-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <span className="text-emerald-600 font-bold text-lg">3.2x</span>
                    <p className="text-xs text-gray-600">ROI Increase</p>
                  </div>
                </motion.div>
              </div>

              {/* Animated background shapes */}
              <div className="absolute -z-10 w-full h-full top-0 left-0">
                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/4 left-1/4 w-16 h-16 bg-emerald-200 rounded-full blur-xl opacity-40"
                />
                <motion.div
                  animate={{
                    x: [0, -15, 0],
                    y: [0, 15, 0]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="absolute top-3/4 left-3/4 w-20 h-20 bg-emerald-300 rounded-full blur-xl opacity-30"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;