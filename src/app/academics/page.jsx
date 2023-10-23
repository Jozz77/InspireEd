import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import AcademicsHero from './Components/AcademicsHero'
import Commitment from './Components/Commitment'
import Subjects from './Components/Subjects'

export default function page() {
  return (
    <div>
      <Header />
      <AcademicsHero />
      <Commitment />
      <Subjects />
      <Footer />
    </div>
  )
}
