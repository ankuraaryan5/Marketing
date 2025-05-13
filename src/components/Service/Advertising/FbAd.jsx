import { motion } from 'framer-motion';
import { FiEye, FiUsers, FiDollarSign, FiBarChart2 } from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FacebookAds = () => {
  const adTypes = [
    {
      name: "Lead Ads",
      desc: "Capture leads directly on Facebook",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Conversion Ads",
      desc: "Drive sales and signups",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Engagement Ads",
      desc: "Boost post interactions",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Video Ads",
      desc: "Tell your story with video",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
            alt="Facebook Ads"
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
              <FaFacebook className="text-white text-5xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                Facebook Ads
              </span> That Scale
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Hyper-targeted social advertising that reaches your customers where they spend their time.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                  Get Started
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-50">
                  <FaInstagram className="mr-2" /> Instagram Ads
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
              { value: "2.9B", label: "Monthly Active Users", icon: <FiUsers /> },
              { value: "94%", label: "Ad Reach", icon: <FiEye /> },
              { value: "8x", label: "Higher Engagement", icon: <FiBarChart2 /> },
              { value: "$0.50", label: "Avg. CPC", icon: <FiDollarSign /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-12 text-center"
              >
                <div className="flex justify-center text-blue-600 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {stat.icon}
                  </div>
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
            Facebook <span className="text-blue-600">Ad Formats</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12"
          >
            Choose the right ad type for your marketing objectives
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adTypes.map((adType, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${adType.color} h-2 w-full`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{adType.name}</h3>
                  <p className="text-gray-600">{adType.desc}</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="inline-flex items-center text-blue-600 font-medium">
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

export default FacebookAds;