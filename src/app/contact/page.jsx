import React from 'react'
import Get from './Components/Get'
import ContactHero from './Components/ContactHero'
import Header from '../Components/Header'
import Address from '../Components/HomePage/Address'
import Footer from '../Components/Footer'


export const metadata = {
  title: 'Contact',
}

export default function page() {
  return (
    <div className=' '>
      <Header />
      <ContactHero />
      <Address />
      <Get text='get in touch'/>
      <Footer />
    </div>
  )
}
