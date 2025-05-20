import React from "react";
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaRocket,
  FaPenFancy,
  FaChartBar,
} from "react-icons/fa";

const PaidMarketingServices = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?ga=GA1.1.2042548242.1742870541&semt=ais_hybrid&w=740"
            alt="Paid Marketing Services"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Paid Marketing Services by <span className="text-emerald-600">Adonomics Technologies</span>
          </h1>
          <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
            In business, visibility is everything—but visibility without strategy is just noise. We deliver laser-focused paid marketing strategies that turn your ad budget into measurable results.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-emerald-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-emerald-700 transition duration-300"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#services"
              className="inline-block bg-transparent py-3 px-8 border border-white rounded-md text-base font-medium text-white hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Platforms We Master
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We manage ads across leading platforms to ensure your message reaches the right audience.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: FaGoogle, name: "Google Ads", color: "text-green-600" },
              { icon: FaFacebook, name: "Facebook", color: "text-blue-600" },
              { icon: FaInstagram, name: "Instagram", color: "text-pink-600" },
              { icon: FaLinkedin, name: "LinkedIn", color: "text-blue-700" },
              { icon: FaYoutube, name: "YouTube", color: "text-red-600" },
            ].map((platform, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col items-center"
              >
                <div
                  className={`p-3 rounded-full bg-white shadow-md ${platform.color}`}
                >
                  <platform.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Paid Marketing by <span className="text-emerald-600">Adonomics Technologies</span>
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  In business, visibility is everything—but visibility without strategy is just noise. That’s why paid marketing isn’t just about throwing money at ads. It’s about precision. It’s about making every dollar count. And that’s exactly what we do at Adonomics Technologies.
                </p>
                <p>
                  We help brands reach the right people at the right time using laser-focused paid marketing strategies that actually generate results. No fluff, no wasted budget—just clear, measurable outcomes. Whether you’re launching a new offer or scaling up an existing product, we know how to get your message in front of people who are ready to take action.
                </p>
              </div>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900">Targeted Ads That Drive Real Action</h3>
              <div className="mt-4 space-y-4 text-gray-600">
                <p>
                  A boosted post isn’t a strategy. At Adonomics, we dig deeper. Before we launch any ad, we get to know your brand inside and out—what you sell, who you’re speaking to, and what your goals are. Then, we design a custom campaign that’s built for conversion.
                </p>
                <p>
                  Our media buying team is obsessed with results. We research, test, and optimize every step of the funnel—from the headline to the call to action. We don’t guess; we analyze. That means lower costs per click, better engagement, and higher returns.
                </p>
                <p>
                  We manage ads across platforms like: <strong>Google Search & Display Network, Meta (Facebook & Instagram), LinkedIn Ads, YouTube Pre-Roll, Programmatic Display & Retargeting.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Performance Marketing That’s Built to Scale
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              The beauty of paid marketing is speed. Within days, you’ll start seeing data on what’s working and where we can improve. We treat your ad budget like it’s our own—no careless spending, no broad targeting, and no cookie-cutter campaigns.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Higher Conversion Rates",
                description: "Optimized ads for better click-through and conversions",
                stat: "2x-5x"
              },
              {
                title: "Strategic Retargeting",
                description: "Re-engage warm audiences for higher ROI",
                stat: "150%+"
              },
              {
                title: "A/B Testing",
                description: "Refined messaging through continuous testing",
                stat: "100%+"
              },
              {
                title: "Funnel Optimization",
                description: "Seamless journey from ad click to sale",
                stat: "200%+"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-3xl font-bold text-emerald-600">{item.stat}</div>
                <h3 className="text-lg font-medium text-gray-900 mt-2">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Done-for-You Campaigns With a Dedicated Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              When you partner with us, you get more than just ad setup. You get a full campaign built around your goals—everything you need to launch and grow.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Audience Research",
                  description: "In-depth persona development to target the right customers.",
                  icon: FaUsers,
                  iconColor: "text-emerald-600 bg-emerald-50"
                },
                {
                  title: "Ad Creatives",
                  description: "Banners, carousels, and video snippets designed to convert.",
                  icon: FaPenFancy,
                  iconColor: "text-blue-600 bg-blue-50"
                },
                {
                  title: "Campaign Setup",
                  description: "Strategic setup, testing, and scaling for optimal results.",
                  icon: FaRocket,
                  iconColor: "text-purple-600 bg-purple-50"
                },
                {
                  title: "Conversion Tracking",
                  description: "Pixel integration and tracking for measurable outcomes.",
                  icon: FaBullseye,
                  iconColor: "text-red-600 bg-red-50"
                },
                {
                  title: "Performance Insights",
                  description: "Weekly insights and monthly deep dives into campaign performance.",
                  icon: FaChartBar,
                  iconColor: "text-yellow-600 bg-yellow-50"
                },
                {
                  title: "Funnel Optimization",
                  description: "End-to-end optimization from ad click to sale.",
                  icon: FaChartLine,
                  iconColor: "text-pink-600 bg-pink-50"
                },
              ].map((service, index) => (
                <div key={index} className="group">
                  <div className="h-full p-6 border border-gray-200 rounded-lg hover:border-emerald-500 transition duration-300">
                    <div className={`inline-flex items-center justify-center p-3 rounded-lg ${service.iconColor}`}>
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Real Results from Real Campaigns
            </h2>
            <p className="mt-4 max-w-full text-xl text-gray-600 mx-auto">
              We’ve helped eCommerce brands triple their monthly revenue with smart retargeting ads. We’ve generated B2B leads for under $5 per qualified contact. And we’ve helped local businesses sell out product launches in less than 24 hours. These aren’t hypotheticals. They’re outcomes. And they come from paid marketing campaigns backed by experience, creativity, and data.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Maximize Your Marketing ROI?
          </h2>
          <p className="mt-4 max-w-full text-xl text-emerald-100 mx-auto">
            If you’re tired of wasting money on ads that don’t convert—or if you’ve never tried paid marketing but know you need a push—this is your sign. Adonomics Technologies is here to turn your ad budget into a growth engine. Let’s talk about what you want to achieve—and then let’s make it happen.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50 transition duration-300"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-emerald-700 transition duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaidMarketingServices;