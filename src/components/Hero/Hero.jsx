import { motion } from "framer-motion";
import {FiArrowRight,} from "react-icons/fi";
import { Link } from "react-router-dom";
const DigitalMarketingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                  Grow Your Business
                </span>
                <br />
                With Digital Marketing
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-6 text-lg text-gray-600"
              >
                We help businesses increase their online visibility and generate
                more leads through proven digital marketing strategies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link to="/about">
                <button className="cursor-pointer px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center">
                  Get Started <FiArrowRight className="ml-2" />
                </button></Link>
                <Link to="/contact">
                <button className="cursor-pointer px-8 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-all border border-gray-200 shadow-sm">
                  Contact Us
                </button></Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-2 rounded-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Marketing"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400 rounded-xl opacity-20 z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-xl opacity-20 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;