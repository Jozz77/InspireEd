import Header from '@/Components/Header'
import React from 'react'
import ContactAddress from './Components/ContactAddress'
import ContactHero from './Components/ContactHero'

export const metadata = {
  title: 'Contact',
}

export default function page() {
  return (
    <div className=' '>
      <Header />
      <ContactHero />
      <ContactAddress />
    </div>
  )
}
