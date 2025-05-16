import { motion } from 'framer-motion';
import { FaGlobe, FaRocket, FaBolt, FaBullseye } from 'react-icons/fa';
import { SiMeta } from 'react-icons/si';

const MetaAds = () => {
  const adFormats = [
    {
      name: "Dynamic Ads",
      desc: "Automatically promote your entire catalog to relevant audiences",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Carousel Ads",
      desc: "Show multiple images or videos in one ad",
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "Story Ads",
      desc: "Full-screen immersive experiences",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Reels Ads",
      desc: "Engage users with short-form videos",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1642633058895-7b72627a10b1?auto=format&fit=crop&w=1470&q=80"
            alt="Meta Ads"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <SiMeta className="text-white text-5xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-200">
                Meta Ads
              </span>{" "}
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              We provide Smart, scalable advertising solutions across Facebook, Instagram, Messenger, and beyond.
            </p>
            <div className="mt-10 flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Launch Campaign
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { value: "3B+", label: "Active Meta Users", icon: <FaGlobe /> },
              { value: "10x", label: "ROI with Dynamic Ads", icon: <FaRocket /> },
              { value: "96%", label: "Ad Visibility", icon: <FaBolt /> },
              { value: "98%", label: "Audience Accuracy", icon: <FaBullseye /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-12 text-center"
              >
                <div className="flex justify-center text-indigo-600 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">{stat.icon}</div>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">{stat.value}</h3>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ad Types Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 text-center mb-4"
          >
            Powerful <span className="text-indigo-600">Ad Formats</span> by Meta
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12"
          >
            Pick the right format to maximize engagement and results
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${format.color} h-2 w-full`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{format.name}</h3>
                  <p className="text-gray-600">{format.desc}</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="inline-flex items-center text-indigo-600 font-medium">
                    Learn more <span className="ml-1">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaAds;
