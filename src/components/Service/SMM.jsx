import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const floatAnim = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
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

function SMM() {
  return (
    <div>
      <section id="smm-services" className="relative bg-blue-800 text-white">
        <div
          className="absolute inset-0 bg-black opacity-50"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <h1 className="text-4xl mt-10 md:text-5xl font-bold mb-4">
            Boost Your Brand with Powerful Social Media Marketing!
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We craft high-converting social media strategies to grow your
            audience, engagement, and sales across platforms like Instagram,
            Facebook, and LinkedIn.
          </p>
          <a
            href="/smm-strategy"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            aria-label="Get a Free SMM Consultation"
          >
            Get a Free SMM Consultation
          </a>
        </div>
      </section>
      <div className="relative min-h-screen bg-gradient-to-br from-white to-emerald-100 px-4 pt-32 pb-24 flex flex-col items-center text-center">
        {/* Floating Icons */}
        <motion.div
          className="absolute top-24 left-8 text-blue-500 text-4xl"
          variants={floatAnim}
          animate="float"
        >
          <FaFacebook />
        </motion.div>
        <motion.div
          className="absolute top-72 right-10 text-pink-500 text-4xl"
          variants={floatAnim}
          animate="float"
          transition={{ delay: 0.3 }}
        >
          <FaInstagram />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-10 text-sky-400 text-4xl"
          variants={floatAnim}
          animate="float"
          transition={{ delay: 0.6 }}
        >
          <FaTwitter />
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-8 text-blue-700 text-4xl"
          variants={floatAnim}
          animate="float"
          transition={{ delay: 0.9 }}
        >
          <FaLinkedin />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-emerald-700"
          initial="hidden"
          animate="visible"
          variants={sectionFadeIn}
        >
          Social Media Marketing
        </motion.h1>

        {/* Intro Text */}
        <motion.p
          className="text-lg text-gray-700 max-w-3xl leading-8 mb-12"
          variants={sectionFadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Grow your brand's presence with expertly crafted social media
          campaigns tailored to your audience. Engage, inspire, and convert your
          followers into loyal customers with our result-driven strategies.
        </motion.p>

        {/* Section: Services */}
        <motion.div
          className="max-w-5xl grid md:grid-cols-3 gap-6 text-left"
          variants={sectionFadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-emerald-600">
              Content Creation
            </h3>
            <p className="text-gray-600">
              We design compelling and branded content that captures attention
              and drives engagement across platforms.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-emerald-600">
              Ad Campaigns
            </h3>
            <p className="text-gray-600">
              Target the right audience with laser-focused paid ads optimized
              for reach, clicks, and conversions.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-emerald-600">
              Analytics & Reporting
            </h3>
            <p className="text-gray-600">
              Track your performance with in-depth analytics and get clear
              reports on what’s working and what’s not.
            </p>
          </div>
        </motion.div>

        {/* Section: Why Choose Us */}
        <motion.div
          className="mt-20 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={sectionFadeIn}
          custom={3}
        >
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc text-left text-gray-700 space-y-2 pl-5">
            <li>Tailored strategies based on your business goals</li>
            <li>Creative team with trend-aware content creation</li>
            <li>Affordable pricing and measurable results</li>
            <li>Dedicated account managers & monthly reviews</li>
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16"
          initial="hidden"
          animate="visible"
          variants={sectionFadeIn}
          custom={4}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to elevate your social presence?
          </h3>
          <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl shadow hover:bg-emerald-700 transition">
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default SMM;
