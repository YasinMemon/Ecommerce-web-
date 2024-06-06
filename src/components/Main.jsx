import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Navigation from './Navigation'
import TrendingProducts from './TrendingProducts'
import Footer from './Footer'

function Main() {
  return (
    <>
      <div className="mx-auto">
        <Navbar />
        <Hero />
        <Navigation />
        <TrendingProducts />
        <Footer/>
      </div>
    </>
  )
}

export default Main
