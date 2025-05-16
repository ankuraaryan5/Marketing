import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWordpressSimple,
  FaWrench,
  FaPager,
  FaPaintBrush,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

function WebDev() {
  const services = [
    {
      icon: <FaWordpressSimple />,
      title: "WordPress Development",
      desc: "Custom WordPress themes and plugins tailored to your brand's needs.",
    },
    {
      icon: <FaWrench />,
      title: "Website Maintenance",
      desc: "Ongoing updates, backups, and security monitoring to keep your site running smoothly.",
    },
    {
      icon: <FaPager />,
      title: "Landing Page Creation",
      desc: "High-converting landing pages designed for marketing campaigns and lead generation.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Web Design",
      desc: "Modern, user-focused UI/UX designs that enhance engagement and conversion.",
    },
    {
      icon: <FaCode />,
      title: "Custom Web Development",
      desc: "Full-stack development tailored to your specific business logic and features.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Mobile-first websites that look great and function flawlessly on all devices.",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Typical timelines range from 2 to 6 weeks depending on complexity, number of pages, and required functionality.",
    },
    {
      question: "Do you offer website maintenance?",
      answer:
        "Yes, we provide monthly maintenance plans that cover updates, backups, and security checks.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Absolutely! We can give your current website a modern look, improved speed, and better mobile responsiveness.",
    },
    {
      question: "Will my website be SEO friendly?",
      answer:
        "Yes, all our websites are built with SEO best practices in mind including fast load times, meta tags, and clean URLs.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-indigo-900/60"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            Web Development Services
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Powerful, user-friendly websites that drive results. From design to
            development, we build solutions that elevate your brand.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          Our Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              className="bg-indigo-50 p-6 rounded-2xl shadow text-center"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeIn}
            >
              <div className="text-4xl text-indigo-600 mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Our team blends creativity with technical excellence. We craft
            websites that are fast, scalable, and designed to convert visitors
            into customers.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeIn}
            >
              <h3 className="font-semibold text-lg mb-2">
                ✅ SEO & Performance Optimized
              </h3>
              <p className="text-gray-700">
                Fast-loading and SEO-friendly websites to rank higher on search
                engines.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeIn}
            >
              <h3 className="font-semibold text-lg mb-2">
                ✅ Scalable Architecture
              </h3>
              <p className="text-gray-700">
                Built with growth in mind, ready for new features and traffic
                spikes.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeIn}
            >
              <h3 className="font-semibold text-lg mb-2">
                ✅ Transparent Communication
              </h3>
              <p className="text-gray-700">
                Regular updates, clear timelines, and complete visibility into
                your project.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeIn}
            >
              <h3 className="font-semibold text-lg mb-2">
                ✅ End-to-End Solutions
              </h3>
              <p className="text-gray-700">
                From domain setup to launch and beyond—we handle everything for
                you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-semibold flex justify-between items-center"
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-800 py-16 text-white text-center">
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Something Great</h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Need a custom website, a redesign, or help maintaining an existing one? We’ve got you covered.
          </p>
          <button className="bg-white text-indigo-800 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Get a Free Quote
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default WebDev;
