import React from "react";
import {
  FaPalette,
  FaChessKnight,
  FaLightbulb,
  FaBuilding,
  FaSwatchbook,
  FaUsers,
} from "react-icons/fa";

const BrandingServices = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
            alt="Branding Services"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transform Your{" "}
            <span className="text-indigo-400">Brand Identity</span>
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            We craft memorable brand experiences that resonate with your
            audience and differentiate you from competitors.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-indigo-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700 transition duration-300"
            >
              Start Your Brand Journey
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Branding Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              End-to-end solutions to build, refine, and amplify your brand
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                icon: FaPalette,
                title: "Logo Design",
                description:
                  "Distinctive logos that capture your brand essence and make a lasting impression.",
                link: "/logo-design",
                features: [
                  "Custom logo concepts",
                  "Multiple design variations",
                  "All file formats included",
                  "Brand style guide",
                ],
                color: "text-indigo-600",
              },
              {
                icon: FaSwatchbook,
                title: "Brand Identity",
                description:
                  "Complete visual identity system including color palette, typography, and design elements.",
                link: "/brand-identity",
                features: [
                  "Color psychology analysis",
                  "Typography system",
                  "Visual style guidelines",
                  "Brand asset library",
                ],
                color: "text-purple-600",
              },
              {
                icon: FaChessKnight,
                title: "Brand Strategy",
                description:
                  "Strategic foundation for your brand including positioning, messaging, and voice.",
                link: "/brand-strategy",
                features: [
                  "Competitive analysis",
                  "Brand positioning",
                  "Messaging framework",
                  "Tone of voice guidelines",
                ],
                color: "text-blue-600",
              },
              {
                icon: FaBuilding,
                title: "Corporate Branding",
                description:
                  "Professional branding solutions for businesses and organizations of all sizes.",
                link: "/corporate-branding",
                features: [
                  "Brand architecture",
                  "Corporate identity system",
                  "Brand governance",
                  "Employee brand training",
                ],
                color: "text-teal-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:border-indigo-300 transition-all duration-300"
              >
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div
                      className={`flex items-center justify-center h-12 w-12 rounded-md ${service.color} bg-indigo-50 mx-auto`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-600 text-center">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-indigo-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Brand Development Process
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              A structured approach to creating powerful brands
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="relative z-10 lg:w-1/2">
                <div className="space-y-12">
                  {[
                    {
                      number: "01",
                      title: "Discovery & Research",
                      description:
                        "We dive deep into your business, market, and audience to uncover key insights.",
                    },
                    {
                      number: "02",
                      title: "Strategy Development",
                      description:
                        "Crafting your brand positioning, personality, and messaging framework.",
                    },
                    {
                      number: "03",
                      title: "Design Exploration",
                      description:
                        "Creating visual concepts that bring your brand strategy to life.",
                    },
                    {
                      number: "04",
                      title: "Refinement",
                      description:
                        "Iterating based on feedback to perfect your brand identity.",
                    },
                    {
                      number: "05",
                      title: "Implementation",
                      description:
                        "Developing all brand assets and guidelines for consistent application.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -left-4 -top-1 h-8 w-8 rounded-full bg-indigo-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative z-10 flex items-start">
                        <span className="text-indigo-600 font-bold mr-4">
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
                <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
                  <img
                    className="w-full h-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                    alt="Brand development process"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Invest in Professional Branding?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Powerful branding delivers measurable business results
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Brand Recognition",
                description:
                  "Consistent, professional branding makes your business instantly recognizable.",
                stat: "80%",
                statLabel: "More memorable to consumers",
              },
              {
                title: "Competitive Edge",
                description:
                  "Stand out in crowded markets with distinctive brand identity.",
                stat: "3x",
                statLabel: "Higher perceived value",
              },
              {
                title: "Customer Loyalty",
                description:
                  "Strong brands build emotional connections that drive repeat business.",
                stat: "68%",
                statLabel: "Of customers stay loyal",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-gray-600">{benefit.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-3xl font-bold text-indigo-600">
                    {benefit.stat}
                  </p>
                  <p className="text-sm text-gray-500">{benefit.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to elevate your brand?</span>
            <span className="block text-indigo-200">
              Let's create something remarkable together.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300"
              >
                Get Your Free Consultation
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900 transition duration-300"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingServices;
