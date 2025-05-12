import { motion } from 'framer-motion';
import { FiCpu, FiSmartphone, FiDatabase, FiLayers } from 'react-icons/fi';

const TechnicalSEO = () => {
  const aspects = [
    {
      icon: <FiCpu className="text-emerald-500 text-2xl" />,
      title: "Site Architecture",
      desc: "Optimized structure for easy crawling and indexing"
    },
    {
      icon: <FiSmartphone className="text-emerald-500 text-2xl" />,
      title: "Mobile Optimization",
      desc: "Fully responsive design with mobile-first approach"
    },
    {
      icon: <FiDatabase className="text-emerald-500 text-2xl" />,
      title: "Structured Data",
      desc: "Schema markup for rich snippets and better visibility"
    },
    {
      icon: <FiLayers className="text-emerald-500 text-2xl" />,
      title: "Core Web Vitals",
      desc: "Optimizing for Google's user experience metrics"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto mt-15">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-emerald-600">Technical SEO</span> Foundation
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The behind-the-scenes optimizations that make your website search-engine friendly.
            </p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Technical SEO" 
              className="w-full h-64 object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Aspects Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Essential <span className="text-emerald-600">Technical</span> Elements
            </h2>
            <p className="text-gray-600 mb-8">
              Technical SEO ensures search engines can find, crawl, index, and understand your website content effectively.
            </p>
            
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="SEO Analysis"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-6">
            {aspects.map((aspect, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-emerald-200 transition-all"
              >
                <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  {aspect.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{aspect.title}</h3>
                  <p className="text-gray-600">{aspect.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Checklist Section */}
      <div className="bg-emerald-600 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Technical SEO <span className="text-emerald-600">Checklist</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "XML Sitemap",
                "Robots.txt",
                "Canonical Tags",
                "HTTPS Security",
                "URL Structure",
                "Page Speed",
                "Structured Data",
                "Mobile Responsiveness",
                "Image Optimization",
                "JavaScript Rendering"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSEO;