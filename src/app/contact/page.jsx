import Header from '@/Components/Header'
import React from 'react'
import ContactAddress from './Components/Get'
import ContactHero from './Components/ContactHero'
import Address from '@/Components/HomePage/Address'
import Footer from '@/Components/Footer'

export const metadata = {
  title: 'Contact',
}

export default function page() {
  return (
    <div className=' '>
      <Header />
      <ContactHero />
      <Address />
      <ContactAddress />
      <Footer />
    </div>
  )
}
