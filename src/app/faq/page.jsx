import React from 'react'
import General from './Components/General'
import Curriculum from './Components/Curriculum'
import Activity from './Components/Activity'
import Get from '../contact/Components/Get'
import Hero from './Components/Hero'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Address from '../Components/HomePage/Address'
import Header2 from '../Components/Header2'

export default function page() {
  return (
    <div>
      {/* <Header /> */}
      <Header2 />
      <Hero />
      <General />
      <Curriculum />
      <Activity />
      <Get text='Didn’t find answers to your question?'/>
      <Address />
      <Footer />
    </div>
  )
}
