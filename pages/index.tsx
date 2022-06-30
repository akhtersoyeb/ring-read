import { useUser } from '@auth0/nextjs-auth0';

import type { NextPage } from 'next'

import Contact from '../components/forms/Contact'
import Features from '../components/pageSections/Features'
import Footer from '../components/nav/Footer'
import Hero from '../components/pageSections/Hero'
import Navbar from '../components/nav/Navbar'
import Pricing from '../components/pageSections/Pricing'
import Sidebar from '../components/nav/Sidebar';
import ArticleCard from '../components/cards/ArticleCard';

import * as articleData from '../data/articles.json'

const Home: NextPage = () => {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;



  if (user) {
    return (
      <>

        {/* Sidebar with header */}
        <Sidebar>

          <ArticleCard
            authorPictureSrc={articleData[0].authorPictureSrc}
            authorName={articleData[0].authorName}
            date={articleData[0].date}
            title={articleData[0].title}
            seoText={articleData[0].seoText}
            coverPictureSrc={articleData[0].coverPictureSrc}
            tags={articleData[0].tags}
          />


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