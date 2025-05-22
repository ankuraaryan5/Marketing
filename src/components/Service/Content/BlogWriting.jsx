import React from "react";
import { motion } from "framer-motion";
import { FaPenFancy, FaLightbulb, FaUserEdit, FaFileAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const BlogWriting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 text-gray-800">
      <Helmet>
        <title>Blog Writing Services | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Blog Writing,Blog Writing Formate, Content Writing, Content Marketing, SEO Blogs, Adonomics Technologies Bihar Patna, Blog Writing Services, Professional Blog Writing, Content Creation, Digital Marketing"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Transform your brand's voice with our expert blog writing services. Engage your audience and boost SEO with high-quality content."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/blog-writing"
        />
        <meta
          property="og:title"
          content="Blog Writing Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Transform your brand's voice with our expert blog writing services. Engage your audience and boost SEO with high-quality content."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/blog-writing"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      {/* Header Section with background image and overlay */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-30 "></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            <FaPenFancy className="text-6xl text-white mx-auto mb-6 drop-shadow-lg" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-6"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
          >
            Masterful Blog Writing That Converts
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInUp}
          >
            From catchy headlines to in-depth storytelling — our blogs captivate
            readers and inspire action. Perfectly tailored for your audience and
            brand voice.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeInUp}
          >
            Get Your Blog Strategy
          </motion.a>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {[
          {
            icon: <FaLightbulb />,
            title: "Topic Ideation",
            desc: "We brainstorm trending and SEO-rich topics your audience wants to read.",
          },
          {
            icon: <FaUserEdit />,
            title: "Engaging Writing",
            desc: "Every article is crafted to inform, entertain, and convert — no fluff, just value.",
          },
          {
            icon: <FaFileAlt />,
            title: "Optimized Structure",
            desc: "SEO-friendly formatting, scannable headings, and CTA placement built-in.",
          },
          {
            icon: <FaPenFancy />,
            title: "Consistent Voice",
            desc: "We ensure your brand tone is maintained across all blogs, building trust.",
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
            <div className="text-purple-600 text-4xl mb-4">{item.icon}</div>
            <h4 className="text-xl font-bold mb-2 text-purple-800">
              {item.title}
            </h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Why Choose Our Blog Writing Services?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Tailored Content",
              desc: "Each blog is uniquely crafted to align with your niche, brand tone, and target audience.",
              icon: "🧵",
            },
            {
              title: "SEO Expertise",
              desc: "Our content ranks higher thanks to keyword research, meta structuring, and technical SEO.",
              icon: "🚀",
            },
            {
              title: "Timely Delivery",
              desc: "Consistent and reliable delivery ensures your content calendar stays on track.",
              icon: "⏱️",
            },
            {
              title: "Unlimited Revisions",
              desc: "We refine your blogs until you're fully satisfied. No compromise on quality.",
              icon: "🔄",
            },
            {
              title: "Niche Versatility",
              desc: "Tech, health, finance, lifestyle — we cover it all with subject matter expertise.",
              icon: "📚",
            },
            {
              title: "Engagement Focused",
              desc: "Each article is crafted to retain attention and encourage user interaction.",
              icon: "💬",
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
              <h4 className="text-xl font-bold text-purple-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-24 text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-purple-800 mb-4"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Ready to Blog with Impact?
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6 max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          Let's plan your editorial calendar and create content that drives
          results.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-800 transition"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          Start Blogging Today
        </motion.a>
      </section>
      <div className="py-12"></div>
    </div>
  );
};

export default BlogWriting;
