import { motion } from 'framer-motion';
import {FiShoppingCart,FiGlobe, FiDollarSign, FiTrendingUp, FiUsers, FiCheck } from 'react-icons/fi';
import { FaYoutube, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const GoogleAds = () => {
  const adTypes = [
    {
      icon: <FaSearch className="text-blue-500 text-2xl" />,
      title: "Search Ads",
      desc: "Text ads on Google search results",
      color: "from-blue-100 to-blue-50"
    },
    {
      icon: <FaYoutube className="text-red-500 text-2xl" />,
      title: "YouTube Ads",
      desc: "Video ads before/during YouTube videos",
      color: "from-red-100 to-red-50"
    },
    {
      icon: <FaMapMarkerAlt className="text-green-500 text-2xl" />,
      title: "Display Ads",
      desc: "Banner ads on millions of websites",
      color: "from-green-100 to-green-50"
    },
    {
      icon: <FiShoppingCart className="text-purple-500 text-2xl" />,
      title: "Shopping Ads",
      desc: "Product listings on Google Shopping",
      color: "from-purple-100 to-purple-50"
    }
  ];

  const benefits = [
    "95% of Google's revenue comes from ads",
    "Over 8.5 billion daily searches",
    "Average $2 CPC (industry dependent)",
    "72% of clicks go to the top 3 ads",
    "400 hours of video uploaded to YouTube every minute"
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Google Ads | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Google Ads, PPC Advertising, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Maximize your ROI with our expert Google Ads services. Drive targeted traffic and increase conversions with our tailored PPC strategies."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/google-ads" />
        <meta
          property="og:title"
          content="Google Ads | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Maximize your ROI with our expert Google Ads services. Drive targeted traffic and increase conversions with our tailored PPC strategies."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/google-ads"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="flex justify-center mb-2">
            <span className="text-4xl font-bold text-blue-500">G</span>
            <span className="text-4xl font-bold text-red-500">o</span>
            <span className="text-4xl font-bold text-yellow-500">o</span>
            <span className="text-4xl font-bold text-blue-500">g</span>
            <span className="text-4xl font-bold text-green-500">l</span>
            <span className="text-4xl font-bold text-red-500">e</span>

          </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                Google Ads
              </span> Mastery
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Dominate search results and reach customers at the perfect moment with precision-targeted campaigns.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                  Start Your Campaign
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50">
                  Get Free Audit
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { value: "8.5B", label: "Daily Searches", icon: <FaSearch className="text-blue-500" /> },
              { value: "90%", label: "Market Share", icon: <FiTrendingUp className="text-blue-500" /> },
              { value: "2M+", label: "Websites", icon: <FiGlobe className="text-blue-500" /> },
              { value: "2B+", label: "Monthly Users", icon: <FiUsers className="text-blue-500" /> },
              { value: "95%", label: "Revenue Share", icon: <FiDollarSign className="text-blue-500" /> }
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
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">{stat.value}</h3>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ad Types Section */}
      <div className="bg-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 text-center mb-4"
          >
            Google <span className="text-blue-600">Ad Formats</span>
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
                className={`bg-gradient-to-b ${adType.color} p-8 rounded-xl shadow-md`}
              >
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm">
                  {adType.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{adType.title}</h3>
                <p className="text-gray-600 text-center">{adType.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Why <span className="text-blue-600">Google Ads</span> Work
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-blue-50 p-4 rounded-lg"
                >
                  <div className="flex-shrink-0 h-6 w-6 text-blue-500 mt-1">
                    <FiCheck />
                  </div>
                  <span className="ml-3 text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200"
          >
            <img 
              src="https://cdn.dribbble.com/users/1126939/screenshots/11030184/media/7a6f1a1c94a4a8d1b3e5a5e5e5e5e5e5.png" 
              alt="Google Ads Dashboard" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
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
            Ready to Dominate Google Search?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Our certified Google Ads specialists will build campaigns that convert.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
          >
            Get Your Free Strategy Session
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAds;