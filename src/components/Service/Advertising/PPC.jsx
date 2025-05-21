import { motion } from 'framer-motion';
import { FiDollarSign, FiTrendingUp, FiTarget, FiPieChart } from 'react-icons/fi';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const PPCAdvertising = () => {
  const features = [
    {
      icon: <FiDollarSign className="text-purple-600 text-2xl" />,
      title: "Cost Control",
      desc: "Pay only when users click your ads"
    },
    {
      icon: <FiTrendingUp className="text-purple-600 text-2xl" />,
      title: "Instant Traffic",
      desc: "Get visitors immediately after launch"
    },
    {
      icon: <FiTarget className="text-purple-600 text-2xl" />,
      title: "Precise Targeting",
      desc: "Reach your ideal customers"
    },
    {
      icon: <FiPieChart className="text-purple-600 text-2xl" />,
      title: "Measurable ROI",
      desc: "Track every dollar spent"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>PPC Advertising | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="PPC Advertising, Pay-Per-Click, Google Ads, Microsoft Ads, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Maximize your ROI with our expert PPC advertising services. Drive targeted traffic and increase conversions with Google Ads and Microsoft Ads."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/ppc" />
        <meta
          property="og:title"
          content="PPC Advertising | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Maximize your ROI with our expert PPC advertising services. Drive targeted traffic and increase conversions with Google Ads and Microsoft Ads."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/ppc"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                PPC Advertising
              </span> That Converts
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Laser-targeted pay-per-click campaigns that drive qualified leads and sales.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  <FaGoogle className="mr-2" /> Google Ads
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-200">
                  <FaMicrosoft className="mr-2" /> Microsoft Ads
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-50 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://preview.redd.it/abstract-purple-wave-background-v0-9z5q1x4y5v4a1.png?width=1080&crop=smart&auto=webp&s=7a1c3c3e0c7b7a1c9b1c1c1c1c1c1c1c1c1c1c1')] opacity-10"></div>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Dominate <span className="text-purple-600">Search Engines</span> With Precision
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our PPC experts create campaigns that appear exactly when your ideal customers are searching for your products or services.
            </p>
            <ul className="space-y-4">
              {[
                "Keyword research & strategy",
                "Ad copy that converts",
                "Landing page optimization",
                "Continuous A/B testing",
                "Detailed performance tracking"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="flex-shrink-0 h-5 w-5 text-purple-500">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
          >
            <img 
              src="https://cdn.dribbble.com/users/1126939/screenshots/11030184/media/7a6f1a1c94a4a8d1b3e5a5e5e5e5e5e5.png" 
              alt="PPC Dashboard" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-white text-center mb-12"
          >
            Why <span className="text-purple-300">PPC Advertising</span> Works
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{feature.title}</h3>
                <p className="text-purple-100 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCAdvertising;