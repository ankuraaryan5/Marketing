import React from 'react'
import Hero from '../Hero/Hero'
import AboutSection from '../About/About'
import Gallery from '../Gallery/Gallery'
import Services from '../Service/Service'
import TestimonialAndContact from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection/>
      <Gallery />
      <Services />
      <TestimonialAndContact />
    </div>
  )
}

export default Home
