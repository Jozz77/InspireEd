import React from 'react'
import ClassesHero from './Components/ClassesHero'
import ClassesBody from './Components/ClassesBody'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function page() {
  return (
    <div>
      <Header />
      <ClassesHero />
      <ClassesBody />
      <Footer />
    </div>
  )
}
