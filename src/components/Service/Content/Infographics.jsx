import React from "react";
import { motion } from "framer-motion";
import {
  FaPalette,
  FaChartPie,
  FaShapes,
  FaRegLightbulb,
  FaQuestionCircle,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const Infographics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-800">
      {/* Header Section */}
      <Helmet>
        <title>Infographics Design Services | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Infographics Design, Data Visualization, Graphic Design, Adonomics Technologies, Bihar Patna, Infographic Services, Custom Infographics, Visual Storytelling, Data Infographics, Professional Infographics, Infographic Design, Infographic Creation, Infographic Marketing"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Transform complex data into stunning infographics with our expert design services. Engage your audience and enhance understanding."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/infographics" />
        <meta
          property="og:title"
          content="Infographics Design Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Transform complex data into stunning infographics with our expert design services. Engage your audience and enhance understanding."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta 
          property="og:url"
          content="https://adonomicstechnologies.com/infographics"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504711331083-9c895941bf81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-800 opacity-30"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            <FaChartPie className="text-6xl text-white mx-auto mb-6 drop-shadow-lg" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-6"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
          >
            Data-Driven Infographics That Tell a Story
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInUp}
          >
            Turn complex data into visually stunning graphics that engage, inform, and persuade your audience.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeInUp}
          >
            Let's Design Infographics
          </motion.a>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {[
          {
            icon: <FaRegLightbulb />,
            title: "Concept Development",
            desc: "We start by understanding your data and goals to build a visual narrative.",
          },
          {
            icon: <FaShapes />,
            title: "Visual Storyboarding",
            desc: "Create layouts and design wireframes for optimal information flow.",
          },
          {
            icon: <FaPalette />,
            title: "Custom Design",
            desc: "Beautifully designed graphics that match your brand style and tone.",
          },
          {
            icon: <FaChartPie />,
            title: "Final Delivery",
            desc: "High-resolution infographics in all required formats, ready to publish.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={fadeInUp}
          >
            <div className="text-indigo-600 text-4xl mb-4">{item.icon}</div>
            <h4 className="text-xl font-bold mb-2 text-indigo-800">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="mt-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-10"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Why Our Infographics Stand Out
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Data Simplification",
              desc: "We turn numbers into clear, engaging visual stories.",
              icon: "📊",
            },
            {
              title: "Tailored Design",
              desc: "Every infographic is customized to your brand and audience.",
              icon: "🎨",
            },
            {
              title: "Boost Engagement",
              desc: "Infographics increase shares and retention on social platforms.",
              icon: "📈",
            },
            {
              title: "Multi-format Ready",
              desc: "Get your visuals in web, print, and presentation formats.",
              icon: "🖼️",
            },
            {
              title: "Quick Turnaround",
              desc: "Timely delivery without compromising quality.",
              icon: "⚡",
            },
            {
              title: "Experienced Designers",
              desc: "Our team blends creativity with strategic design principles.",
              icon: "💼",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeInUp}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-indigo-700 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-indigo-800 mb-10"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {[
            {
              q: "How long does it take to create an infographic?",
              a: "Typically 3–7 business days depending on complexity and feedback cycles.",
            },
            {
              q: "Can you design infographics based on raw Excel data?",
              a: "Absolutely. We’ll help structure your data into a visual story.",
            },
            {
              q: "Do you offer revisions?",
              a: "Yes, we offer multiple revisions until you're fully satisfied.",
            },
            {
              q: "What file formats do you deliver?",
              a: "We provide high-resolution PNG, PDF, and editable formats upon request.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-2 text-indigo-700 font-semibold">
                <FaQuestionCircle className="mr-2" /> {faq.q}
              </div>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Let's Make Data Look Beautiful
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6 max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          Reach out now to create impactful infographics that your audience will remember.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-800 transition"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          Get Started
        </motion.a>
      </section>
      <div className="py-12"></div>
    </div>
  );
};

export default Infographics;
