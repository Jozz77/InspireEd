import React from 'react'
import ReviewsHero from './Components/ReviewsHero'
import PeopleReviews from './Components/PeopleReviews'
import BestEnvirons from './Components/BestEnvirons'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

export default function page() {
  return (
    <div>
      <Header />
      <ReviewsHero />
      <PeopleReviews />
      <BestEnvirons />
      <Footer />
    </div>
  )
}
