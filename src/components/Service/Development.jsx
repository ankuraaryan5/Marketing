import React from "react";
import { FaCode, FaMobileAlt, FaLaptopCode, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Development = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white text-gray-800 overflow-hidden relative">
      <motion.div
        className="absolute top-20 left-10 text-blue-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaLaptopCode />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-blue-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaMobileAlt />
      </motion.div>

      <section
        className="relative z-10 text-center px-6 py-24 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-80 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaCode className="text-6xl mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Modern, Responsive & Scalable <br />
             Development
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We build high-performing websites and apps for all devices.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Start Your Project Today
          </a>
        </div>
      </section>

      

      <section className="bg-gradient-to-br from-blue-100 to-blue-50 py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 text-lg">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaLaptopCode className="text-3xl mb-4 text-blue-600" />
              <h4 className="font-bold mb-2">Responsive Design</h4>
              <p>Optimized for mobile, tablet, and desktop screens.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaCogs className="text-3xl mb-4 text-blue-600" />
              <h4 className="font-bold mb-2">Scalable Architecture</h4>
              <p>Future-ready solutions that grow with your business.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaMobileAlt className="text-3xl mb-4 text-blue-600" />
              <h4 className="font-bold mb-2">Cross-Platform Apps</h4>
              <p>Build once, run anywhere with React, Next.js, or PWA.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-blue-900 text-center">
          Our Development Process
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">📝 Planning & Research</h3>
            <p>
              We understand your goals and design a tech-driven roadmap aligned
              to your audience.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">💡 UI/UX & Prototyping</h3>
            <p>
              Beautiful, user-centric interfaces that are intuitive and
              conversion-optimized.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">⚙️ Development & Testing</h3>
            <p>
              Clean, scalable code with rigorous testing to ensure performance
              and security.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">🚀 Deployment & Support</h3>
            <p>
              From launch to post-launch, we monitor, maintain, and optimize.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Build Something Amazing with Us
          </h2>
          <p className="text-lg mb-6">
            Get in touch to transform your idea into a digital experience.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Let’s Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Development;
