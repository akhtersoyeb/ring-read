import { useUser } from '@auth0/nextjs-auth0';

import type { NextPage } from 'next'

import ArticleContainer from '../components/pageSections/ArticleContainer';
import Contact from '../components/forms/Contact'
import Features from '../components/pageSections/Features'
import Footer from '../components/nav/Footer'
import Hero from '../components/pageSections/Hero'
import Navbar from '../components/nav/Navbar'
import Pricing from '../components/pageSections/Pricing'
import Sidebar from '../components/nav/Sidebar';
import RightSideSection from '../components/pageSections/RightSideSection';


import { Grid, HStack, Stack } from '@chakra-ui/react';



const Home: NextPage = () => {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;



  if (user) {
    return (
      <>

        {/* Sidebar with header */}
        <Sidebar>

          <Stack
            spacing={'20px'}
            direction={'row'}>

            <ArticleContainer />


            {/* Extra Content */}
            <RightSideSection />

          </Stack>


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