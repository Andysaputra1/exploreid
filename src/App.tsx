import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import TopDestinations from './component/TopDestinations'

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <TopDestinations/>
    </>
  )
}
