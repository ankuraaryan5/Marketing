import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

function PaidMarketing() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-indigo-900/70"></div>
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.h1
            className="text-2xl sm:text-2xl lg:text-6xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            Paid Marketing: Reach the Right People at the Right Time
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            At Adonomics Technologies, we make every marketing dollar count—because visibility without strategy is just noise.
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
            Start Your Campaign
          </motion.a>
        </div>
      </section>

      {/* Paid Marketing Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-indigo-50 to-white text-gray-800">
  <div className="max-w-6xl mx-auto space-y-20">
    {/* Heading */}
    <motion.h2
      className="text-4xl sm:text-5xl font-bold text-center text-indigo-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Paid Marketing Services by Adonomics Technologies
    </motion.h2>

    {/* Section 1 */}
    <motion.div
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p>
        In business, visibility is everything—but visibility without strategy is just noise.
        That’s why paid marketing isn’t just about throwing money at ads. It’s about precision.
        It’s about making every dollar count. And that’s exactly what we do at{" "}
        <span className="font-semibold text-indigo-700">Adonomics Technologies</span>.
      </p>
      <p>
        We help brands reach the right people at the right time using laser-focused paid marketing
        strategies that actually generate results. No fluff, no wasted budget—just clear, measurable
        outcomes. Whether you’re launching a new offer or scaling up an existing product, we know
        how to get your message in front of people who are ready to take action.
      </p>
    </motion.div>

    {/* Section 2 */}
    <motion.div
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="text-2xl font-bold text-indigo-700">
        Targeted Ads That Drive Real Action
      </p>
      <p>
        A boosted post isn’t a strategy. At Adonomics, we dig deeper. Before we launch any ad, we
        get to know your brand inside and out—what you sell, who you’re speaking to, and what your
        goals are. Then, we design a custom campaign that’s built for conversion.
      </p>
      <p>
        Our media buying team is obsessed with results. We research, test, and optimize every step
        of the funnel—from the headline to the call to action. We don’t guess; we analyze. That
        means lower costs per click, better engagement, and higher returns.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Google Search & Display Network</li>
        <li>Meta (Facebook & Instagram)</li>
        <li>LinkedIn Ads</li>
        <li>YouTube Pre-Roll</li>
        <li>Programmatic Display & Retargeting</li>
      </ul>
    </motion.div>

    {/* Section 3 */}
    <motion.div
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <p className="text-2xl font-bold text-indigo-700">
        Performance Marketing That’s Built to Scale
      </p>
      <p>
        The beauty of paid marketing is speed. Within days, you’ll start seeing data on what’s
        working and where we can improve. We treat your ad budget like it’s our own—no careless
        spending, no broad targeting, and no cookie-cutter campaigns.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Higher click-through and conversion rates</li>
        <li>Strategic retargeting for warm audiences</li>
        <li>A/B testing that refines your message</li>
        <li>Funnel optimization from ad to sale</li>
        <li>Transparent reports that show what you’re getting</li>
      </ul>
    </motion.div>

    {/* Section 4 */}
    <motion.div
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <p className="text-2xl font-bold text-indigo-700">
        Done-for-You Campaigns With a Dedicated Team
      </p>
      <p>
        When you partner with us, you get more than just ad setup. You get a full campaign built
        around your goals—from creative design to copywriting, landing pages, tracking pixels, and
        performance reports. It’s everything you need to launch and grow—without lifting a finger.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Audience research & persona development</li>
        <li>Ad creatives (banners, carousels, video snippets)</li>
        <li>Campaign setup, testing, and scaling</li>
        <li>Conversion tracking & pixel integration</li>
        <li>Weekly performance insights & monthly deep dives</li>
      </ul>
      <p>
        We keep you in the loop but out of the weeds, so you can focus on what you do best—running
        your business.
      </p>
    </motion.div>

    {/* Section 5 */}
    <motion.div
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <p className="text-2xl font-bold text-indigo-700">
        Real Results from Real Campaigns
      </p>
      <p>
        We’ve helped eCommerce brands triple their monthly revenue with smart retargeting ads.
        We’ve generated B2B leads for under $5 per qualified contact. And we’ve helped local
        businesses sell out product launches in less than 24 hours.
      </p>
      <p>
        These aren’t hypotheticals. They’re outcomes. And they come from paid marketing campaigns
        backed by experience, creativity, and data.
      </p>
    </motion.div>

    {/* Final Call to Action */}
    <motion.div
      className="bg-indigo-100 p-8 rounded-2xl shadow-lg text-center space-y-4"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl font-bold text-indigo-700">
        Ready to Maximize Your Marketing ROI?
      </p>
      <p>
        If you’re tired of wasting money on ads that don’t convert—or if you’ve never tried paid
        marketing but know you need a push—this is your sign.
      </p>
      <p>
        <span className="font-semibold text-indigo-700">Adonomics Technologies</span> is here to
        turn your ad budget into a growth engine.
      </p>
      <p className="font-semibold text-indigo-700 text-lg">
        Let’s talk about what you want to achieve—and then let’s make it happen.
        Book a free strategy call with our paid media team today.
      </p>
      <p>
        You’ll walk away with clarity, a plan, and maybe even a few “aha” moments that shift how you
        see digital marketing.
      </p>
    </motion.div>
  </div>
</section>

    </div>
  );
}

export default PaidMarketing;
