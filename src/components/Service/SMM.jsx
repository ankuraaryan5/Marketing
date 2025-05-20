import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaCalendarAlt,
  FaPenFancy,
  FaThumbsUp,
} from "react-icons/fa";

const SocialMediaManagement = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="Social Media Management"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Social Media Management
          </h1>
          <p className="mt-6 text-xl text-emerald-100 max-w-3xl mx-auto">
            We create, curate, and manage your social media presence to build
            your brand, engage your audience, and drive real business results.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="cursor-pointer inline-block bg-emerald-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-emerald-700 transition duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      {/* Platforms We Manage */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Platforms We Specialize In
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We manage all major social media platforms to maximize your online
              presence
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: FaFacebook, name: "Facebook", color: "text-blue-600" },
              { icon: FaInstagram, name: "Instagram", color: "text-pink-600" },
              { icon: FaTwitter, name: "Twitter", color: "text-blue-400" },
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
      </div>

      {/* About Our Approach */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Social Media Marketing by Adonomics Technologies
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                In today's fast-paced digital world, your audience isn't just browsing social media—they're living on it. From Instagram stories to LinkedIn posts, your customers are online, scrolling, and engaging with brands they love.
              </p>
            </div>
            <div className="prose prose-lg text-gray-600">
              <p>
                We don't just "manage your socials." We design bold, intelligent, and data-backed social media marketing strategies that actually move the needle. Whether you're a startup looking to gain traction or an established brand wanting to scale, our approach ensures your message hits the right audience at the right time—with the right impact.
              </p>
              <h3 className="text-gray-900">Strategy Meets Creativity</h3>
              <p>
                At Adonomics Technologies, we believe in strategy-first marketing. We start by digging deep into your brand identity, audience behavior, and business goals. Then we craft a custom content plan that aligns with your vision.
              </p>
              <p>
                We work across all major platforms: Instagram, Facebook, LinkedIn, X (Twitter), Pinterest, YouTube, Threads & emerging platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real Engagement Section */}
      <div className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Real Engagement. Real Growth.
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Social media marketing isn't just about likes and shares. It's about building trust, driving conversations, and creating a loyal community around your brand.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Increased Engagement",
                description: "Meaningful interactions with your target audience"
              },
              {
                title: "Quality Inquiries",
                description: "More DMs and messages from potential customers"
              },
              {
                title: "Website Traffic",
                description: "Boosted visits to your website or online store"
              },
              {
                title: "Professional Presence",
                description: "Consistent, high-quality brand representation"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Social Media Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              End-to-end solutions tailored to your business goals
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Content Creation",
                  description:
                    "Professional graphics, videos, and copywriting tailored to your brand voice and audience preferences.",
                  icon: FaPenFancy,
                  iconColor: "text-emerald-600",
                },
                {
                  title: "Post Scheduling",
                  description:
                    "Strategic scheduling for optimal engagement times across all platforms using premium tools.",
                  icon: FaCalendarAlt,
                  iconColor: "text-blue-600",
                },
                {
                  title: "Community Management",
                  description:
                    "Daily monitoring and engagement with your audience to build relationships and brand loyalty.",
                  icon: FaUsers,
                  iconColor: "text-purple-600",
                },
                {
                  title: "Paid Advertising",
                  description:
                    "Targeted social media ad campaigns to reach your ideal customers and maximize ROI.",
                  icon: FaBullseye,
                  iconColor: "text-red-600",
                },
                {
                  title: "Analytics & Reporting",
                  description:
                    "Monthly performance reports with actionable insights to refine your strategy.",
                  icon: FaChartLine,
                  iconColor: "text-yellow-600",
                },
                {
                  title: "Influencer Collaboration",
                  description:
                    "Strategic partnerships with relevant influencers to expand your reach and credibility.",
                  icon: FaThumbsUp,
                  iconColor: "text-pink-600",
                },
              ].map((service, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span
                          className={`inline-flex items-center justify-center p-3 rounded-md shadow-lg ${service.iconColor} bg-white`}
                        >
                          <service.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Businesses Trust Adonomics Technologies
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              We're not your average agency. We're built by real marketers, designers, and analysts who care about results.
            </p>
          </div>

          <div className="mt-12">
            <div className="prose prose-lg text-gray-600 max-w-4xl mx-auto">
              <p>
                We've helped fashion brands grow their Instagram by over 200% in just 6 months. We've driven leads for B2B firms through targeted LinkedIn campaigns. And we've launched viral TikToks for consumer brands that resulted in thousands of dollars in sales overnight.
              </p>
              <h3 className="text-gray-900">Done-for-You Social Media Campaigns</h3>
              <p>
                We handle everything—so you don't have to. That includes:
              </p>
              <ul>
                <li>Social media audits and competitor analysis</li>
                <li>Monthly content calendars and scheduling</li>
                <li>Graphic and video content creation</li>
                <li>Monthly analytics reports</li>
                <li>Community management and DM replies</li>
                <li>Ad campaigns (when you're ready to scale)</li>
              </ul>
              <p>
                Whether you want to run a campaign around a new product launch or build long-term brand presence, we've got the tools and experience to make it happen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Proven 5-Step Process
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              A strategic approach to delivering consistent results
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="relative z-10 lg:w-1/2">
                <div className="space-y-12">
                  {[
                    {
                      number: "01",
                      title: "Discovery & Strategy",
                      description:
                        "We analyze your business, competitors, and audience to create a customized strategy.",
                    },
                    {
                      number: "02",
                      title: "Content Planning",
                      description:
                        "Monthly content calendars aligned with your marketing goals and audience interests.",
                    },
                    {
                      number: "03",
                      title: "Creative Development",
                      description:
                        "Our designers and copywriters produce engaging, platform-optimized content.",
                    },
                    {
                      number: "04",
                      title: "Execution & Engagement",
                      description:
                        "Daily posting and community interaction to build relationships with your audience.",
                    },
                    {
                      number: "05",
                      title: "Analysis & Optimization",
                      description:
                        "Continuous performance tracking and strategy refinement for better results.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -left-4 -top-1 h-8 w-8 rounded-full bg-emerald-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative z-10 flex items-start">
                        <span className="text-emerald-600 font-bold mr-4">
                          {step.number}
                        </span>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:w-1/2">
                <div className="bg-emerald-50 rounded-xl p-8 lg:p-12">
                  <img
                    className="w-full h-auto rounded-lg shadow-xl"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Social media team working"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">
              Ready to elevate your social media presence?
            </span>
            <span className="block text-emerald-100">
              Let's create something amazing together.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50 transition duration-300"
              >
                Get Your Free Audit
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-800 transition duration-300"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;