import React from 'react'
import ClassesHero from './Components/ClassesHero'
import ClassesBody from './Components/ClassesBody'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Header2 from '../Components/Header2'

export default function page() {
  return (
    <div>
      {/* <Header /> */}
      <Header2 />
      <ClassesHero />
      <ClassesBody />
      <Footer />
    </div>
  )
}
