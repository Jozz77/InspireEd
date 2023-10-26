import React from 'react'
import AcademicsHero from './Components/AcademicsHero'
import Commitment from './Components/Commitment'
import Subjects from './Components/Subjects'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

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
