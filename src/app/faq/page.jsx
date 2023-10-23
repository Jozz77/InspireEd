import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
// import FaqHero from './Components/FaqHero'
import General from './Components/General'
import Curriculum from './Components/Curriculum'
import Activity from './Components/Activity'
import Get from '../contact/Components/Get'
import Address from '@/Components/HomePage/Address'
import FaqHero from './Components/FaqHero'

export default function page() {
  return (
    <div>
      <Header />
      <FaqHero />
      <General />
      <Curriculum />
      <Activity />
      <Get text='Didn’t find answers to your question?'/>
      <Address />
      <Footer />
    </div>
  )
}
