import { motion } from 'framer-motion';
import { FiCheck, FiSearch, FiEdit, FiLink, FiClock } from 'react-icons/fi';

const OnPageSEO = () => {
  const features = [
    {
      icon: <FiSearch className="text-emerald-500 text-2xl" />,
      title: "Keyword Optimization",
      desc: "Strategic placement of target keywords in titles, headers, and content"
    },
    {
      icon: <FiEdit className="text-emerald-500 text-2xl" />,
      title: "Content Quality",
      desc: "Creating valuable, original content that satisfies search intent"
    },
    {
      icon: <FiLink className="text-emerald-500 text-2xl" />,
      title: "Internal Linking",
      desc: "Smart linking structure to improve site architecture and ranking"
    },
    {
      icon: <FiClock className="text-emerald-500 text-2xl" />,
      title: "Loading Speed",
      desc: "Optimizing page elements for fastest possible load times"
    }
  ];

  return (
    <div className="bg-white">
        {/* Animated Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-cyan-500 py-20"
              >
                
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10 mt-20">
                  <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-black text-center mb-4"
                  >
                     <span className="text-green-500">On-Page</span> SEO Optimization
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl text-white text-center max-w-2xl mx-auto"
                  >
                    <p className="text-lg text-white-600 max-w-3xl mx-auto">
              Maximize your website's potential with our comprehensive on-page SEO strategies that search engines love.
            </p>
                  </motion.p>
                </div>
              </motion.div>
      

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="bg-emerald-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why <span className="text-emerald-600">On-Page SEO</span> Matters
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>On-page SEO refers to all measures that can be taken directly within the website in order to improve its position in the search rankings.</p>
              <p>These include optimizing content, improving HTML source code, and ensuring proper website architecture. Our approach combines technical excellence with content strategy.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Our Process</h3>
            <div className="space-y-4">
              {[
                "Comprehensive website audit",
                "Keyword research and strategy",
                "Content optimization",
                "Technical SEO improvements",
                "Ongoing monitoring and adjustments"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <FiCheck className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OnPageSEO;