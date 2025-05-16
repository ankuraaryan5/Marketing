import { motion } from 'framer-motion';
import { FiCpu, FiSmartphone, FiDatabase, FiLayers, FiCheckCircle, FiCode, FiGlobe, FiZap } from 'react-icons/fi';

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

  const checklistItems = [
    { icon: <FiCode />, text: "XML Sitemap" },
    { icon: <FiGlobe />, text: "Robots.txt" },
    { icon: <FiCheckCircle />, text: "Canonical Tags" },
    { icon: <FiZap />, text: "HTTPS Security" },
    { icon: <FiCode />, text: "URL Structure" },
    { icon: <FiZap />, text: "Page Speed" },
    { icon: <FiDatabase />, text: "Structured Data" },
    { icon: <FiSmartphone />, text: "Mobile Responsiveness" },
    { icon: <FiLayers />, text: "Image Optimization" },
    { icon: <FiCpu />, text: "JavaScript Rendering" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Full-width Image and Overlay Text */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80" 
          alt="Technical SEO" 
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4 max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-emerald-400">Technical SEO</span> Optimization
            </h1>
            <p className="text-xl text-white/90 mb-8">
              The foundation that makes your website search-engine friendly and performance-optimized
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg"
            >
              Get Your SEO Audit
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why <span className="text-emerald-600">Technical SEO</span> Matters
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Technical SEO forms the backbone of your website's visibility in search engines. Without proper technical foundations, 
              even the best content may never reach its audience.
            </p>
            <p className="text-lg text-gray-600">
              We implement comprehensive technical optimizations that help search engines discover, crawl, index, and rank your content effectively.
            </p>
          </div>
        </motion.div>

        {/* Aspects Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="SEO Analysis"
              className="rounded-xl shadow-xl w-full"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Core <span className="text-emerald-600">Technical</span> Elements
            </h2>
            <p className="text-gray-600">
              Our technical SEO services cover all essential aspects to ensure your website meets search engine requirements:
            </p>
            
            <div className="space-y-6">
              {aspects.map((aspect, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-emerald-200"
                >
                  <div className="bg-emerald-50 w-14 h-14 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    {aspect.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{aspect.title}</h3>
                    <p className="text-gray-600">{aspect.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-width Image with Text Overlay */}
      <div className="relative my-20 h-[400px]">
        <div className="absolute inset-0 bg-emerald-900/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80" 
          alt="SEO Analysis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-white">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technical SEO <span className="text-emerald-300">Performance</span> Boost
              </h2>
              <p className="text-lg mb-8">
                Our optimizations can improve your site's loading speed by up to 70%, directly impacting your search rankings and user experience.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-emerald-300">70%+</div>
                  <div className="text-sm">Faster Load Times</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-emerald-300">90%+</div>
                  <div className="text-sm">Crawl Efficiency</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-emerald-300">40%+</div>
                  <div className="text-sm">Ranking Improvement</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-emerald-300">100%</div>
                  <div className="text-sm">Mobile Friendly</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Checklist Section */}
      <div className="max-w-6xl mx-auto py-20 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Our Technical SEO <span className="text-emerald-600">Checklist</span>
              </h2>
              <p className="text-gray-600 mb-8">
                We meticulously audit and optimize these critical technical elements:
              </p>
              
              <div className="grid gap-4">
                {checklistItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4 text-emerald-600">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="hidden md:block bg-emerald-600 relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="SEO Checklist" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-emerald-800/30" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-emerald-200">Optimize</span> Your Website?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our technical SEO experts will analyze your site and implement the necessary improvements to boost your search visibility.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium shadow-lg"
            >
              Get Your Free SEO Audit
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSEO;