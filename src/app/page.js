import Header from '@/Components/Header'
import Hero from '@/Components/Hero/Hero'
import Address from '@/Components/HomePage/Address'
import Eligility from '@/Components/HomePage/Eligility'
import Glance from '@/Components/HomePage/Glance'
import Little from '@/Components/HomePage/Little'
import Overview from '@/Components/HomePage/Overview'
import Video from '@/Components/HomePage/Video'

export default function Home() {
  return (
    <section>
      <Header />
      <main>
        <Hero />
        <Little />
        <Glance />
        <Eligility />
        <Video />
        <Overview />
        <Address />
      </main>
    </section>
  )
}
