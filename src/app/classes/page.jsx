import Header from '@/Components/Header'
import React from 'react'
import ClassesHero from './Components/ClassesHero'
import Footer from '@/Components/Footer'
import ClassesBody from './Components/ClassesBody'

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
