import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaChartLine, FaGlobe, FaMobileAlt } from 'react-icons/fa';

const floatAnim = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const sectionFadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

function SEO() {
  return (
    <div className='relative min-h-screen bg-gradient-to-br from-white to-emerald-100 px-4 pt-32 pb-24 flex flex-col items-center text-center'>

      {/* Floating Icons */}
      <motion.div className="absolute top-24 left-8 text-sky-500 text-4xl" variants={floatAnim} animate="float">
        <FaSearch />
      </motion.div>
      <motion.div className="absolute top-72 right-10 text-green-500 text-4xl" variants={floatAnim} animate="float" transition={{ delay: 0.3 }}>
        <FaChartLine />
      </motion.div>
      <motion.div className="absolute bottom-40 left-10 text-blue-500 text-4xl" variants={floatAnim} animate="float" transition={{ delay: 0.6 }}>
        <FaGlobe />
      </motion.div>
      <motion.div className="absolute bottom-24 right-8 text-purple-600 text-4xl" variants={floatAnim} animate="float" transition={{ delay: 0.9 }}>
        <FaMobileAlt />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className='text-5xl font-extrabold mb-6 text-emerald-700'
        initial='hidden'
        animate='visible'
        variants={sectionFadeIn}
      >
        Search Engine Optimization (SEO)
      </motion.h1>

      {/* Intro Text */}
      <motion.p
        className='text-lg text-gray-700 max-w-3xl leading-8 mb-12'
        variants={sectionFadeIn}
        initial='hidden'
        animate='visible'
        custom={1}
      >
        Boost your website’s visibility, increase organic traffic, and climb to the top of search engine results with our powerful and proven SEO strategies.
      </motion.p>

      {/* Services Section */}
      <motion.div
        className='max-w-5xl grid md:grid-cols-3 gap-6 text-left'
        variants={sectionFadeIn}
        initial='hidden'
        animate='visible'
        custom={2}
      >
        <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition'>
          <h3 className='text-xl font-bold mb-2 text-emerald-600'>On-Page SEO</h3>
          <p className='text-gray-600'>Optimize content, tags, and internal links to improve site structure and relevance.</p>
        </div>
        <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition'>
          <h3 className='text-xl font-bold mb-2 text-emerald-600'>Off-Page SEO</h3>
          <p className='text-gray-600'>Enhance your site’s authority with high-quality backlinks and external signals.</p>
        </div>
        <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition'>
          <h3 className='text-xl font-bold mb-2 text-emerald-600'>Technical SEO</h3>
          <p className='text-gray-600'>Fix crawl issues, improve speed, and ensure your site is mobile and search engine friendly.</p>
        </div>
      </motion.div>

      {/* Why SEO? Section */}
      <motion.div
        className='mt-20 max-w-4xl'
        initial='hidden'
        animate='visible'
        variants={sectionFadeIn}
        custom={3}
      >
        <h2 className='text-3xl font-bold text-emerald-700 mb-4'>Why SEO Matters?</h2>
        <ul className='list-disc text-left text-gray-700 space-y-2 pl-5'>
          <li>Increases organic visibility and brand awareness</li>
          <li>Builds trust and credibility with your audience</li>
          <li>Drives targeted, long-term traffic</li>
          <li>Delivers a high ROI compared to paid ads</li>
        </ul>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className='mt-16'
        initial='hidden'
        animate='visible'
        variants={sectionFadeIn}
        custom={4}
      >
        <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Let’s grow your rankings together!</h3>
        <button className='px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl shadow hover:bg-emerald-700 transition'>
          Get a Free SEO Audit
        </button>
      </motion.div>
    </div>
  );
}

export default SEO;
