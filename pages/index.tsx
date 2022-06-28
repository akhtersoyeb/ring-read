import type { NextPage } from 'next'

import Contact from '../components/forms/Contact'
import Features from '../components/pageSections/Features'
import Footer from '../components/nav/Footer'
import Hero from '../components/pageSections/Hero'
import Navbar from '../components/nav/Navbar'
import Pricing from '../components/pageSections/Pricing'

const Home: NextPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Pricing */}
      <Pricing />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </>
  )
}


export default Home