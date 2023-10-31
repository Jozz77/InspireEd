import React from 'react'
import Get from './Components/Get'
import ContactHero from './Components/ContactHero'
import Header from '../Components/Header'
import Address from '../Components/HomePage/Address'
import Footer from '../Components/Footer'
import Header2 from '../Components/Header2'


export const metadata = {
  title: 'Contact',
}

export default function page() {
  return (
    <div className=' '>
      {/* <Header /> */}
      <Header2 />
      <ContactHero />
      <Address />
      <div className=' mb-8 sm:mb-10 lg:mb-12 xl:mb-16'>
      <Get text='get in touch'/>
      </div>
      <Footer />
    </div>
  )
}
