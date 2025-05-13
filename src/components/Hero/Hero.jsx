import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoHeroSection = () => {
  const videoRef = useRef(null);

  // Try to autoplay the video (may be blocked by browser policies)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // Fallback: Show play button
      });
    }
  }, []);

  return (
    <div className="relative p-10 w-full overflow-hidden ">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-2  leading-tight">
            Transform Your <span className="text-cyan-400">Digital Presence</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 mt-20 opacity-90"
          >
            Cutting-edge digital marketing solutions tailored to grow your business
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:bg-transparent hover:border-2 hover:border-white">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-bold border-2 border-white rounded-full hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105 hover:text-cyan-600 shadow-lg">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

    
     
    </div>
  );
};

export default VideoHeroSection;