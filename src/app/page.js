import Footer from './Components/Footer'
import Header from './Components/Header'
import Header2 from './Components/Header2'
import Hero from './Components/Hero/Hero'
import Address from './Components/HomePage/Address'
import Cocurricular from './Components/HomePage/Cocurricular'
import Eligility from './Components/HomePage/Eligility'
import Glance from './Components/HomePage/Glance'
import Little from './Components/HomePage/Little'
import Overview from './Components/HomePage/Overview'
import Satisfied from './Components/HomePage/Satisfied'
import Video from './Components/HomePage/Video'

export default function Home() {
  return (
    <section>
      {/* <Header /> */}
      <Header2 />
      <main>
        <Hero />
        {/* <EnrollForm /> */}
        <Little />
        <Glance />
        <Eligility />
        <Video />
        <Overview />
        <Cocurricular />
        <Satisfied />
        <Address />
        <Footer />
      </main>
    </section>
  )
}
