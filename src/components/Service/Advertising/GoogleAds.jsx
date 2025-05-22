import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const GoogleAds = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Google Ads | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Google Ads, PPC Advertising, Digital Marketing, Adonomics Technologies"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Maximize your ROI with our expert Google Ads services. Drive targeted traffic and increase conversions with our tailored PPC strategies."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/google-ads"
        />
        <meta
          property="og:title"
          content="Google Ads | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Maximize your ROI with our expert Google Ads services. Drive targeted traffic and increase conversions with our tailored PPC strategies."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/google-ads"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/13628541/pexels-photo-13628541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="flex justify-center mb-2">
                <span className="text-4xl font-bold text-blue-200">G</span>
                <span className="text-4xl font-bold text-red-500">o</span>
                <span className="text-4xl font-bold text-yellow-500">o</span>
                <span className="text-4xl font-bold text-blue-200">g</span>
                <span className="text-4xl font-bold text-green-500">l</span>
                <span className="text-4xl font-bold text-red-500">e</span>
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                Google Ads
              </span>{" "}
              Mastery
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Dominate search results and reach customers at the perfect moment
              with precision-targeted campaigns.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    Start Your Campaign
                  </button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50">
                    Get Free Audit
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Feature Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center mb-12">
              Google Ads: Getting Found by the Right People at the Right Moment
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-start text-lg text-gray-700 leading-relaxed">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                  alt="Google Ads Click Icon"
                  className="w-16"
                />
                <p>
                  Let’s be honest. When people need something these days, they
                  almost always head to Google first. Whether they are looking
                  for a product, a local service, or just doing research before
                  making a decision, Google is often the starting point. That is
                  what makes Google Ads such a powerful tool for businesses of
                  all sizes. It allows you to show up right when someone is
                  actively searching for what you offer.
                </p>
                <p>
                  Google Ads runs on a pay-per-click model. You are not spending
                  money just for your ad to appear. You only pay when someone
                  actually clicks on it. This means every dollar you spend is
                  tied to actual interest, not just vague visibility. You are
                  reaching people who are already in the mindset to learn more
                  or even make a purchase.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                  alt="Location Targeting"
                  className="w-16"
                />
                <p>
                  The beauty of Google Ads lies in the intent behind the search.
                  When someone types in something like “emergency plumber near
                  me” or “affordable web design,” they are not just browsing.
                  They have a clear need. If your business appears at the top of
                  those search results, you are meeting them at the perfect
                  moment.
                </p>
                <p>
                  You also get a high level of control. You can choose who sees
                  your ads based on location, time, device, age, and even search
                  behavior. Want to reach people in Los Angeles using mobile
                  phones between 6 and 10 in the evening? Google Ads makes that
                  possible. You can set your budget, pause your campaigns
                  whenever needed, and fine-tune your approach as you go.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3463/3463640.png"
                  alt="Analytics and Conversion"
                  className="w-16"
                />
                <p>
                  What truly makes Google Ads valuable is the data it provides.
                  You get access to real insights. You can see which search
                  terms triggered your ads, what messages led to the most
                  clicks, and which keywords resulted in conversions. That kind
                  of information allows you to improve your campaigns over time
                  and maximize your return.
                </p>
                <p>
                  At Adonomics Technology, we help businesses use Google Ads
                  effectively by doing more than just launching a campaign. We
                  focus on smart keyword research, writing ad copy that speaks
                  to your audience, and managing the process with constant
                  optimization. It is not about getting traffic just for the
                  sake of it. The goal is to attract the right kind of traffic
                  and turn visitors into paying customers.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
                  alt="Growth with Ads"
                  className="w-16"
                />
                <p>
                  With the right strategy, Google Ads can be a game changer. It
                  puts your business in front of the right people at the right
                  time and gives you the tools to grow quickly and efficiently.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-white mb-6"
          >
            Ready to Dominate Google Search?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8"
          >
            Our certified Google Ads specialists will build campaigns that
            convert.
          </motion.p>
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
            >
              Get Your Free Strategy Session
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoogleAds;
