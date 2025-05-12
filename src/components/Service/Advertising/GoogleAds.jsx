import React from 'react';

const GoogleAdsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Google Color Theme */}
      <div className="relative  bg-green-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')]"></div>
        </div>
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="flex justify-center mt-10 mb-6">
            <span className="text-4xl font-bold text-blue-500">G</span>
            <span className="text-4xl font-bold text-red-500">o</span>
            <span className="text-4xl font-bold text-yellow-500">o</span>
            <span className="text-4xl font-bold text-blue-500">g</span>
            <span className="text-4xl font-bold text-green-500">l</span>
            <span className="text-4xl font-bold text-red-500">e</span>
            <span className="text-4xl font-bold ml-4">Ads</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get More Customers with <span className="text-blue-600">Google</span> Advertising
          </h1>
          <p className="text-xl text-black-600 mb-8 max-w-2xl mx-auto">
            Appear at the top of Google search results when customers are searching for your products
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.055 1.265.07 1.648.07 4.85.07 1.266 0 1.645-.016 4.85-.071 1.17-.055 1.806-.249 2.227-.415.562-.217.96-.477 1.379-.896.419-.419.679-.819.896-1.381.164-.422.36-1.057.413-2.227.056-1.265.072-1.648.072-4.85 0-3.204-.016-3.586-.072-4.851-.055-1.17-.249-1.806-.415-2.227-.217-.562-.477-.96-.896-1.382-.42-.419-.82-.679-1.38-.896-.423-.164-1.058-.36-2.227-.414C15.667 2.165 15.288 2.16 12 2.16z"/>
              </svg>
              Get Free Strategy Call
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg border border-gray-300 shadow-sm transition duration-300">
              See Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* Google Ads Types */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="text-blue-600">Google</span> <span className="text-red-600">Advertising</span> <span className="text-yellow-600">Solutions</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Search Ads */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Search Ads</h3>
            </div>
            <p className="text-gray-600 mb-4">Text ads that appear at the top of Google search results</p>
            <ul className="space-y-2">
              {['Keyword targeting', 'Ad extensions', 'Quality Score optimization', 'Remarketing'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Display Ads */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-red-500">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Display Ads</h3>
            </div>
            <p className="text-gray-600 mb-4">Visual banner ads across millions of websites</p>
            <ul className="space-y-2">
              {['Responsive ads', 'Placement targeting', 'Audience targeting', 'Native ads'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shopping Ads */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-yellow-500">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Shopping Ads</h3>
            </div>
            <p className="text-gray-600 mb-4">Product listings with images and prices</p>
            <ul className="space-y-2">
              {['Product feed optimization', 'Smart Shopping', 'Local inventory ads', 'Dynamic remarketing'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Google Ads Performance */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why <span className="text-blue-600">Google</span> <span className="text-red-600">Ads</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'High Intent',
                desc: 'Reach people actively searching for your products'
              },
              {
                icon: '📈',
                title: 'Measurable ROI',
                desc: 'Track every click and conversion'
              },
              {
                icon: '🎯',
                title: 'Precise Targeting',
                desc: 'Target by keywords, demographics, and behaviors'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Google Colors */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow with Google Ads?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Our certified Google Ads specialists will build your high-converting campaign</p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.055 1.265.07 1.648.07 4.85 0 1.266-.016 1.645-.071 4.85-.055 1.17-.249 1.806-.415 2.227-.217.562-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.265.055-1.648.07-4.85.07-3.204 0-3.586-.016-4.851-.071-1.17-.055-1.806-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.419-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.055-1.265-.07-1.648-.07-4.85 0-3.204.016-3.586.071-4.851.055-1.17.249-1.806.415-2.227.217-.562.477-.96.896-1.382.419-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.265-.056 1.648-.07 4.85-.07z"/>
            </svg>
            Start Your Google Ads Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsPage;