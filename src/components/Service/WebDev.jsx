import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWordpressSimple,
  FaWrench,
  FaPager,
  FaPaintBrush,
  FaCode,
  FaMobileAlt,
  FaUsers,
  FaSearch,
  FaChartLine,
  FaApple,
  FaLaptopCode,
  FaShieldAlt,
  FaRocket,
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
  const webServices = [
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

  const uxuiServices = [
    {
      icon: <FaSearch />,
      title: "Research & Wireframes",
      desc: "We dig into how your users think, building logical wireframes to plan intuitive layouts.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Custom UI Design",
      desc: "Clean, modern visuals tailored to your brand, ensuring a unique and engaging interface.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile-First Design",
      desc: "Designs optimized for mobile users, ensuring seamless functionality on all screens.",
    },
    {
      icon: <FaChartLine />,
      title: "Interactive Prototypes",
      desc: "Clickable prototypes to test and refine the user experience before development.",
    },
    {
      icon: <FaUsers />,
      title: "User Testing & Feedback",
      desc: "Rigorous testing to eliminate bugs and ensure a natural, user-friendly flow.",
    },
  ];

  const appServices = [
    {
      icon: <FaApple />,
      title: "iOS & Android Development",
      desc: "Native and cross-platform apps for seamless performance on mobile devices.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Apps & PWAs",
      desc: "Progressive web apps that deliver app-like experiences in browsers.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "User-focused designs crafted to enhance engagement and usability.",
    },
    {
      icon: <FaCode />,
      title: "Backend API Integration",
      desc: "Robust APIs to connect your app with powerful backend functionality.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Compliance",
      desc: "Built-in security measures to protect user data and meet regulations.",
    },
    {
      icon: <FaRocket />,
      title: "App Launch & Maintenance",
      desc: "From App Store deployment to ongoing updates and support.",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website or app?",
      answer:
        "Typical timelines range from 2 to 6 weeks for websites and 8 to 16 weeks for apps, depending on complexity, features, and platform requirements.",
    },
    {
      question: "Do you offer website and app maintenance?",
      answer:
        "Yes, we provide monthly maintenance plans that cover updates, backups, and security checks for both websites and apps.",
    },
    {
      question: "Can you redesign an existing website or app?",
      answer:
        "Absolutely! We can refresh your website or app with a modern look, improved performance, and better user experience.",
    },
    {
      question: "Will my website or app be SEO-friendly?",
      answer:
        "Yes, our websites and apps are built with SEO best practices, including fast load times, meta tags, and clean URLs.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-indigo-900/70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            className="text-2xl sm:text-2xl lg:text-6xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            Web, UX/UI & App Development Services
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Build powerful websites, intuitive digital experiences, and apps that win hearts and scale businesses with Adonomics Technologies.
          </motion.p>
          <motion.a
            href="/contact"
            className="mt-6 inline-block bg-white text-indigo-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
      </section>

      {/* Web Development Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-12"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          Our Web Development Expertise
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {webServices.map((item, i) => (
            <motion.div
              key={i}
              className="bg-indigo-50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl text-indigo-600 mb-4 mx-auto">{item.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* UX/UI Design Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-12"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            UX/UI Design: Great Design Isn’t Just Pretty—It’s Easy to Use
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
              className="space-y-6 text-lg text-gray-700"
            >
              <p>
                Let’s be real. Most people don’t notice good design. But they definitely notice when it’s bad. Ever clicked on a website or app and instantly wanted to leave? Maybe it was confusing, too cluttered, or just plain slow. That’s where smart UX/UI design comes in—and that’s what we do at Adonomics Technologies.
              </p>
              <p>
                We create digital experiences that are smooth, smart, and easy to love. Because a clean design isn’t about showing off—it’s about helping real people get what they came for, without all the extra noise.
              </p>
              <p>
                <strong>So, What’s UX/UI Design Really All About?</strong> UX (User Experience) is how someone feels when they’re using your app or website. UI (User Interface) is how it looks. Put the two together, and you’ve got the perfect combo of function and beauty.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-first lg:order-last"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1720025910347-6286f827471d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWklMjB1eHxlbnwwfHwwfHx8MA%3D%3D"
                alt="UX/UI Design"
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
          <motion.h3
            className="text-2xl font-semibold text-indigo-800 text-center mb-8"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            What We Do for You
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uxuiServices.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
                initial="hidden"
                animate="visible"
                custom={i + 3}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl text-indigo-600 mb-4 mx-auto">{item.icon}</div>
                <h4 className="text-xl font-semibold text-indigo-800 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Development Section */}
      <section className="py-20 px-6 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-12"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            App Development: From Sketch to Screen
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
              className="space-y-6 text-lg text-gray-700"
            >
              <p>
                You don’t just need an app. You need a <strong>very good app</strong>. One that users love, competitors notice, and your business benefits from. At Adonomics Technologies, we build apps that do more than function—they win hearts, simplify lives, and scale businesses.
              </p>
              <p>
                Whether it’s a sleek mobile app or a robust web app, our process is hands-on, fast-moving, and obsessively focused on quality. From initial ideation to App Store launch, our team handles design, development, testing, and deployment—while keeping you looped in every step of the way.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-first lg:order-last"
            >
              <img
                src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcCUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
                alt="App Development"
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
          <motion.h3
            className="text-2xl font-semibold text-indigo-800 text-center mb-8"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            Our App Development Services
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appServices.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
                initial="hidden"
                animate="visible"
                custom={i + 3}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl text-indigo-600 mb-4 mx-auto">{item.icon}</div>
                <h4 className="text-xl font-semibold text-indigo-800 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-indigo-800 mb-8"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            Why Choose Adonomics?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Our team blends creativity with technical excellence. We craft websites, digital experiences, and apps that are fast, scalable, and designed to convert visitors into customers. We don’t just care about making things look good—we care about how they feel.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "✅ Cross-Platform Excellence",
                desc: "Seamless performance across web, iOS, and Android platforms.",
              },
              {
                title: "✅ Agile Development",
                desc: "Fast-moving process with regular updates and clear communication.",
              },
              {
                title: "✅ Post-Launch Support",
                desc: "Ongoing maintenance and updates to keep your app or site running smoothly.",
              },
              {
                title: "✅ Affordable & Scalable",
                desc: "Solutions for startups and enterprise-grade quality for larger firms.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="visible"
                custom={i + 2}
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-lg text-indigo-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-10"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 pb-4"
              initial="hidden"
              animate="visible"
              custom={index + 1}
              variants={fadeIn}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-semibold text-indigo-800 flex justify-between items-center hover:text-indigo-600 transition"
              >
                {faq.question}
                <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <motion.p
                  className="mt-2 text-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-800 py-16 text-white text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Build Something Great Together
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Need a custom website, a user-friendly digital experience, or a winning app? We’ve got you covered.
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-white text-indigo-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

export default WebDev;