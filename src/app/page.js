import Header from '@/Components/Header'
import Hero from '@/Components/Hero/Hero'
import Glance from '@/Components/HomePage/Glance'
import Little from '@/Components/HomePage/Little'

export default function Home() {
  return (
    <section>
      <Header />
      <main>
        <Hero />
        <Little />
        <Glance />
      </main>
    </section>
  )
}
