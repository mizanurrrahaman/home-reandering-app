import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Listing from '../components/Listing'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Listing/>
    </div>
  )
}

export default HomePage