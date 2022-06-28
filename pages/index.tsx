import { useUser } from '@auth0/nextjs-auth0';

import type { NextPage } from 'next'

import Contact from '../components/forms/Contact'
import Features from '../components/pageSections/Features'
import Footer from '../components/nav/Footer'
import Hero from '../components/pageSections/Hero'
import Navbar from '../components/nav/Navbar'
import Pricing from '../components/pageSections/Pricing'
import Sidebar from '../components/nav/Sidebar';

const Home: NextPage = () => {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user)

  if (user) {
    return (
      <>

        {/* Sidebar with header */}
        <Sidebar>

          {/* Main Content */}

          {/* Extra Content */}

          {/* Footer */}
        </Sidebar>
      </>
    )
  }

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