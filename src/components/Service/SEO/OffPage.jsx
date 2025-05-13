import { motion } from 'framer-motion';
import { FiShare2, FiUsers, FiMessageSquare, FiGlobe } from 'react-icons/fi';

const OffPageSEO = () => {
  const strategies = [
    {
      icon: <FiShare2 className="text-emerald-500 text-2xl" />,
      title: "Link Building",
      desc: "High-quality backlinks from authoritative websites"
    },
    {
      icon: <FiUsers className="text-emerald-500 text-2xl" />,
      title: "Social Signals",
      desc: "Engagement and shares across social platforms"
    },
    {
      icon: <FiMessageSquare className="text-emerald-500 text-2xl" />,
      title: "Content Marketing",
      desc: "Valuable content that earns natural links"
    },
    {
      icon: <FiGlobe className="text-emerald-500 text-2xl" />,
      title: "Local Citations",
      desc: "Consistent NAP across directories"
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
                
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10 mt-20">
                  <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-black text-center mb-4"
                  >
                     <span className="text-green-500">Off-Page</span> SEO Optimization
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl text-white text-center max-w-2xl mx-auto"
                  >
                    <p className="text-lg text-white-600 max-w-3xl mx-auto">
              
              Build authority and credibility signals that tell search engines your website deserves top rankings.

            </p>
                  </motion.p>
                </div>
              </motion.div>
     

      {/* Strategies Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Proven <span className="text-emerald-600">Off-Page</span> Techniques
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex items-start"
            >
              <div className="bg-emerald-50 w-14 h-14 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                {strategy.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-emerald-600 py-20 px-4">
        <div className="max-w-4xl mx-auto ">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Benefits of Off-Page SEO</h2>
            <p className="text-emerald-100 text-lg">
              Off-page SEO helps establish your website as an authority in your industry, driving more organic traffic.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Increased Domain Authority",
              "Higher Search Rankings",
              "More Referral Traffic",
              "Brand Awareness",
              "Trust & Credibility",
              "Competitive Edge"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffPageSEO;