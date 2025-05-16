import React from "react";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaChartLine,
  FaCogs,
  FaLightbulb,
  FaShieldAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-40"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            <FaChartLine className="text-6xl text-white mx-auto mb-6 drop-shadow-lg" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-6"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
          >
            Actionable Insights with Advanced Analytics
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInUp}
          >
            Empower your business decisions with real-time data tracking, performance analysis, and strategic forecasting.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeInUp}
          >
            Let's Analyze Together
          </motion.a>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {[
          {
            icon: <FaDatabase />,
            title: "Data Collection",
            desc: "We gather data from multiple sources including web, CRM, and social channels.",
          },
          {
            icon: <FaCogs />,
            title: "Data Processing",
            desc: "We clean, normalize, and transform your data for deeper analysis.",
          },
          {
            icon: <FaChartLine />,
            title: "Insight Generation",
            desc: "Uncover trends, behaviors, and KPIs with cutting-edge tools and techniques.",
          },
          {
            icon: <FaLightbulb />,
            title: "Decision Support",
            desc: "Get dashboards and reports that help make smart, data-driven decisions.",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={fadeInUp}
          >
            <div className="text-blue-600 text-4xl mb-4">{step.icon}</div>
            <h4 className="text-xl font-bold mb-2 text-blue-800">{step.title}</h4>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Key Benefits */}
      <section className="mt-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Why Choose Our Analytics Services?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "📊",
              title: "Real-Time Dashboards",
              desc: "Always up-to-date metrics at your fingertips.",
            },
            {
              icon: "🧠",
              title: "Predictive Analytics",
              desc: "Anticipate market behavior and customer trends.",
            },
            {
              icon: "🔎",
              title: "In-depth Reporting",
              desc: "Custom reports tailored to your business goals.",
            },
            {
              icon: "⚙️",
              title: "Automated Pipelines",
              desc: "Streamlined data flow from collection to insight.",
            },
            {
              icon: "🛡️",
              title: "Secure & Compliant",
              desc: "Data privacy, GDPR compliance, and encryption built-in.",
            },
            {
              icon: "📈",
              title: "ROI-Driven Insights",
              desc: "Make smarter decisions that directly impact revenue.",
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
              <h4 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-blue-800 mb-10"
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
              q: "Which analytics tools do you use?",
              a: "We use a mix of tools including Google Analytics, Power BI, Tableau, and custom dashboards.",
            },
            {
              q: "Can I get real-time data updates?",
              a: "Yes. Our dashboards can be updated live using APIs or automated pipelines.",
            },
            {
              q: "Do you provide support for setting up tracking?",
              a: "Absolutely. We help set up GA4, pixel tracking, event monitoring, and more.",
            },
            {
              q: "Is my data secure?",
              a: "Yes. We ensure all data is encrypted and comply with GDPR and other data protection laws.",
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
              <div className="flex items-center mb-2 text-blue-700 font-semibold">
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
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Start Turning Your Data into Results
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6 max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          Let’s uncover powerful insights and boost your performance through data-driven strategies.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          Schedule a Consultation
        </motion.a>
      </section>
      <div className="py-12"></div>
    </div>
  );
};

export default Analytics;
