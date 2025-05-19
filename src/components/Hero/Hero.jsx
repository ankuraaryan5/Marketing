import  { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VideoHeroSection = () => {
  const videoRef = useRef(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  // Try to autoplay the video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  // Floating icons data
  const floatingIcons = [
    { icon: '📈', size: 'text-2xl', delay: 0.1, x: 10, y: 20 },
    { icon: '💡', size: 'text-3xl', delay: 0.3, x: -15, y: 40 },
    { icon: '🚀', size: 'text-4xl', delay: 0.5, x: 20, y: 60 },
    { icon: '🔍', size: 'text-2xl', delay: 0.7, x: -25, y: 30 },
    { icon: '📱', size: 'text-3xl', delay: 0.9, x: 15, y: 50 },
    { icon: '✨', size: 'text-4xl', delay: 1.1, x: -20, y: 70 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-teal-800/40 to-cyan-900/50"></div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            x: item.x,
            y: [0, item.y, 0],
          }}
          transition={{
            duration: 8 + index * 0.5,
            delay: item.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className={`absolute ${item.size} text-white opacity-70`}
          style={{
            left: `${10 + (index * 15) % 80}%`,
            top: `${10 + (index * 10) % 60}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-2 leading-tight"
          >
            Transform Your <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Digital Presence
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 mt-20 opacity-90"
          >
            Cutting-edge <span className="font-semibold text-emerald-300">digital marketing</span> solutions tailored to grow your business
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button 
              className="relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredButton('started')}
              onHoverEnd={() => setHoveredButton(null)}
            >
              {hoveredButton === 'started' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <span className="relative z-10">Get Started</span>
            </motion.button>
            <Link to="/about">
            
            <motion.button 
              className="relative px-8 py-4 bg-transparent text-white font-bold border-2 border-emerald-300 rounded-full overflow-hidden shadow-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: '#6ee7b7'
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredButton('learn')}
              onHoverEnd={() => setHoveredButton(null)}
            >
              {hoveredButton === 'learn' && (
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <span className="relative z-10">Learn More</span>
            </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated digital elements */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {['SEO', 'Social', 'Ads', 'Analytics', 'Content'].map((item, index) => (
          <motion.div
            key={index}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-emerald-200 border border-emerald-300/30"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(110, 231, 183, 0.2)'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DigitalMarketingPage;
