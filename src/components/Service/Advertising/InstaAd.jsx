import { motion } from 'framer-motion';
import { FiHeart, FiEye, FiShoppingBag, FiUserPlus } from 'react-icons/fi';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const InstaAds = () => {
  const strategies = [
    {
      title: "Story Ads",
      desc: "Full-screen vertical ads between stories",
      icon: <FiEye className="text-pink-500 text-2xl" />
    },
    {
      title: "Reels Ads",
      desc: "Short video ads in Reels feed",
      icon: <FiHeart className="text-pink-500 text-2xl" />
    },
    {
      title: "Shopping Ads",
      desc: "Product tags for instant purchases",
      icon: <FiShoppingBag className="text-pink-500 text-2xl" />
    },
    {
      title: "Explore Ads",
      desc: "Appear in customized discovery feeds",
      icon: <FiUserPlus className="text-pink-500 text-2xl" />
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <FaInstagram className="text-white text-5xl" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-white">
                Instagram Ads
              </span> That Inspire
            </h1>
            <p className="mt-6 text-xl text-pink-100 max-w-3xl mx-auto">
              Visually stunning ads that blend seamlessly with organic content and drive engagement.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-pink-700 bg-white hover:bg-pink-50">
                  Get Started
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-700 hover:bg-pink-800">
                  <FaFacebook className="mr-2" /> Cross-Platform
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Instagram <span className="text-pink-600">Advertising</span> That Converts
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 2 billion monthly active users, Instagram offers unparalleled opportunities to showcase your brand visually and connect with engaged audiences.
            </p>
            <div className="space-y-6">
              {[
                "High-intent platform with shopping features",
                "Young, affluent demographic (18-34)",
                "Visual storytelling at its best",
                "Seamless checkout experiences",
                "Advanced targeting options"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 text-pink-500 mt-1">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl opacity-20 blur"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://cdn.dribbble.com/users/1126939/screenshots/11030184/media/7a6f1a1c94a4a8d1b3e5a5e5e5e5e5e5.png" 
                alt="Instagram Ads" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Strategies Section */}
      <div className="bg-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 text-center mb-12"
          >
            Instagram <span className="text-pink-600">Ad Strategies</span> That Work
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaAds;