import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import AboutHero from './Components/AboutHero'
import Great from './Components/Great'
import Founder from './Components/Founder'
import OurStory from './Components/OurStory'
import Glance from '@/Components/HomePage/Glance'
import AboutFaq from './Components/AboutFaq'

export default function page() {
  return (
    <div>
      <Header />
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
