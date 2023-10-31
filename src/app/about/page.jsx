import React from 'react'
import AboutHero from './Components/AboutHero'
import Great from './Components/Great'
import Founder from './Components/Founder'
import OurStory from './Components/OurStory'
import AboutFaq from './Components/AboutFaq'
import Header from '../Components/Header'
import Glance from '../Components/HomePage/Glance'
import Footer from '../Components/Footer'
import Header2 from '../Components/Header2'

export default function page() {
  return (
    <div>
      {/* <Header /> */}
      <Header2 />
      <AboutHero />
      <Great />
      <Founder />
      <OurStory />
      <Glance />
      <AboutFaq />
      <Footer />
    </div>
  )
}
