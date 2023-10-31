import React from 'react'
import AcademicsHero from './Components/AcademicsHero'
import Commitment from './Components/Commitment'
import Subjects from './Components/Subjects'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Header2 from '../Components/Header2'

export default function page() {
  return (
    <div>
      {/* <Header /> */}
      <Header2 />
      <AcademicsHero />
      <Commitment />
      <Subjects />
      <Footer />
    </div>
  )
}
