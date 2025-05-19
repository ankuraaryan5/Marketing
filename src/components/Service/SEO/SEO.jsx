import React from 'react';

const SeoServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <h1 className="text-4xl mt-10 md:text-5xl font-bold mb-4">Get Top Google Rankings & Grow Your Business!</h1>
          <p className="text-xl mb-8">We deliver proven SEO strategies to increase traffic, leads, and sales.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Get a Free SEO Audit
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our SEO Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition duration-300">
            <div className="text-green-600 text-2xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">On-Page SEO Optimization</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Keyword Research & Strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Meta Tags & URL Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Content Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Header Tags & Internal Linking</span>
              </li>
            </ul>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition duration-300">
            <div className="text-green-600 text-2xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Off-Page SEO & Link Building</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>High-Quality Backlink Creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Guest Posting & Niche Edits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Brand Mentions & Citations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Local SEO & Directory Listings</span>
              </li>
            </ul>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition duration-300">
            <div className="text-green-600 text-2xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Technical SEO Audit</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Site Speed Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Mobile-Friendly Fixes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Schema Markup Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>XML Sitemap & Robots.txt Check</span>
              </li>
            </ul>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition duration-300">
            <div className="text-green-600 text-2xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Local SEO (For Businesses)</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Google My Business Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Local Citations & NAP Consistency</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Reviews & Reputation Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Geo-Targeted SEO Strategies</span>
              </li>
            </ul>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition duration-300">
            <div className="text-green-600 text-2xl mb-4">🛒</div>
            <h3 className="text-xl font-bold text-green-800 mb-3">E-commerce SEO</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Product Page Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Category & Tag SEO</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Fixing Duplicate Content Issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Structured Data for Rich Snippets</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our SEO Packages</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-green-200 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Starter</h3>
              <p className="text-4xl font-bold text-green-600 mb-6">₹5,000<span className="text-lg text-gray-500">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Basic On-Page SEO</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>5 High-Quality Backlinks</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Keyword Research</span>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300">
                Get Started
              </button>
            </div>

            {/* Package 2 (Popular) */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-400 text-center transform scale-105 z-10">
              <div className="bg-green-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Growth</h3>
              <p className="text-4xl font-bold text-green-600 mb-6">₹12,000<span className="text-lg text-gray-500">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Full On-Page SEO</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>15 High-Quality Backlinks</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Technical SEO Audit</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Monthly Reporting</span>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300">
                Get Started
              </button>
            </div>

            {/* Package 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-green-200 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Premium</h3>
              <p className="text-4xl font-bold text-green-600 mb-6">₹25,000<span className="text-lg text-gray-500">/mo</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Complete SEO Strategy</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>30+ High-Quality Backlinks</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Content Marketing</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Why Choose Us?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">✔</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Google Certified Experts</h3>
            <p className="text-gray-600">Our team is certified in advanced SEO strategies.</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">✔</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Transparent Reporting</h3>
            <p className="text-gray-600">Get detailed monthly reports on your rankings.</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">✔</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">100% White-Hat Techniques</h3>
            <p className="text-gray-600">Safe, ethical SEO that lasts.</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 text-2xl">✔</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Dedicated Account Manager</h3>
            <p className="text-gray-600">Personalized support for your business.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Google Rankings?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Get Started Today
            </button>
            <button className="bg-white hover:bg-gray-100 text-green-800 font-bold py-3 px-6 rounded-lg transition duration-300">
              Call Now: 0612-4150537
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoServicesPage;