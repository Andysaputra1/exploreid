import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import TopDestinations from './component/TopDestination/TopDestinations'
import FerryPartners from './component/FerryPartners/FerryPartners'
import AboutUs from './component/AboutUs/AboutUs'

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <TopDestinations/>
      <FerryPartners/>
      <AboutUs/>
    </>
  )
}
