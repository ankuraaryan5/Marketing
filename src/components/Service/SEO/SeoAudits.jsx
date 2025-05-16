import { FaSearch, FaChartLine, FaCheckCircle, FaTools, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const SEOPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block">Professional</span>
                  <span className="block text-blue-300">SEO Audit Tools</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Analyze your website's SEO performance and get actionable insights to improve your search rankings.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#audit-tools"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Start Free Audit
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#features"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="SEO Analysis"
          />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive SEO Analysis
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our tools provide detailed insights into all aspects of your website's SEO performance.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Audit Tools Section */}
      <div id="audit-tools" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">SEO Tools</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Run a Free SEO Audit
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Enter your website URL to get a comprehensive SEO analysis.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6 max-w-3xl mx-auto">
            <div className="flex">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Enter your website URL (e.g., https://example.com)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-r-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaSearch className="mr-2" />
                Analyze
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">We'll analyze your website and provide a detailed SEO report.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {auditTools.map((tool) => (
              <div key={tool.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-300 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What Our Customers Say
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-indigo-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-indigo-200">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-indigo-100">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to improve your SEO?</span>
            <span className="block text-blue-600">Start your free audit today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#audit-tools"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#features"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    name: 'Technical SEO',
    description:
      'Identify crawl errors, site speed issues, mobile usability problems, and other technical factors affecting your rankings.',
    icon: FaTools,
  },
  {
    name: 'Content Analysis',
    description:
      'Evaluate your content quality, keyword usage, readability, and optimization opportunities to improve engagement.',
    icon: FaSearch,
  },
  {
    name: 'Backlink Profile',
    description:
      'Analyze your backlinks for quality, anchor text distribution, and identify toxic links that might be harming your rankings.',
    icon: FaShieldAlt,
  },
  {
    name: 'Mobile Optimization',
    description:
      'Check how well your site performs on mobile devices and get recommendations for mobile-specific improvements.',
    icon: FaMobileAlt,
  },
  {
    name: 'Performance Metrics',
    description:
      'Measure Core Web Vitals and other performance metrics that directly impact user experience and search rankings.',
    icon: FaChartLine,
  },
  {
    name: 'Competitive Analysis',
    description:
      'Compare your site against competitors to identify gaps and opportunities in your SEO strategy.',
    icon: FaCheckCircle,
  },
];

const auditTools = [
  {
    name: 'Website Crawler',
    description: 'Discover all pages on your site and identify crawlability issues.',
    icon: FaSearch,
  },
  {
    name: 'Keyword Analysis',
    description: 'Analyze your target keywords and their performance in search results.',
    icon: FaChartLine,
  },
  {
    name: 'Backlink Checker',
    description: 'Evaluate your backlink profile and identify linking opportunities.',
    icon: FaShieldAlt,
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Marketing Director at TechCorp',
    quote: 'The SEO audit tools helped us identify critical issues we were unaware of. Our organic traffic increased by 65% after implementing the recommendations.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    title: 'Founder of StartupX',
    quote: 'Incredibly detailed reports with actionable insights. The mobile optimization suggestions alone doubled our conversion rate.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'David Wilson',
    title: 'SEO Manager at RetailCo',
    quote: 'The competitive analysis feature gave us the edge we needed to outperform our main competitor in search rankings.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

export default SEOPage;