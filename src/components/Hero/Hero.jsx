import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "DIGITAL MARKETING",
      subtitle: "SOLUTION AGENCY",
      highlight: "We Are",
      description: "Data-driven strategies that deliver measurable results for your business growth",
      cta: "GET STARTED",
      bg: "from-emerald-900 via-teal-800 to-lime-500",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "SOCIAL MEDIA",
      subtitle: "MARKETING EXPERTS",
      highlight: "We Build",
      description: "Engaging campaigns that connect your brand with the right audience",
      cta: "LEARN MORE",
      bg: "from-green-900 via-emerald-800 to-teal-500",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "SEO &  CONTENT",
      subtitle: "OPTIMIZATION TEAM",
      highlight: "We Create",
      description: "High-performing content that ranks and converts in competitive markets",
      cta: "SEE RESULTS",
      bg: "from-teal-900 via-cyan-800 to-emerald-500",
      image: "https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VvfGVufDB8fDB8fHww"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[700px] overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bg}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-l border-white h-full"
                style={{ left: `${i * 5}%` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: i * 0.05 }}
              />
            ))}
          </div>

          {/* Floating particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="w-full"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H0V64Z"
              />
            </svg>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-12 pt-32 pb-40 relative z-10">
        <div className="flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`highlight-${currentSlide}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-emerald-300 text-xl sm:text-2xl font-semibold tracking-wider"
              >
                {slides[currentSlide].highlight}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                {slides[currentSlide].title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-white">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-100 text-base sm:text-lg max-w-lg"
              >
                {slides[currentSlide].description}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`button-${currentSlide}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button className="relative overflow-hidden group bg-white text-emerald-900 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-emerald-300/30">
                  <span className="relative z-10">
                    {slides[currentSlide].cta}
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image - Animated */}
          <div className="hidden lg:block w-full lg:w-1/2 pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${currentSlide}`}
                className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 100, rotate: 2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -100, rotate: -2 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-emerald-400 rounded-full blur-xl opacity-20"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-6" : "bg-white opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;