import { motion } from 'framer-motion';
import { FiGlobe, FiMonitor, FiSmartphone, FiTarget } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';

const DisplayAdvertising = () => {
  const networks = [
    {
      name: "Google Display Network",
      reach: "2M+ websites",
      icon: <FaGoogle className="text-blue-500 text-2xl" />
    },
    {
      name: "Programmatic Ads",
      reach: "Real-time bidding",
      icon: <FiMonitor className="text-blue-500 text-2xl" />
    },
    {
      name: "Native Advertising",
      reach: "Seamless content integration",
      icon: <FiSmartphone className="text-blue-500 text-2xl" />
    },
    {
      name: "Retargeting",
      reach: "Win back visitors",
      icon: <FiTarget className="text-blue-500 text-2xl" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                Display Advertising
              </span> That Captivates
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Visually stunning banner ads, native placements, and retargeting campaigns across millions of websites.
            </p>
            <div className="mt-10">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              >
                Launch Your Campaign
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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          >
            <img 
              src="https://cdn.dribbble.com/users/1126939/screenshots/11030184/media/7a6f1a1c94a4a8d1b3e5a5e5e5e5e5e5.png" 
              alt="Display Ads" 
              className="w-full h-auto"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Reach <span className="text-blue-600">Billions</span> Across the Web
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Display advertising puts your brand in front of potential customers as they browse their favorite websites, watch videos, check email, and use mobile apps.
            </p>
            <div className="space-y-6">
              {[
                "Visual ads (banners, rich media, native)",
                "Contextual targeting by website content",
                "Audience targeting by demographics",
                "Remarketing to past visitors",
                "Advanced measurement tools"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Networks Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 text-center mb-12"
          >
            Our <span className="text-blue-600">Display Networks</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networks.map((network, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                  {network.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{network.name}</h3>
                <p className="text-blue-600 font-medium">{network.reach}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-white mb-6"
          >
            Ready to Amplify Your Brand?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Our display advertising experts will create campaigns that get noticed and deliver results.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
          >
            Get Your Free Proposal
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAdvertising;