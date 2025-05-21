import React from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../About/About";
import Gallery from "../Gallery/Gallery";
import Services from "../Service/Service";
import TestimonialAndContact from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Adonomics Technologies, Adonomics, digital marketing agency,  website development , digital marketing services in Patna, Patna,  digital marketing, SEO, social media marketing, PPC, content marketing, web development"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Welcome to our digital marketing agency. We offer a range of services to help your business grow online."
        />
        <link rel="canonical" href="/" />
        <meta
          property="og:title"
          content="Adonomics Technologies - Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="Welcome to our digital marketing agency. We offer a range of services to help your business grow online."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta property="og:url" content="https://adonomicstechnologies.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      <Hero />
      <AboutSection />
      <Gallery />
      <Services />
      <TestimonialAndContact />
    </div>
  );
};

export default Home;
