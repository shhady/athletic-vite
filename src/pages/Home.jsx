import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/AboutUs/AboutUs'
import WhyUs from '../components/WhyUs/WhyUs'
import Pricing from '../components/Pricing/Pricing'
import Gallery from '../components/Gallery/Gallery'
export default function Home() {
  return (
    <div>
        <Hero/>
      <AboutUs/>
      <WhyUs/>
      <Pricing/>
      <Gallery/>
    </div>
  )
}
